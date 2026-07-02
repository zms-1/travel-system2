const db = require('../config/db');

// 获取景点列表（支持分页、搜索、筛选）
exports.getAttractions = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const pageSize = parseInt(req.query.pageSize) || 10;
        const offset = (page - 1) * pageSize;
        
        // 搜索条件
        const keyword = req.query.keyword || '';
        const category = req.query.category || '';
        const minPrice = req.query.minPrice || '';
        const maxPrice = req.query.maxPrice || '';
        
        let sql = 'SELECT * FROM attractions WHERE 1=1';
        let countSql = 'SELECT COUNT(*) as total FROM attractions WHERE 1=1';
        const params = [];
        
        // 动态添加查询条件
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
        if (minPrice) {
            sql += ' AND price >= ?';
            countSql += ' AND price >= ?';
            params.push(minPrice);
        }
        if (maxPrice) {
            sql += ' AND price <= ?';
            countSql += ' AND price <= ?';
            params.push(maxPrice);
        }
        
        sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?';
        
        // 获取总数
        const [countResult] = await db.query(countSql, params.slice(0, params.length));
        const total = countResult[0].total;
        
        // 获取分页数据
        const [rows] = await db.query(sql, [...params, pageSize, offset]);
        
        res.json({
            list: rows,
            total: total,
            page: page,
            pageSize: pageSize
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '服务器错误' });
    }
};

// 获取单个景点详情
exports.getAttractionById = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM attractions WHERE id = ?', [req.params.id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: '景点不存在' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ message: '服务器错误' });
    }
};

// 新增景点
exports.createAttraction = async (req, res) => {
    try {
        const { name, category, city, price, rating, description } = req.body;
        const coverImage = req.file ? `/uploads/${req.file.filename}` : null;
        
        const [result] = await db.query(
            `INSERT INTO attractions (name, category, city, price, rating, description, cover_image) 
             VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [name, category, city, price, rating, description, coverImage]
        );
        
        res.status(201).json({ 
            message: '添加成功', 
            id: result.insertId 
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: '服务器错误' });
    }
};

// 修改景点
exports.updateAttraction = async (req, res) => {
    try {
        const { name, category, city, price, rating, description } = req.body;
        let coverImage = req.body.cover_image;
        
        if (req.file) {
            coverImage = `/uploads/${req.file.filename}`;
        }
        
        await db.query(
            `UPDATE attractions SET name=?, category=?, city=?, price=?, rating=?, description=?, cover_image=? 
             WHERE id=?`,
            [name, category, city, price, rating, description, coverImage, req.params.id]
        );
        
        res.json({ message: '修改成功' });
    } catch (error) {
        res.status(500).json({ message: '服务器错误' });
    }
};

// 删除景点
exports.deleteAttraction = async (req, res) => {
    try {
        await db.query('DELETE FROM attractions WHERE id = ?', [req.params.id]);
        res.json({ message: '删除成功' });
    } catch (error) {
        res.status(500).json({ message: '服务器错误' });
    }
};

// 获取所有分类（用于筛选下拉框）
exports.getCategories = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT DISTINCT category FROM attractions ORDER BY category');
        res.json(rows.map(row => row.category));
    } catch (error) {
        res.status(500).json({ message: '服务器错误' });
    }
};

// 上传图片
exports.uploadImage = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: '请选择图片' });
        }
        res.json({ 
            message: '上传成功', 
            imageUrl: `/uploads/${req.file.filename}` 
        });
    } catch (error) {
        res.status(500).json({ message: '上传失败' });
    }
};