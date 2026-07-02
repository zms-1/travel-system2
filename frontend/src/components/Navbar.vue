<template>
  <nav class="navbar">
    <div class="nav-container">
      <div class="logo" @click="$router.push('/home')">
        <span>🏞️</span>
        <span>旅游管理系统</span>
      </div>
      
      <div class="nav-links">
        <router-link to="/home" class="nav-link">首页</router-link>
        <router-link to="/attractions" class="nav-link">景点管理</router-link>
      </div>
      
      <div class="user-info">
        <span class="username">👤 {{ username }}</span>
        <button class="logout-btn" @click="logout">退出登录</button>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      username: localStorage.getItem('username') || '用户'
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token')
      localStorage.removeItem('username')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  position: sticky;
  top: 0;
  z-index: 100;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.nav-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
}

.logo span:first-child {
  font-size: 28px;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-size: 16px;
  padding: 8px 16px;
  border-radius: 8px;
  transition: background 0.3s;
}

.nav-link:hover {
  background: rgba(255,255,255,0.2);
}

.nav-link.router-link-active {
  background: rgba(255,255,255,0.3);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
}

.username {
  font-size: 14px;
}

.logout-btn {
  background: rgba(255,255,255,0.2);
  border: none;
  color: white;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.3s;
}

.logout-btn:hover {
  background: rgba(255,255,255,0.3);
}
</style>