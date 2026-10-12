import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api-econverse": {
        target: "https://app.econverse.com.br",
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api-econverse/, "");
        }
      }
    }
  }
})
