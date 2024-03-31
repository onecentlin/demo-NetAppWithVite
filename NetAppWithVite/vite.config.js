import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
    appType: 'custom',
    root: 'Assets',
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            clientPort: 5173
        }
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
            '~': path.resolve(__dirname, './Assets/js'),
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
    build: {
        manifest: true,
        emptyOutDir: true,
        outDir: path.resolve(__dirname, './wwwroot/build'),
        rollupOptions: {
            input: {
                main: 'Assets/js/main.js',
            },
            output: {
                assetFileNames: (assetInfo) => {
                    let extType = assetInfo.name.split('.').at(1)
                    if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                        extType = 'img'
                    }
                    return `${extType}/[name][extname]`
                },
                chunkFileNames: 'js/[name].js',
                entryFileNames: 'js/[name].js'
            }
        }
    },
    plugins: [vue()],
})