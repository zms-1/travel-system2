<template>
  <div class="page">
    <nav class="nav">
      <div class="nav-brand" @click="$router.push('/home')">🏞️ 旅游景点管理系统</div>
      <div class="nav-links">
        <router-link to="/home">首页</router-link>
        <router-link to="/attractions" class="active">景点管理</router-link>
      </div>
    </nav>

    <div class="container">
      <div class="header">
        <h1>🏞️ 景点管理</h1>
        <button class="btn-add" @click="openAdd">+ 新增景点</button>
      </div>

      <div class="search-bar">
        <input type="text" v-model="search.keyword" placeholder="景点名称" @keyup.enter="loadData"/>
        <select v-model="search.category" @change="loadData">
          <option value="">全部分类</option>
          <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
        </select>
        <button class="btn-search" @click="loadData">🔍 搜索</button>
        <button class="btn-reset" @click="resetSearch">重置</button>
      </div>

      <div class="stats" v-if="total > 0">共找到 <strong>{{ total }}</strong> 个景点</div>

      <div v-if="loading" class="loading">⏳ 加载中...</div>
      <div v-if="error" class="error">{{ error }}</div>

      <div class="grid" v-else-if="list.length > 0">
        <div class="card" v-for="item in list" :key="item.id">
          <div class="card-img">
            <img :src="item.cover_image || 'https://via.placeholder.com/300x200?text=暂无图片'" @error="imgError" />
          </div>
          <div class="card-body">
            <h3>{{ item.name }}</h3>
            <div class="tags">
              <span class="tag">{{ item.category }}</span>
              <span class="city">{{ item.city }}</span>
            </div>
            <div class="price">¥{{ item.price }}</div>
            <div class="rating">⭐ {{ item.rating }} / 5.0</div>
            <div class="actions">
              <button class="detail" @click="viewDetail(item.id)">详情</button>
              <button class="edit" @click="openEdit(item)">编辑</button>
              <button class="delete" @click="deleteItem(item.id)">删除</button>
            </div>
          </div>
        </div>
      </div>

      <div v-else class="empty">暂无数据，点击"新增景点"添加</div>

      <div class="pagination" v-if="total > pageSize">
        <button @click="prevPage" :disabled="page <= 1">上一页</button>
        <span>{{ page }} / {{ totalPages }}</span>
        <button @click="nextPage" :disabled="page >= totalPages">下一页</button>
        <select v-model="pageSize" @change="changePageSize">
          <option :value="12">12条/页</option>
          <option :value="24">24条/页</option>
          <option :value="48">48条/页</option>
        </select>
      </div>
    </div>

    <!-- 新增/编辑弹窗 -->
    <div class="modal" v-if="dialogVisible" @click.self="dialogVisible = false">
      <div class="modal-content">
        <div class="modal-header">
          <h2>{{ isEdit ? '编辑景点' : '新增景点' }}</h2>
          <button class="close" @click="dialogVisible = false">&times;</button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>景点名称 <span class="required">*</span></label>
            <input v-model="form.name" placeholder="请输入景点名称" />
          </div>
          <div class="form-group">
            <label>分类 <span class="required">*</span></label>
            <select v-model="form.category">
              <option value="">请选择分类</option>
              <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>所在城市 <span class="required">*</span></label>
            <input v-model="form.city" placeholder="请输入所在城市" />
          </div>
          <div class="form-row">
            <div class="form-group half">
              <label>门票价格</label>
              <input type="number" v-model="form.price" placeholder="0" />
            </div>
            <div class="form-group half">
              <label>评分</label>
              <input type="number" step="0.1" v-model="form.rating" placeholder="0-5" />
            </div>
          </div>
          <div class="form-group">
            <label>景点描述</label>
            <textarea v-model="form.description" rows="3" placeholder="请输入景点描述"></textarea>
          </div>
          <div class="form-group">
            <label>封面图片</label>
            <input type="file" ref="fileInput" @change="handleFileUpload" accept="image/jpeg,image/jpg,image/png" />
            <div v-if="form.cover_image" class="preview">
              <img :src="form.cover_image" />
              <button class="remove-img" @click="form.cover_image = null">✕</button>
            </div>
            <div v-if="uploading" class="uploading">上传中...</div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="dialogVisible = false">取消</button>
          <button class="submit" @click="submitForm" :disabled="submitting">{{ submitting ? '保存中...' : '保存' }}</button>
        </div>
      </div>
    </div>

    <!-- 详情弹窗 -->
    <div class="modal" v-if="detailVisible" @click.self="detailVisible = false">
      <div class="modal-content" style="max-width: 500px">
        <div class="modal-header">
          <h2>{{ detail?.name }}</h2>
          <button class="close" @click="detailVisible = false">&times;</button>
        </div>
        <div class="modal-body">
          <div class="detail-img" v-if="detail?.cover_image">
            <img :src="detail.cover_image" />
          </div>
          <p><strong>分类：</strong>{{ detail?.category }}</p>
          <p><strong>城市：</strong>{{ detail?.city }}</p>
          <p><strong>价格：</strong>¥{{ detail?.price }}</p>
          <p><strong>评分：</strong>⭐ {{ detail?.rating }}</p>
          <p><strong>描述：</strong>{{ detail?.description || '暂无描述' }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Attractions',
  data() {
    return {
      list: [], total: 0, page: 1, pageSize: 12, loading: false, error: '',
      search: { keyword: '', category: '' },
      dialogVisible: false, detailVisible: false, isEdit: false, submitting: false, uploading: false,
      form: { id: null, name: '', category: '', city: '', price: 0, rating: 0, description: '', cover_image: '' },
      detail: null
    };
  },
  computed: { totalPages() { return Math.ceil(this.total / this.pageSize); } },
  mounted() { this.loadCategories(); this.loadData(); },
  methods: {
    async loadData() {
      this.loading = true;
      try {
        const res = await axios.get('/api/attractions', { params: { page: this.page, pageSize: this.pageSize, ...this.search } });
        if (res.data.success) { this.list = res.data.list; this.total = res.data.total; }
      } catch (err) { this.error = '加载失败'; }
      finally { this.loading = false; }
    },
    async loadCategories() {
      try { const res = await axios.get('/api/categories'); if (res.data.success) this.categories = res.data.data; } 
      catch (err) { console.error(err); }
    },
    resetSearch() { this.search = { keyword: '', category: '' }; this.page = 1; this.loadData(); },
    prevPage() { if (this.page > 1) { this.page--; this.loadData(); } },
    nextPage() { if (this.page < this.totalPages) { this.page++; this.loadData(); } },
    changePageSize() { this.page = 1; this.loadData(); },
    openAdd() { this.isEdit = false; this.form = { id: null, name: '', category: '', city: '', price: 0, rating: 0, description: '', cover_image: '' }; this.dialogVisible = true; },
    openEdit(item) { this.isEdit = true; this.form = { ...item }; this.dialogVisible = true; },
    async viewDetail(id) { try { const res = await axios.get(`/api/attractions/${id}`); if (res.data.success) { this.detail = res.data.data; this.detailVisible = true; } } catch (err) { alert('获取详情失败'); } },
    async handleFileUpload(e) {
      const file = e.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) return alert('请选择图片');
      if (file.size > 5 * 1024 * 1024) return alert('图片不能超过5MB');
      this.uploading = true;
      const fd = new FormData(); fd.append('image', file);
      try { const res = await axios.post('/api/upload', fd); if (res.data.success) this.form.cover_image = res.data.imageUrl; } 
      catch (err) { alert('上传失败'); } finally { this.uploading = false; }
    },
    async submitForm() {
      if (!this.form.name || !this.form.category || !this.form.city) return alert('请填写必填项');
      this.submitting = true;
      try {
        const fd = new FormData();
        Object.keys(this.form).forEach(k => { if (this.form[k] !== null) fd.append(k, this.form[k]); });
        if (this.isEdit) await axios.put(`/api/attractions/${this.form.id}`, fd);
        else await axios.post('/api/attractions', fd);
        alert(this.isEdit ? '修改成功' : '添加成功');
        this.dialogVisible = false; this.loadData();
      } catch (err) { alert('操作失败'); } finally { this.submitting = false; }
    },
    async deleteItem(id) { if (confirm('确定删除？')) { try { await axios.delete(`/api/attractions/${id}`); alert('删除成功'); this.loadData(); } catch (err) { alert('删除失败'); } } },
    imgError(e) { e.target.src = 'https://via.placeholder.com/300x200?text=图片加载失败'; }
  }
};
</script>

