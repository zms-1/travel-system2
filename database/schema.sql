-- =====================================================
-- 旅游景点信息管理系统 - 数据库表结构
-- =====================================================

-- 删除数据库（如果存在，谨慎使用）
-- DROP DATABASE IF EXISTS travel_system;

-- 创建数据库
CREATE DATABASE IF NOT EXISTS travel_system
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

-- 使用数据库
USE travel_system;

-- 创建景点表
CREATE TABLE IF NOT EXISTS attractions (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '主键ID',
    name VARCHAR(100) NOT NULL COMMENT '景点名称',
    category VARCHAR(50) NOT NULL COMMENT '分类（自然风光/历史文化/主题乐园/城市地标/文化体验/特色体验）',
    city VARCHAR(50) NOT NULL COMMENT '所在城市',
    price DECIMAL(10,2) DEFAULT 0.00 COMMENT '门票价格（元）',
    rating DECIMAL(2,1) DEFAULT 0.0 COMMENT '评分（0-5分）',
    description TEXT COMMENT '景点描述',
    cover_image VARCHAR(255) DEFAULT NULL COMMENT '封面图片路径',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '更新时间',
    
    -- 索引优化
    INDEX idx_name (name),
    INDEX idx_category (category),
    INDEX idx_city (city),
    INDEX idx_price (price),
    INDEX idx_rating (rating)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='景点信息表';

-- 可选：创建用户表（用于登录功能扩展）
CREATE TABLE IF NOT EXISTS users (
    id INT PRIMARY KEY AUTO_INCREMENT COMMENT '用户ID',
    username VARCHAR(50) UNIQUE NOT NULL COMMENT '用户名',
    password VARCHAR(255) NOT NULL COMMENT '密码（加密存储）',
    email VARCHAR(100) COMMENT '邮箱',
    role ENUM('admin', 'user') DEFAULT 'user' COMMENT '角色',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
    last_login DATETIME COMMENT '最后登录时间'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='用户表';

-- 插入默认管理员账户（密码为 admin123 的加密值，实际使用需加盐）
INSERT IGNORE INTO users (username, password, email, role) VALUES
('admin', '$2b$10$YourHashedPasswordHere', 'admin@travel.com', 'admin'),
('user', '$2b$10$YourHashedPasswordHere', 'user@travel.com', 'user');

-- 可选：创建分类统计视图
CREATE OR REPLACE VIEW category_stats AS
SELECT 
    category,
    COUNT(*) as total_count,
    ROUND(AVG(rating), 1) as avg_rating,
    ROUND(AVG(price), 2) as avg_price,
    MIN(price) as min_price,
    MAX(price) as max_price
FROM attractions
GROUP BY category
ORDER BY total_count DESC;

-- 验证表结构
DESCRIBE attractions;