import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default ({ mode }) => {
  // const isDev = mode === 'development'
  return defineConfig({
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name) => `vant/es/${name}/style/index`,
          },
        ],
      }),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      Components({
        resolvers: [ElementPlusResolver({
          importStyle: 'sass',
        })],
      }),
    ],
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
            if (loaderContext.includes('modules/m')) {
              return `
                @import 'm/styles/variables.scss';
                @import 'styles/mixins.scss';
              ` + content
            }
            if (loaderContext.includes('modules/pc')) {
              return `
                @use "pc/styles/element.scss" as *;
                @use "pc/styles/variables.scss" as *;
                @use "styles/mixins.scss" as *;
              ` + content
            }
          },
        },
      },
    },
    server: {
      // proxy: {
      //   '/devApi': {
      //     target: 'http://localhost:7001',
      //     changeOrigin: true,
      //     rewrite: path => path.replace(/^\/devApi/, '/'),
      //   },
      // },
    },
  })
}
