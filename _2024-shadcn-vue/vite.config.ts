import path from 'node:path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
  plugins: [
    vue(),
    // UnoCSS(),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: './src/auto-imports.d.ts',
    }),
  ],
  css: {
    postcss: {
      plugins: [
        tailwind(),
        autoprefixer(),
      ],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
