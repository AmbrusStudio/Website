import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetUno from '@unocss/preset-uno'
import transformerDirective from '@unocss/transformer-directives'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [
        presetUno(),
        presetWebFonts({
          provider: 'google',
          fonts: {
            sans: 'Montserrat',
            montserrat: {
              name: 'Montserrat',
              weights: [300, 400, 500, 600, 700, 800],
              italic: true
            },
            teko: { name: 'Teko', weights: [300, 400, 500, 600, 700] },
            'zen-kaku': { name: 'Zen Kaku Gothic New', weights: [300, 400, 500, 700] }
          }
        })
      ],
      transformers: [transformerDirective()]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  // base: './', // 设置打包路径
  // server: {
  //   host: '0.0.0.0',
  //   port: 82,
  //   open: true, // 设置服务启动时是否自动打开浏览器
  //   https: false,
  //   cors: true, // 允许跨域
  //   // 设置代理，根据项目实际情况配置
  //   proxy: {
  //     '/NFT-API/': {
  //       // target: 'http://api.ambrus.studio/api/v1/',
  //       target: 'http://api.nft.com/api/v1/',
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/NFT-API/, '')
  //     }
  //   }
  // },
  // productionSourceMap: false
})
