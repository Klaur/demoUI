/** eslint-diabled **/
import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  root: './',
  proxy: {
    '/api': {
      target: 'http://localhost:3000',
      changeOrigin: true,
      rewrite: path => path.replace(/^\/api/, '')
    }
  },
  build: {
    outDir: path.join(__dirname, 'dist'),
    rollupOptions: {
      input: {
        index: './examples/main.js'
      }
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
