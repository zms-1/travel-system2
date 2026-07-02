const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const attractionRoutes = require('./routes/attractionRoutes');

const app = express();

// 中间件
app.use(cors());                    // 跨域处理
app.use(express.json());            // 解析 JSON 请求体
app.use(express.urlencoded({ extended: true }));  // 解析表单数据

// 静态文件服务（让前端可以访问上传的图片）
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// 路由
app.use('/api', attractionRoutes);

// 404 处理
app.use((req, res) => {
    res.status(404).json({ message: '接口不存在' });
});

// 错误处理
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: err.message || '服务器内部错误' });
});

module.exports = app;