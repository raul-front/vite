import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    rollupOptions: {
      input: {
        pc: resolve(__dirname, 'index.html'),
        m: resolve(__dirname, 'm.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      styles: resolve(__dirname, 'src/styles'),
      hooks: resolve(__dirname, 'src/hooks'),
      components: resolve(__dirname, 'src/components'),
      utils: resolve(__dirname, 'src/utils'),
      api: resolve(__dirname, 'src/api'),
      pc: resolve(__dirname, 'src/modules/pc'),
      m: resolve(__dirname, 'src/modules/m'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        additionalData: (content, loaderContext) => {
          // return "@import 'styles/mixins.scss';" + content
          // 区分入口
          if (loaderContext.includes('modules/pc')) {
            return "@import 'styles/variables.scss'; @import 'pc/styles/variables.scss'; @import 'styles/mixins.scss';" + content
          }
          if (loaderContext.includes('modules/m')) {
            return "@import 'styles/variables.scss'; @import 'm/styles/variables.scss'; @import 'styles/mixins.scss';" + content
          }
          return "@import 'styles/variables.scss'; @import 'styles/mixins.scss';" + content
        },
      },
    },
  },
  server: {
    port: 3000,
    proxy: {
      '/devApi': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devApi/, '/'),
      },
    },
  },
})
