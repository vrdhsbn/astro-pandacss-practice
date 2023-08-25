import { defineConfig } from 'astro/config'
import pandacss from '@pandacss/astro'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  server: {
    open: true,
  },
  integrations: [react(), pandacss()],
})
