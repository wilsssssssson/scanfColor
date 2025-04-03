import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'

// Generate self-signed certificate if not exists
const certPath = path.resolve(__dirname, 'localhost.pem')
const keyPath = path.resolve(__dirname, 'localhost-key.pem')

let httpsConfig = undefined
try {
  httpsConfig = {
    key: fs.readFileSync(keyPath),
    cert: fs.readFileSync(certPath)
  }
} catch {
  console.warn('SSL certificates not found, falling back to HTTP')
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    https: httpsConfig,
    host: true,  // Listen on all network interfaces
    allowedHosts: [
      'frp-oil.com',  // Add your custom host
      'localhost'     // Keep localhost allowed
    ]
  }
})