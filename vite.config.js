import react from '@vitejs/plugin-react';
import brotli from "rollup-plugin-brotli";
import gzipPlugin from 'rollup-plugin-gzip';
import { defineConfig } from 'vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import zlib from "zlib";

export default defineConfig({
    plugins: [
        react(),
        ViteMinifyPlugin({
            // Minify JavaScript and JSX files
            terserOptions: {
                compress: {
                    drop_console: true,
                    // other terser options...
                },
            },
            // Minify CSS files
            cssMinify: true,
            // Minify HTML files
            htmlMinify: {
                collapseWhitespace: true,
                removeComments: true,
                minifyCSS: true,
                minifyJS: true,
            },
        }),
        // Brotli plugin with some defaults.
        brotli({
            test: /\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp|gltf)$/, // file extensions to compress
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

    build: {
        emptyOutDir: true,
        manifestDir: true,
        sourcemap: true,
        rollupOptions: {
            output: {
                assetFileNames: (info) => {
                    if (info.name.match(/\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp|gltf)$/)) {
                        return `assets/${info.name}`;
                    }
                },
            },
        },
    },

    server: {
        port: 3000,
        envDir: './',
    },
});

