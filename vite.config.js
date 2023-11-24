import react from '@vitejs/plugin-react';
import brotli from 'rollup-plugin-brotli';
import gzipPlugin from 'rollup-plugin-gzip';
import { defineConfig } from 'vite';
import { analyzer } from "vite-bundle-analyzer";
import { ViteMinifyPlugin } from 'vite-plugin-minify';

import zlib from 'zlib';

export default defineConfig({
  plugins: [
    react(),
    analyzer(
      {
        openAnalyzer: false,
        analyzerMode: 'static',
        reportFilename: 'report.html',
      },
    ),
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
    brotli({
      test: /\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp)$/,
      options: {
        params: {
          [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_GENERIC,
          [zlib.constants.BROTLI_PARAM_QUALITY]: 11,
        },
      },
      minSize: 1000,
    }),
    gzipPlugin({
      gzipOptions: {
        level: 9,
        minSize: 1000,
      },
    }),
  ],
  build: {
    emptyOutDir: true,
    manifestDir: true,
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        sourcemap: true,
        assetFileNames: (info) => {
          if (info.name.match(/\.(js|jsx|css|html|txt|xml|json|svg|png|jpeg|webp)$/)) {
            return `assets/${info.name}`;
          }
        },
        manualChunks: {
          'vendor': ['react', 'react-dom', 'framer-motion', 'react-router', 'react-router-dom'],
          // 'index_chunk': ['dist/assets/index-9c2b9848.js'],
          // 'index_esm_chunk': ['dist/assets/index.esm-3554e272.js'],
        },
      },
    },
  },
  server: {
    port: 3000,
  },
});
