import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

const storageKey = 'cart'

function readCart() {
  try {
    const savedCart = JSON.parse(localStorage.getItem(storageKey) ?? '[]')
    if (!Array.isArray(savedCart)) return []
    return savedCart.filter((item) => (
      Number.isInteger(item?.id)
      && typeof item.name === 'string'
      && Number.isInteger(item.price)
      && typeof item.imageUrl === 'string'
      && Number.isInteger(item.quantity)
      && item.quantity >= 1
    ))
  } catch {
    return []
  }
}

/** Maintains cart state locally; it never sends cart data to the backend. */
export const useCartStore = defineStore('cart', () => {
  const items = ref(readCart())

  const totalItems = computed(() => items.value.reduce((total, item) => total + item.quantity, 0))
  const totalPrice = computed(() => items.value.reduce((total, item) => total + item.price * item.quantity, 0))

  function addProduct(product) {
    const existingItem = items.value.find((item) => item.id === product.id)
    if (existingItem) {
      existingItem.quantity += 1
      return
    }

    items.value.push({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl ?? '',
      quantity: 1,
    })
  }

  function updateQuantity(productId, quantity) {
    const item = items.value.find((cartItem) => cartItem.id === productId)
    if (!item) return
    if (quantity < 1) {
      removeProduct(productId)
      return
    }
    item.quantity = quantity
  }

  function removeProduct(productId) {
    items.value = items.value.filter((item) => item.id !== productId)
  }

  function clearCart() {
    items.value = []
  }

  watch(items, (cartItems) => {
    localStorage.setItem(storageKey, JSON.stringify(cartItems))
  }, { deep: true })

  return { items, totalItems, totalPrice, addProduct, updateQuantity, removeProduct, clearCart }
})
