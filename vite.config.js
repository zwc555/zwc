import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages 子路径部署：https://zwc555.github.io/zwc/
  base: '/zwc/',
  server: {
    host: '127.0.0.1',
    port: 5173,
  },
})
