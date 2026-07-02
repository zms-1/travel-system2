const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

// 中间件
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 创建uploads目录
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    console.log('✅ 创建 uploads 目录');
}
app.use('/uploads', express.static(uploadDir));

// ========== 数据库配置 ==========
const dbConfig = {
    host: 'localhost',
    user: 'root',
    password: '205823',  // ⚠️ 改成你的MySQL密码
    database: 'travel_system',
    port: 3306
};

const pool = mysql.createPool(dbConfig);
const promisePool = pool.promise();

// 测试数据库连接
pool.getConnection((err, conn) => {
    if (err) {
        console.log('❌ 数据库连接失败:', err.message);
        console.log('请检查: 1.MySQL服务 2.密码是否正确');
    } else {
        console.log('✅ 数据库连接成功');
        conn.release();
    }
});

// ========== 图片上传配置 ==========
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uploadDir),
    filename: (req, file, cb) => {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, unique + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 },
    fileFilter: (req, file, cb) => {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('只支持 jpg/png 格式'));
        }
    }
});

// ========== API 路由 ==========

// 1. 上传图片
app.post('/api/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ success: false, message: '请选择图片' });
    }
    res.json({ success: true, imageUrl: `/uploads/${req.file.filename}` });
});

// 2. 获取景点列表（支持搜索分页）
app.get('/api/attractions', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 12;
        const offset = (page - 1) * pageSize;
        const keyword = req.query.keyword || '';
        const category = req.query.category || '';
        
        let sql = 'SELECT * FROM attractions WHERE 1=1';
        let countSql = 'SELECT COUNT(*) as total FROM attractions WHERE 1=1';
        const params = [];
        
        if (keyword) {
            sql += ' AND name LIKE ?';
            countSql += ' AND name LIKE ?';
            params.push(`%${keyword}%`);
        }
        if (category) {
            sql += ' AND category = ?';
            countSql += ' AND category = ?';
            params.push(category);
        }
        
        const [countResult] = await promisePool.query(countSql, params);
        const total = countResult[0].total;
        
        const [rows] = await promisePool.query(
            sql + ' ORDER BY id DESC LIMIT ? OFFSET ?',
            [...params, pageSize, offset]
        );
        
        res.json({
            success: true,
            list: rows,
            total: total,
            page: page,
            pageSize: pageSize
        });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 3. 获取单个景点详情
app.get('/api/attractions/:id', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT * FROM attractions WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ success: false, message: '景点不存在' });
        }
        res.json({ success: true, data: rows[0] });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 4. 新增景点
app.post('/api/attractions', upload.single('cover_image'), async (req, res) => {
    try {
        const { name, category, city, price, rating, description } = req.body;
        
        if (!name || !category || !city) {
            return res.status(400).json({ success: false, message: '请填写必填项' });
        }
        
        let coverImage = null;
        if (req.file) {
            coverImage = `/uploads/${req.file.filename}`;
        }
        
        await promisePool.query(
            `INSERT INTO attractions (name, category, city, price, rating, description, cover_image) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, category, city, price || 0, rating || 0, description || '', coverImage]
        );
        
        res.json({ success: true, message: '添加成功' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 5. 修改景点
app.put('/api/attractions/:id', upload.single('cover_image'), async (req, res) => {
    try {
        const { name, category, city, price, rating, description, cover_image } = req.body;
        
        let coverImage = cover_image;
        if (req.file) {
            coverImage = `/uploads/${req.file.filename}`;
        }
        
        await promisePool.query(
            `UPDATE attractions 
             SET name=?, category=?, city=?, price=?, rating=?, description=?, cover_image=? 
             WHERE id=?`,
            [name, category, city, price || 0, rating || 0, description || '', coverImage, req.params.id]
        );
        
        res.json({ success: true, message: '修改成功' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 6. 删除景点
app.delete('/api/attractions/:id', async (req, res) => {
    try {
        await promisePool.query('DELETE FROM attractions WHERE id = ?', [req.params.id]);
        res.json({ success: true, message: '删除成功' });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 7. 获取所有分类
app.get('/api/categories', async (req, res) => {
    try {
        const [rows] = await promisePool.query('SELECT DISTINCT category FROM attractions ORDER BY category');
        res.json({ success: true, data: rows.map(r => r.category) });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// 8. 用户登录
app.post('/api/login', async (req, res) => {
    console.log('登录请求:', req.body.username);
    try {
        const { username, password } = req.body;
        
        const [users] = await promisePool.query('SELECT * FROM users WHERE username = ?', [username]);
        
        if (users.length === 0) {
            return res.status(401).json({ success: false, message: '用户名或密码错误' });
        }
        
        const hashedPassword = Buffer.from(password).toString('base64');
        
        if (users[0].password !== hashedPassword) {
            return res.status(401).json({ success: false, message: '用户名或密码错误' });
        }
        
        res.json({ 
            success: true, 
            token: 'token_' + Date.now(), 
            username: username 
        });
    } catch (err) {
        console.error('登录错误:', err);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

// 9. 用户注册
app.post('/api/register', async (req, res) => {
    console.log('注册请求:', req.body.username);
    try {
        const { username, email, password } = req.body;
        
        if (!username || !password) {
            return res.status(400).json({ success: false, message: '用户名和密码不能为空' });
        }
        
        if (username.length < 3) {
            return res.status(400).json({ success: false, message: '用户名至少3个字符' });
        }
        
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: '密码至少6个字符' });
        }
        
        const [existing] = await promisePool.query('SELECT * FROM users WHERE username = ?', [username]);
        if (existing.length > 0) {
            return res.status(400).json({ success: false, message: '用户名已存在' });
        }
        
        const hashedPassword = Buffer.from(password).toString('base64');
        await promisePool.query(
            'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
            [username, email || '', hashedPassword]
        );
        
        console.log('注册成功:', username);
        res.json({ success: true, message: '注册成功' });
    } catch (err) {
        console.error('注册错误:', err);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

// 10. 测试接口
app.get('/api/test', (req, res) => {
    res.json({ success: true, message: '后端服务正常运行' });
});

// 启动服务器
app.listen(PORT, () => {
    console.log(`\n🚀 服务器: http://localhost:${PORT}`);
    console.log(`📁 图片目录: ${uploadDir}`);
    console.log(`🔗 测试: http://localhost:${PORT}/api/test\n`);
});