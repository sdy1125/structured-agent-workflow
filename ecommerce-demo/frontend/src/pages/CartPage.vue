<script setup>
import { ref } from 'vue'
import { useCartStore } from '../stores/cart'
import { formatPrice } from '../utils/formatPrice'

const cartStore = useCartStore()
const checkoutMessage = ref('')
const fallbackImage = 'https://placehold.co/160x160/e2e8f0/475569?text=San+pham'

function useFallbackImage(event) {
  event.target.onerror = null
  event.target.src = fallbackImage
}

function showCheckoutMessage() {
  checkoutMessage.value = 'Tính năng đang phát triển'
}
</script>

<template>
  <main class="min-h-[calc(100vh-65px)] bg-slate-50 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
    <section class="mx-auto max-w-5xl">
      <h1 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">Giỏ hàng</h1>
      <div v-if="!cartStore.items.length" class="mt-6 rounded-3xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm sm:px-10 sm:py-20">
        <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
          <svg class="h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 3h2l2.4 12.1a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 7H6" /><circle cx="10" cy="20" r="1" /><circle cx="18" cy="20" r="1" /></svg>
        </div>
        <h2 class="mt-6 text-xl font-bold text-slate-900">Giỏ hàng đang trống</h2>
        <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-600">Bạn chưa chọn sản phẩm nào. Hãy khám phá cửa hàng và tìm món đồ phù hợp nhé.</p>
        <RouterLink to="/" class="mt-6 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2">Tiếp tục mua sắm</RouterLink>
      </div>
      <div v-else class="mt-6 grid gap-6 lg:grid-cols-[1fr_20rem]">
        <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <article v-for="item in cartStore.items" :key="item.id" class="grid grid-cols-[4.5rem_1fr] gap-3 border-b border-slate-100 p-4 last:border-0 sm:grid-cols-[5rem_1fr_auto] sm:gap-4">
            <img :src="item.imageUrl || fallbackImage" :alt="item.name" class="h-[4.5rem] w-[4.5rem] rounded-xl bg-slate-100 object-cover sm:h-20 sm:w-20" @error="useFallbackImage" />
            <div class="min-w-0 flex-1"><h2 class="font-semibold text-slate-900">{{ item.name }}</h2><p class="mt-1 text-sm text-slate-600">{{ formatPrice(item.price) }}</p>
              <div class="mt-3 flex items-center gap-2"><button type="button" class="h-8 w-8 rounded border border-slate-300" @click="cartStore.updateQuantity(item.id, item.quantity - 1)">-</button><span class="w-6 text-center font-semibold">{{ item.quantity }}</span><button type="button" class="h-8 w-8 rounded border border-slate-300" @click="cartStore.updateQuantity(item.id, item.quantity + 1)">+</button></div>
            </div>
            <div class="col-start-2 flex items-center justify-between gap-3 sm:col-start-auto sm:flex-col sm:items-end"><p class="font-bold text-slate-900">{{ formatPrice(item.price * item.quantity) }}</p><button type="button" class="text-sm font-semibold text-red-700 hover:text-red-800" @click="cartStore.removeProduct(item.id)">Xóa</button></div>
          </article>
        </div>
        <aside class="h-fit rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24"><h2 class="text-lg font-bold">Tổng cộng</h2><div class="mt-4 flex justify-between text-sm"><span>Tổng số món</span><span>{{ cartStore.totalItems }}</span></div><div class="mt-3 flex justify-between border-t border-slate-200 pt-3 text-lg font-bold"><span>Thành tiền</span><span>{{ formatPrice(cartStore.totalPrice) }}</span></div><button type="button" class="mt-5 w-full rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700" @click="showCheckoutMessage">Thanh toán</button><p v-if="checkoutMessage" class="mt-3 text-center text-sm text-slate-600">{{ checkoutMessage }}</p><button type="button" class="mt-3 w-full rounded-lg py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50" @click="cartStore.clearCart">Xóa giỏ hàng</button></aside>
      </div>
    </section>
  </main>
</template>
