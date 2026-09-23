import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages base URL: https://nidal-cmp.github.io/Shiba-x-Adheeb/
export default defineConfig({
  plugins: [react()],
  base: '/Shiba-x-Adheeb/',
})

