// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/estimatedDates.ts'),
      name: 'estimatedDates',
      // the proper extensions will be added
      fileName: 'estimatedDates'
    },
    rollupOptions: {

      output: {

      }
    }
  }
})