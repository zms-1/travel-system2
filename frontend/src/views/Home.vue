<template>
  <div class="home">
    <!-- 导航栏 -->
    <nav class="navbar">
      <div class="nav-container">
        <div class="logo" @click="$router.push('/home')">
          <span>🏞️</span>
          <span>旅游景点管理系统</span>
        </div>
        <div class="nav-links">
          <router-link to="/home" class="active">首页</router-link>
          <router-link to="/attractions">景点管理</router-link>
        </div>
      </div>
    </nav>

    <!-- 英雄区域（带背景图） -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="hero-title">探索中国最美景点</h1>
        <p class="hero-subtitle">发现自然之美，感受文化之韵，开启您的精彩旅程</p>
        <div class="hero-stats">
          <div class="stat-item">
            <div class="stat-number">100+</div>
            <div class="stat-label">精选景点</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">30+</div>
            <div class="stat-label">城市覆盖</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">10+</div>
            <div class="stat-label">景点分类</div>
          </div>
        </div>
        <button class="explore-btn" @click="goToAttractions">
          开始探索 <span>→</span>
        </button>
      </div>
    </section>

    <!-- 特色功能 -->
    <section class="features">
      <div class="container">
        <h2 class="section-title">为什么选择我们？</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏔️</div>
            <h3>丰富景点</h3>
            <p>收录全国100+热门景点，涵盖自然风光、历史文化、主题乐园等</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔍</div>
            <h3>智能搜索</h3>
            <p>支持多条件筛选，快速找到心仪景点，让旅行规划更轻松</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">📸</div>
            <h3>图片展示</h3>
            <p>高清图片展示，身临其境的体验，提前感受景点美景</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>价格透明</h3>
            <p>实时票价信息，合理规划行程预算，旅行更省心</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 热门推荐 -->
    <section class="hot-spots">
      <div class="container">
        <h2 class="section-title">🔥 热门推荐</h2>
        <div class="spots-grid">
          <div class="spot-card" v-for="spot in hotSpots" :key="spot.id">
            <div class="spot-img">
              <img :src="spot.cover_image || 'https://via.placeholder.com/400x250?text=' + spot.name" @error="imgError" />
            </div>
            <div class="spot-info">
              <h4>{{ spot.name }}</h4>
              <p>{{ spot.city }} · {{ spot.category }}</p>
              <div class="spot-price">¥{{ spot.price }}起</div>
              <div class="spot-rating">⭐ {{ spot.rating }}</div>
            </div>
          </div>
        </div>
        <div class="view-more">
          <button class="view-more-btn" @click="goToAttractions">查看全部景点 →</button>
        </div>
      </div>
    </section>

    <!-- 页脚 -->
    <footer class="footer">
      <div class="container">
        <p>&copy; 2024 旅游景点管理系统 | 探索中国之美</p>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      hotSpots: []
    };
  },
  mounted() {
    this.loadHotSpots();
  },
  methods: {
    async loadHotSpots() {
      try {
        const res = await axios.get('/api/attractions', { params: { page: 1, pageSize: 6 } });
        if (res.data.success) {
          this.hotSpots = res.data.list;
        }
      } catch (err) {
        console.error('加载热门景点失败:', err);
      }
    },
    goToAttractions() {
      this.$router.push('/attractions');
    },
    imgError(e) {
      e.target.src = 'https://via.placeholder.com/400x250?text=图片加载中';
    }
  }
};
</script>

<style scoped>
.home {
  min-height: 100vh;
}

/* 导航栏 */
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  color: white;
  cursor: pointer;
}

.logo span:first-child {
  font-size: 28px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.3s;
}

.nav-links a:hover,
.nav-links a.active {
  background: rgba(255,255,255,0.2);
}

/* 英雄区域 */
.hero {
  height: 85vh;
  background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
}

.hero-content {
  position: relative;
  text-align: center;
  color: white;
  padding: 20px;
  animation: fadeInUp 0.8s ease;
}

.hero-title {
  font-size: 52px;
  margin-bottom: 20px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
}

.hero-subtitle {
  font-size: 20px;
  margin-bottom: 40px;
  opacity: 0.95;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 60px;
  margin-bottom: 40px;
}

.stat-item {
  text-align: center;
}

.stat-number {
  font-size: 36px;
  font-weight: bold;
}

.stat-label {
  font-size: 14px;
  opacity: 0.8;
}

.explore-btn {
  padding: 14px 40px;
  font-size: 18px;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  font-weight: bold;
}

.explore-btn:hover {
  transform: scale(1.05);
  background: #e64a19;
  box-shadow: 0 5px 20px rgba(255,87,34,0.4);
}

/* 特色功能 */
.features {
  padding: 80px 20px;
  background: #f8f9fa;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
}

.section-title {
  text-align: center;
  font-size: 36px;
  color: #333;
  margin-bottom: 50px;
  position: relative;
}

.section-title::after {
  content: '';
  display: block;
  width: 60px;
  height: 4px;
  background: linear-gradient(135deg, #667eea, #764ba2);
  margin: 15px auto 0;
  border-radius: 2px;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
}

.feature-card {
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.1);
}

.feature-icon {
  font-size: 48px;
  margin-bottom: 20px;
}

.feature-card h3 {
  font-size: 22px;
  margin-bottom: 15px;
  color: #333;
}

.feature-card p {
  color: #666;
  line-height: 1.6;
}

/* 热门推荐 */
.hot-spots {
  padding: 80px 20px;
  background: white;
}

.spots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.spot-card {
  background: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0,0,0,0.08);
  transition: all 0.3s;
  cursor: pointer;
}

.spot-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.15);
}

.spot-img {
  height: 220px;
  overflow: hidden;
}

.spot-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.spot-card:hover .spot-img img {
  transform: scale(1.05);
}

.spot-info {
  padding: 16px;
}

.spot-info h4 {
  font-size: 18px;
  margin-bottom: 6px;
  color: #333;
}

.spot-info p {
  color: #666;
  font-size: 13px;
  margin-bottom: 10px;
}

.spot-price {
  font-size: 18px;
  font-weight: bold;
  color: #ff5722;
  margin-bottom: 5px;
}

.spot-rating {
  color: #ffc107;
  font-size: 13px;
}

.view-more {
  text-align: center;
}

.view-more-btn {
  padding: 12px 32px;
  background: transparent;
  border: 2px solid #667eea;
  color: #667eea;
  border-radius: 50px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.view-more-btn:hover {
  background: #667eea;
  color: white;
}

/* 页脚 */
.footer {
  background: #1a1a2e;
  color: #888;
  text-align: center;
  padding: 30px;
  margin-top: 40px;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 32px;
  }
  .hero-subtitle {
    font-size: 16px;
  }
  .hero-stats {
    gap: 30px;
  }
  .stat-number {
    font-size: 24px;
  }
  .section-title {
    font-size: 28px;
  }
  .nav-links {
    gap: 10px;
  }
}
</style>