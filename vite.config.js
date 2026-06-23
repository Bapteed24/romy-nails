import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: 'index.html',
        prestations: 'prestations.html',
        realisations: 'realisations.html',
        apropos: 'apropos.html',
        contact: 'contact.html'
      }
    }
  }
})