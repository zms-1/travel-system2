<template>
  <div class="search-bar">
    <el-form :inline="true" :model="searchForm">
      <el-form-item label="景点名称">
        <el-input 
          v-model="searchForm.keyword" 
          placeholder="请输入景点名称"
          clearable
          @keyup.enter="doSearch"
        />
      </el-form-item>
      <el-form-item label="分类">
        <el-select v-model="searchForm.category" placeholder="全部" clearable>
          <el-option label="全部" value="" />
          <el-option v-for="cat in categories" :key="cat" :label="cat" :value="cat" />
        </el-select>
      </el-form-item>
      <el-form-item label="价格区间">
        <el-input-number v-model="searchForm.minPrice" :min="0" placeholder="最低价" />
        <span> - </span>
        <el-input-number v-model="searchForm.maxPrice" :min="0" placeholder="最高价" />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="doSearch">搜索</el-button>
        <el-button @click="doReset">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['search', 'reset']);

const searchForm = ref({
  keyword: '',
  category: '',
  minPrice: '',
  maxPrice: ''
});

const doSearch = () => {
  const params = {};
  if (searchForm.value.keyword) params.keyword = searchForm.value.keyword;
  if (searchForm.value.category) params.category = searchForm.value.category;
  if (searchForm.value.minPrice !== '') params.minPrice = searchForm.value.minPrice;
  if (searchForm.value.maxPrice !== '') params.maxPrice = searchForm.value.maxPrice;
  emit('search', params);
};

const doReset = () => {
  searchForm.value = { keyword: '', category: '', minPrice: '', maxPrice: '' };
  emit('reset');
};
</script>

<style scoped>
.search-bar {
  background: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
</style>