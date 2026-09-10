<script setup>
import { onMounted, ref } from 'vue'
import { fetchProducts } from '../api/products'
import ProductCard from './ProductCard.vue'

const products = ref([])
const currentPage = ref(0)
const totalPages = ref(0)
const isLoading = ref(true)
const errorMessage = ref('')
const pageSize = 8

/** Loads a server page and exposes a retry state if the API is unavailable. */
async function loadProducts(page = currentPage.value) {
  isLoading.value = true
  errorMessage.value = ''
  try {
    const result = await fetchProducts(page, pageSize)
    products.value = result.content
    currentPage.value = result.page
    totalPages.value = result.totalPages
  } catch {
    errorMessage.value = 'Khong the tai san pham. Hay kiem tra backend va thu lai.'
  } finally {
    isLoading.value = false
  }
}

function previousPage() { if (currentPage.value > 0) loadProducts(currentPage.value - 1) }
function nextPage() { if (currentPage.value < totalPages.value - 1) loadProducts(currentPage.value + 1) }

onMounted(() => loadProducts())
</script>

<template>
  <section>
    <div v-if="isLoading" class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4" aria-label="Dang tai san pham">
      <div v-for="item in pageSize" :key="item" class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
        <div class="aspect-square animate-pulse bg-slate-200"></div>
        <div class="space-y-3 p-4"><div class="h-3 w-1/3 animate-pulse rounded bg-slate-200"></div><div class="h-5 animate-pulse rounded bg-slate-200"></div><div class="h-5 w-2/3 animate-pulse rounded bg-slate-200"></div></div>
      </div>
    </div>
    <div v-else-if="errorMessage" class="rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
      <p class="font-semibold text-red-800">{{ errorMessage }}</p>
      <button type="button" class="mt-4 rounded-lg bg-red-700 px-4 py-2 text-sm font-semibold text-white" @click="loadProducts()">Thu lai</button>
    </div>
    <template v-else>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"><ProductCard v-for="product in products" :key="product.id" :product="product" /></div>
      <nav v-if="totalPages > 0" class="mt-10 flex items-center justify-center gap-4" aria-label="Phan trang san pham">
        <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40" :disabled="currentPage === 0" @click="previousPage">Truoc</button>
        <span class="text-sm font-medium text-slate-600">Trang {{ currentPage + 1 }}/{{ totalPages }}</span>
        <button type="button" class="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-40" :disabled="currentPage >= totalPages - 1" @click="nextPage">Tiep</button>
      </nav>
    </template>
  </section>
</template>
