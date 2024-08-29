import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      includeAssets: ['assets/characters/*'],
      manifest: {
        name: 'Star Wars PWA',
        short_name: 'StarWars',
        description: 'Consumo SWAPI en mi proyecto de React',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'ico-mask.svg',
            sizes: '192x192',
            type: 'image/svg+xml',
          }
        ],
      },
    }),
  ],
})
