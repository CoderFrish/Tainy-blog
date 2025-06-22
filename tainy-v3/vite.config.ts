import path from 'path'
import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [vuePlugin()],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        }
    }
})