<style scoped>
* { margin: 0; padding: 0; box-sizing: border-box; }
.page { min-height: 100vh; background: #f0f2f5; }
.nav { background: linear-gradient(135deg, #667eea, #764ba2); color: white; padding: 0 20px; display: flex; justify-content: space-between; align-items: center; height: 60px; }
.nav-brand { font-size: 20px; font-weight: bold; cursor: pointer; }
.nav-links { display: flex; gap: 20px; }
.nav-links a { color: white; text-decoration: none; padding: 8px 16px; border-radius: 8px; }
.nav-links a.active { background: rgba(255,255,255,0.2); }
.container { max-width: 1400px; margin: 0 auto; padding: 20px; }
.header { display: flex; justify-content: space-between; margin-bottom: 20px; }
.btn-add { background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
.search-bar { background: white; padding: 20px; border-radius: 12px; display: flex; gap: 12px; margin-bottom: 20px; flex-wrap: wrap; }
.search-bar input, .search-bar select { padding: 10px; border: 1px solid #ddd; border-radius: 6px; }
.btn-search { background: #667eea; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
.btn-reset { background: #6c757d; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
.stats { background: #e3f2fd; padding: 10px 16px; border-radius: 8px; margin-bottom: 20px; }
.loading, .error, .empty { text-align: center; padding: 60px; font-size: 18px; }
.error { color: #dc3545; }
.grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; }
.card { background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1); transition: transform 0.3s; }
.card:hover { transform: translateY(-5px); }
.card-img { height: 200px; overflow: hidden; background: #f0f0f0; }
.card-img img { width: 100%; height: 100%; object-fit: cover; }
.card-body { padding: 16px; }
.card-body h3 { margin-bottom: 10px; }
.tags { display: flex; gap: 8px; margin-bottom: 10px; }
.tag { background: #e9ecef; padding: 4px 8px; border-radius: 4px; font-size: 12px; }
.city { color: #6c757d; font-size: 13px; }
.price { font-size: 20px; font-weight: bold; color: #ff5722; margin: 8px 0; }
.rating { color: #ffc107; margin: 8px 0; }
.actions { display: flex; gap: 10px; margin-top: 12px; padding-top: 12px; border-top: 1px solid #eee; }
.actions button { flex: 1; padding: 8px; border: none; border-radius: 6px; cursor: pointer; }
.detail { background: #17a2b8; color: white; }
.edit { background: #ffc107; color: #333; }
.delete { background: #dc3545; color: white; }
.pagination { margin-top: 30px; display: flex; justify-content: center; gap: 16px; align-items: center; }
.pagination button { padding: 8px 16px; border: 1px solid #ddd; background: white; border-radius: 6px; cursor: pointer; }
.modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000; }
.modal-content { background: white; border-radius: 12px; width: 90%; max-width: 550px; max-height: 90vh; overflow-y: auto; }
.modal-header { display: flex; justify-content: space-between; padding: 16px 20px; border-bottom: 1px solid #eee; }
.close { font-size: 28px; cursor: pointer; background: none; border: none; }
.modal-body { padding: 20px; }
.form-group { margin-bottom: 16px; }
.form-group label { display: block; margin-bottom: 6px; font-weight: 500; }
.required { color: #dc3545; }
.form-group input, .form-group select, .form-group textarea { width: 100%; padding: 10px; border: 1px solid #ddd; border-radius: 6px; }
.form-row { display: flex; gap: 16px; }
.half { flex: 1; }
.preview { margin-top: 12px; position: relative; display: inline-block; }
.preview img { max-width: 150px; border-radius: 8px; }
.remove-img { position: absolute; top: -8px; right: -8px; width: 24px; height: 24px; border-radius: 50%; background: #dc3545; color: white; border: none; cursor: pointer; }
.modal-footer { padding: 16px 20px; border-top: 1px solid #eee; display: flex; justify-content: flex-end; gap: 12px; }
.submit { background: #28a745; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; }
.detail-img { text-align: center; margin-bottom: 16px; }
.detail-img img { max-width: 100%; border-radius: 8px; }
</style>