import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Runtime-Archives/',
  build: {
    outDir: 'dist',
  },
  assetsInclude: ['**/*.md'],
})
