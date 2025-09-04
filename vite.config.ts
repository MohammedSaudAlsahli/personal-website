import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    obfuscatorPlugin({
      global: true,
      rotateStringArray: true,
      stringArray: true,
      controlFlowFlattening: true,
      deadCodeInjection: true
    })],base:"/",
})
