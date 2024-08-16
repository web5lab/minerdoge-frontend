import { defineConfig } from 'vite'
        import react from '@vitejs/plugin-react'
        
        // https://vitejs.dev/config/
        export default defineConfig({
          plugins: [react()],
          server: {
            port: 3000,
            host: '0.0.0.0', // Optional: to allow access from other devices on the network
          },
        })
        