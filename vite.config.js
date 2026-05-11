import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
VitePWA({ // 
      registerType: 'autoUpdate',
  devOptions: {
        enabled: true // <-- Tambahkan baris ini agar jalan di localhost
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'Sijaga Pro',
        short_name: 'Sijaga',
        description: 'Aplikasi Sijaga',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'SIJAGAPRO192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'SIJAGAPRO512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
