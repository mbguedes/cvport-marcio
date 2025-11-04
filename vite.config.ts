import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // 1. Importe o 'path'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cvport-marcio/',
  plugins: [vue()],
  resolve: { // 2. Adicione esta seção 'resolve'
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})