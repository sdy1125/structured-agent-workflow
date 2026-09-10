<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { formatPrice } from '../utils/formatPrice'

defineProps({ product: { type: Object, required: true } })

const fallbackImage = 'https://placehold.co/600x600/e2e8f0/475569?text=San+pham'
const cartStore = useCartStore()
const added = ref(false)

/** Replaces an unavailable product image without changing product data. */
function useFallbackImage(event) {
  event.target.onerror = null
  event.target.src = fallbackImage
}

function addToCart(product) {
  cartStore.addProduct(product)
  added.value = true
  window.setTimeout(() => { added.value = false }, 1200)
}
</script>

<template>
  <article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
    <img :src="product.imageUrl || fallbackImage" :alt="product.name" class="aspect-square w-full bg-slate-100 object-cover" @error="useFallbackImage" />
    <div class="p-4">
      <p class="truncate text-xs font-semibold uppercase tracking-wide text-indigo-600">{{ product.category }}</p>
      <h2 class="mt-2 min-h-12 text-base font-semibold leading-6 text-slate-900">{{ product.name }}</h2>
      <p class="mt-3 text-lg font-bold text-slate-900">{{ formatPrice(product.price) }}</p>
      <button type="button" class="mt-4 w-full rounded-lg bg-indigo-600 px-3 py-2 text-sm font-semibold text-white" @click="addToCart(product)">{{ added ? 'Đã thêm' : 'Thêm vào giỏ' }}</button>
    </div>
  </article>
</template>
