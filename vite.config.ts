import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const proxy = {
  '/api-econverse': {
    target: 'https://app.econverse.com.br',
    changeOrigin: true,
    rewrite: (path: string) => path.replace(/^\/api-econverse/, ''),
  },
}

export default defineConfig({
  plugins: [react()],
  server: { proxy },
  preview: { proxy },
})