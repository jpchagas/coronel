import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'coronel_logo.png'],
      manifest: {
        name: 'Coronel — Monitoramento de Saúde',
        short_name: 'Coronel',
        theme_color: '#1C1C1E',
        background_color: '#FFFFFF',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: 'coronel_logo_192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'coronel_logo_512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})
