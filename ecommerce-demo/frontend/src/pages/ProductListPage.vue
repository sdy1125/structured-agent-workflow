<script setup>
import ProductList from '../components/ProductList.vue'
</script>

<template>
  <main class="min-h-[calc(100vh-65px)] bg-slate-50 px-4 py-8 text-slate-900 sm:px-6 sm:py-10 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <header class="mb-8"><p class="text-sm font-bold uppercase tracking-widest text-indigo-600">Bộ sưu tập</p><h1 class="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Sản phẩm nổi bật</h1><p class="mt-3 text-slate-600">Khám phá các sản phẩm được cập nhật từ cửa hàng.</p></header>
      <ProductList />
    </div>
  </main>
</template>
