<template>
  <div class="login-container">
    <div class="background-overlay"></div>
    <div class="login-box">
      <div class="logo">
        <span class="logo-icon">🏞️</span>
        <h1>旅游景点管理系统</h1>
      </div>
      <p class="subtitle">登录您的账户，开始探索之旅</p>
      
      <form @submit.prevent="handleLogin">
        <div class="input-group">
          <span class="input-icon">👤</span>
          <input 
            type="text" 
            v-model="form.username" 
            placeholder="用户名"
            required
          />
        </div>
        
        <div class="input-group">
          <span class="input-icon">🔒</span>
          <input 
            type="password" 
            v-model="form.password" 
            placeholder="密码"
            required
          />
        </div>
        
        <button type="submit" class="login-btn">登 录</button>
        
        <div class="register-link">
          还没有账号？ <router-link to="/register">立即注册</router-link>
        </div>
      </form>
      
      <div class="demo-info">
        <p>演示账号：admin / 123456</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Login',
  data() {
    return {
      form: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    async handleLogin() {
      if (!this.form.username || !this.form.password) {
        alert('请输入用户名和密码');
        return;
      }
      
      try {
        const res = await axios.post('/api/login', this.form);
        if (res.data.success) {
          localStorage.setItem('token', res.data.token);
          localStorage.setItem('username', res.data.username);
          this.$router.push('/home');
        } else {
          alert(res.data.message || '登录失败');
        }
      } catch (err) {
        alert(err.response?.data?.message || '登录失败，请检查网络');
      }
    }
  }
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(0,0,0,0.6), rgba(0,0,0,0.4));
}

.login-box {
  position: relative;
  background: white;
  border-radius: 24px;
  padding: 40px;
  width: 90%;
  max-width: 420px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  animation: fadeInUp 0.6s ease;
}

.logo {
  text-align: center;
  margin-bottom: 20px;
}

.logo-icon {
  font-size: 48px;
  display: block;
}

.login-box h1 {
  font-size: 28px;
  color: #333;
  margin: 10px 0 0;
}

.subtitle {
  text-align: center;
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
}

.input-group {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 12px;
  margin-bottom: 16px;
  padding: 0 16px;
  transition: all 0.3s;
}

.input-group:focus-within {
  background: #fff;
  box-shadow: 0 0 0 2px rgba(102, 126, 234, 0.2);
}

.input-icon {
  font-size: 18px;
  color: #999;
}

.input-group input {
  flex: 1;
  padding: 14px 12px;
  border: none;
  background: transparent;
  font-size: 16px;
  outline: none;
}

.login-btn {
  width: 100%;
  padding: 14px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
  margin-top: 10px;
}

.login-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.register-link {
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.register-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.register-link a:hover {
  text-decoration: underline;
}

.demo-info {
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: center;
}

.demo-info p {
  color: #999;
  font-size: 12px;
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
</style>