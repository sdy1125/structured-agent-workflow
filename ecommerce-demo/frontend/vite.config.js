import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// The development proxy keeps the browser request same-origin while the API runs on port 8080.
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 5173,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
})
