import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import tailwindcss from 'tailwindcss'
import uniTailwind from '@uni-helper/vite-plugin-uni-tailwind'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(), uniTailwind()],
  css: {
    postcss: {
      plugins: [tailwindcss()]
    },
    preprocessorOptions: {
      scss: {
        silenceDeprecations: ['legacy-js-api']
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
})
