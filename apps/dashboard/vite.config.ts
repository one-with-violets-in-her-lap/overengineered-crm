import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'dashboard-host-app',
            remotes: {
                'clients-panel':
                    'http://localhost:5001/assets/clients-panel.js',
            },
            shared: ['react', 'react-dom'],
        }),
    ],
    server: {
        port: 5000,
    },
    preview: { port: 5000 },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
})
