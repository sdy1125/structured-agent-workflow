const apiUrl = import.meta.env.VITE_API_URL

/** Fetches one server-side page of products from the configured Vite API base URL. */
export async function fetchProducts(page, size) {
  const response = await fetch(`${apiUrl}/products?page=${page}&size=${size}`)
  if (!response.ok) throw new Error('Could not load products')
  return response.json()
}
