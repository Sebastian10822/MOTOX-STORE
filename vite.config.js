import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Configuración para GitHub Pages
export default defineConfig({
  base: '/MOTOX-STORE/', // Muy importante para que los assets se carguen correctamente
  plugins: [react()],
})
