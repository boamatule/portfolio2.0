import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [react()],
    server: {
        port: 3000,
        envDir: './',
    },
    build: {
        sourcemap: true,
        rollupOptions: {
            input: {
                app: resolve(__dirname, 'index.html'),
            }
        }
    },

})

// import { image } from '@rollup/plugin-image';
// import react from '@vitejs/plugin-react';
// import autoprefixer from 'autoprefixer';
// import { resolve } from 'path';
// import imports from 'postcss-import';
// import { defineConfig } from 'vite';
// import glsl from 'vite-plugin-glsl';
// import gltf from 'vite-plugin-gltf';
// import svgPlugin from 'vite-plugin-svg';
// import postHtml from './plugin-post-html';

// export default defineConfig({
//     plugins: [
//         react(),
//         glsl(),
//         gltf(),
//         postHtml(),
//         svgPlugin(),
//         image()
//     ],

//     css: {
//         devSourcemap: true,
//         postcss: {
//             plugins: [
//                 imports(),
//                 autoprefixer()
//             ]
//         }
//     },

//     build: {
//         sourcemap: true,
//         rollupOptions: {
//             input: {
//                 app: resolve(__dirname, 'index.html'),
//                 404: resolve(__dirname, '404.html'),
//                 // assetsInclude: /\.(png|jpe?g|gif|svg|woff2?|ttf|eot)$/, // Include these file types
//                 // assetsExclude: /\.map$/, // Exclude files that match this pattern
//                  },
//         }
//     },

//     server: {
//         port: 3000,
//         envDir: './',
//     }
// });