import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles/index.js'),
      '@components': path.resolve(__dirname, './src/components/index.js'),
      '@context': path.resolve(__dirname, './src/context/index.js'),
      '@layout': path.resolve(__dirname, './src/layout/index.js')
    }
  },
  plugins: [react(), eslint()]
})
