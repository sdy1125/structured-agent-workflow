/** Formats an integer VND amount consistently throughout the storefront. */
export function formatPrice(price) {
  return `${new Intl.NumberFormat('vi-VN').format(price)} đ`
}
