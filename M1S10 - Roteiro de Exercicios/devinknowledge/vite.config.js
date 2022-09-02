import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@pages': path.resolve(__dirname, './src/pages/index.js'),
      '@context': path.resolve(__dirname, './src/context/index.js')
    }
  },
  plugins: [react(), eslint()]
})
