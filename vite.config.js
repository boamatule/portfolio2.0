import react from '@vitejs/plugin-react';
import brotli from "rollup-plugin-brotli";
import gzipPlugin from 'rollup-plugin-gzip';
import { defineConfig } from 'vite';
import zlib from "zlib";

export default defineConfig({
    plugins: [
        react(),
        // Brotli plugin with some defaults.
        brotli({
            test: /\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp)$/, // file extensions to compress
            options: {
                params: {
                    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_GENERIC,
                    [zlib.constants.BROTLI_PARAM_QUALITY]: 11, // Compression quality (adjust as needed)
                }
            },
            minSize: 1000, // Minimum file size for compression
        }),
        // Gzip plugin with some defaults.
        gzipPlugin({
            gzipOptions: {
                level: 9, // Gzip compression level
                minSize: 1000, // Minimum file size for compression
            }
        })
    ],
    server: {
        port: 3000,
        envDir: './',
    },

    build: {
        emptyOutDir: true,
        manifest: true,
        rollupOptions: {
            output: {
                assetFileNames: (info) => {
                    if (info.name.match(/\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp)$/)) {
                        return `dist/assets/${info.name}`;
                    }
                },
            },
        },
    },
});

