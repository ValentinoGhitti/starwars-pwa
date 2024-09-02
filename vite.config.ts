import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['assets/characters/*', 'assets/img/*'],
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
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^.*\/assets\/characters\/.*\.jpg$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'character-images',
              expiration: {
                maxEntries: 88,
                maxAgeSeconds: 24 * 60 * 60,
              },
            },
          },
        ],
      },
      /*
      devOptions: {
        enabled: true,
        type: 'module',
      },
      */
    }),
  ],
})
