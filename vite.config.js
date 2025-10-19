import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: './',  // ✅ CHANGED: from '/' to './'
  plugins: [tailwindcss(), react()],
  assetsInclude: ['**/*.mp4'],  // ✅ ADDED: for video files
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 0,  // ✅ ADDED: don't inline videos
  },
})