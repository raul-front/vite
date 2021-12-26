import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    // Components({
    //   resolvers: [ElementPlusResolver()],
    // }),
    Components({
      resolvers: [ElementPlusResolver({
        importStyle: 'sass',
      })],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      styles: resolve(__dirname, 'src/styles'),
      hooks: resolve(__dirname, 'src/hooks'),
      components: resolve(__dirname, 'src/components'),
      utils: resolve(__dirname, 'src/utils'),
      api: resolve(__dirname, 'src/api'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        javascriptEnabled: true,
        // additionalData: '@use "styles/element.scss" as *;',
        additionalData: (content, loaderContext) => {
          return '@use "styles/element.scss" as *; @use "styles/mixins.scss" as *; ' + content
        },
      },
    },
  },
  server: {
    proxy: {
      '/devApi': {
        target: 'http://localhost:7001',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/devApi/, '/'),
      },
    },
  },
})
