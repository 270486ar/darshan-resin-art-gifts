import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages deployment configuration
// IMPORTANT: Change '/darshan-resin-art-gifts/' to match your repository name.
// If deploying to a custom domain or user/org page (username.github.io), set base to '/'.
export default defineConfig({
  plugins: [react()],
  base: '/darshan-resin-art-gifts/',
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
          motion: ['framer-motion'],
          icons: ['react-icons', 'lucide-react'],
        },
      },
    },
  },
})
