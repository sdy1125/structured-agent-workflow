<script setup>
import { useCartStore } from '../stores/cart'

const cartStore = useCartStore()
</script>

<template>
  <header class="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
    <div class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <RouterLink to="/" class="rounded-lg text-lg font-bold tracking-tight text-slate-900 transition hover:text-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" exact-active-class="text-indigo-700">E-commerce</RouterLink>
      <RouterLink to="/cart" class="relative rounded-lg p-2 text-slate-700 transition hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500" active-class="bg-indigo-50 text-indigo-700" aria-label="Giỏ hàng">
        <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M3 3h2l2.4 12.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
        <span v-if="cartStore.totalItems" class="absolute -right-1 -top-1 min-w-5 rounded-full bg-indigo-600 px-1 text-center text-xs font-bold leading-5 text-white">{{ cartStore.totalItems }}</span>
      </RouterLink>
    </div>
  </header>
</template>
