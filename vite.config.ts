import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import { code, meta, link } from 'md-powerpack'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown()
    // Markdown({
    //   headEnabled: true,
    //   frontmatterDefaults: {
    //     requireAuth: false,
    //   },
    //   style: {
    //     baseStyle: 'github',
    //   },
    //   builders: [
    //     link(),
    //     code({
    //       theme: 'base',
    //     }),
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
