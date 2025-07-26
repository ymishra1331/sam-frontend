import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    assetsInlineLimit: 4096, // Adjust this if you want to inline smaller images like WebP (in bytes)
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name].[hash][extname]', // Ensures correct output filenames
      },
    },
  },
})
