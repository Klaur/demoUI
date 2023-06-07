/** eslint-diabled **/
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  build: {
    rollupOptions: {
      input: {}
    }
  },
  define: { 'process.env': {} },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './examples'),
      '~': path.resolve(__dirname, './examples')
    }
  }
})
