import { createRouter, createWebHistory } from 'vue-router'
import ProductListPage from '../pages/ProductListPage.vue'
import CartPage from '../pages/CartPage.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'products', component: ProductListPage },
    { path: '/cart', name: 'cart', component: CartPage },
  ],
})
