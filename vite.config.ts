import { defineConfig } from 'vite'
import contentCollections from '@content-collections/vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contentCollections()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
