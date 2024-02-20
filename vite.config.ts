import path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },

  plugins: [
    dts({
      insertTypesEntry: true,
    })
  ],
  
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: '@altlabs/sdk',
      fileName: (format) => `sdk.${format}.js`
    }
  }
})