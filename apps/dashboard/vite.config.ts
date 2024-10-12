import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '../../');

  return {
    plugins: [
      react(),
      federation({
        name: 'dashboard-host-app',
        remotes: {
          'clients-panel':
            env['VITE_CLIENTS_PANEL_PACKAGE_URL'] ||
            'http://localhost:5001/assets/clients-panel.js',
          'ui-kit':
            env['VITE_UI_KIT_PACKAGE_URL'] ||
            'http://localhost:5002/assets/ui-kit.js',
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
  }
})
