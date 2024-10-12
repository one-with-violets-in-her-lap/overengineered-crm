import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        federation({
            name: 'ui-kit',
            filename: 'ui-kit.js',
            shared: ['react', 'react-dom'],
            exposes: {
                './Button': './src/components/Button.tsx',
                './typography/Heading': './src/components/typography/Heading.tsx'
            }
        }),
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
        },
    },
    build: {
        modulePreload: false,
        target: 'esnext',
        minify: false,
        cssCodeSplit: false,
    },
    server: {
        port: 5002,
        cors: {
            origin: '*',
            methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
            allowedHeaders: [
                'X-Requested-With',
                'content-type',
                'Authorization',
            ],
        },
    },
    preview: {
        port: 5002,
    },
})
