import path from 'path'
import vuePlugin from '@vitejs/plugin-vue'
import { defineConfig, loadEnv } from 'vite'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())

    return {
        plugins: [vuePlugin(), createHtmlPlugin({
            minify: true,
            inject: {
                data: {
                    title: env.VITE_APP_TITLE
                }
            }
        })],
        resolve: {
            alias: {
                "@": path.resolve(__dirname, 'src')
            }
        }
    }
})
