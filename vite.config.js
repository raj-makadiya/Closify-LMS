import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy for freecodecamp.org images
      '/freecodecamp': {
        target: 'https://www.freecodecamp.org',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/freecodecamp/, ''),
        secure: false,
      },
      // Proxy for logrocket.com images
      '/logrocket': {
        target: 'https://blog.logrocket.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/logrocket/, ''),
        secure: false,
      },
      // Proxy for builtin.com images
      '/builtin': {
        target: 'https://builtin.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/builtin/, ''),
        secure: false,
      },
      // Proxy for medium.com images
      '/medium': {
        target: 'https://miro.medium.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/medium/, ''),
        secure: false,
      },
      // Proxy for webfx.com images
      '/webfx': {
        target: 'https://www.webfx.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/webfx/, ''),
        secure: false,
      },
      // Proxy for muycomputer.com images
      '/muycomputer': {
        target: 'https://www.muycomputer.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/muycomputer/, ''),
        secure: false,
      },
      // Proxy for securityintelligence.com images
      '/securityintelligence': {
        target: 'https://securityintelligence.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/securityintelligence/, ''),
        secure: false,
      },
      // Proxy for businessnewsdaily.com images
      '/businessnewsdaily': {
        target: 'https://www.businessnewsdaily.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/businessnewsdaily/, ''),
        secure: false,
      },
      // Proxy for fixthephoto.com images
      '/fixthephoto': {
        target: 'https://fixthephoto.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/fixthephoto/, ''),
        secure: false,
      },
    },
  },
})
