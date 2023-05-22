import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ExampleMoveTech/', // Asegúrate de reemplazar 'ExampleMoveTech' con el nombre de tu repositorio
  plugins: [react()]
})


