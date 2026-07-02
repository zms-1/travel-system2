import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
    timeout: 10000
});

export const attractionApi = {
    // 获取列表
    getList(params) {
        return api.get('/attractions', { params });
    },
    // 获取详情
    getDetail(id) {
        return api.get(`/attractions/${id}`);
    },
    // 新增
    create(data) {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined && data[key] !== null) {
                formData.append(key, data[key]);
            }
        });
        return api.post('/attractions', formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    // 修改
    update(id, data) {
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            if (data[key] !== undefined && data[key] !== null) {
                formData.append(key, data[key]);
            }
        });
        return api.put(`/attractions/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        });
    },
    // 删除
    delete(id) {
        return api.delete(`/attractions/${id}`);
    },
    // 获取分类
    getCategories() {
        return api.get('/categories');
    }
};