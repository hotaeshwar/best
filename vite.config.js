import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/',  // ✅ Deploy to root instead of /best/
  plugins: [tailwindcss(), react()],
  assetsInclude: ['**/*.mp4'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 0,
  },
})