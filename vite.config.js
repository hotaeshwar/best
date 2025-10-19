import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/best/',  // ✅ Your repo name
  plugins: [tailwindcss(), react()],
  assetsInclude: ['**/*.mp4'],
  build: {
    outDir: 'dist',
    sourcemap: false,
    assetsInlineLimit: 0,
  },
})