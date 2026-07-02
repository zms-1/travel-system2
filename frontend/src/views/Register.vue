<template>
  <div class="register-container">
    <div class="background-overlay"></div>
    <div class="register-box">
      <div class="logo">
        <span class="logo-icon">🏞️</span>
        <h1>创建新账号</h1>
      </div>
      <p class="subtitle">加入我们，开启您的旅行之旅</p>
      
      <form @submit.prevent="handleRegister">
        <div class="input-group">
          <span class="input-icon">👤</span>
          <input 
            type="text" 
            v-model="form.username" 
            placeholder="用户名（至少3个字符）"
            required
          />
        </div>
        
        <div class="input-group">
          <span class="input-icon">📧</span>
          <input 
            type="email" 
            v-model="form.email" 
            placeholder="邮箱（选填）"
          />
        </div>
        
        <div class="input-group">
          <span class="input-icon">🔒</span>
          <input 
            type="password" 
            v-model="form.password" 
            placeholder="密码（至少6位）"
            required
          />
        </div>
        
        <div class="input-group">
          <span class="input-icon">🔒</span>
          <input 
            type="password" 
            v-model="form.confirmPassword" 
            placeholder="确认密码"
            required
          />
        </div>
        
        <button type="submit" class="register-btn" :disabled="loading">
          {{ loading ? '注册中...' : '注 册' }}
        </button>
        
        <div class="login-link">
          已有账号？ <router-link to="/login">立即登录</router-link>
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
  name: 'Register',
  data() {
    return {
      form: {
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      },
      loading: false
    };
  },
  methods: {
    async handleRegister() {
      // 验证用户名
      if (!this.form.username) {
        alert('请输入用户名');
        return;
      }
      if (this.form.username.length < 3) {
        alert('用户名至少3个字符');
        return;
      }
      
      // 验证密码
      if (!this.form.password) {
        alert('请输入密码');
        return;
      }
      if (this.form.password.length < 6) {
        alert('密码长度至少6位');
        return;
      }
      
      // 验证确认密码
      if (this.form.password !== this.form.confirmPassword) {
        alert('两次输入的密码不一致');
        return;
      }
      
      this.loading = true;
      
      try {
        const res = await axios.post('/api/register', {
          username: this.form.username,
          email: this.form.email,
          password: this.form.password
        });
        
        console.log('注册响应:', res.data);
        
        if (res.data.success) {
          alert('注册成功！请登录');
          this.$router.push('/login');
        } else {
          alert(res.data.message || '注册失败');
        }
      } catch (err) {
        console.error('注册错误:', err);
        const message = err.response?.data?.message || '注册失败，请稍后重试';
        alert(message);
      } finally {
        this.loading = false;
      }
    }
  }
};
</script>

<style scoped>
.register-container {
  min-height: 100vh;
  background-image: url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920');
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

.register-box {
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

.register-box h1 {
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

.register-btn {
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

.register-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
}

.register-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.login-link {
  text-align: center;
  margin-top: 20px;
  color: #666;
}

.login-link a {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.login-link a:hover {
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