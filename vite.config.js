import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react';
import eslint from "vite-plugin-eslint";
import { viteMockServe } from 'vite-plugin-mock';
import { resolve } from 'path'

const isDev = process.env.NODE_ENV === 'development';

export default defineConfig({
  base: '/echo-cloud-collection/',
  plugins: [
    React(),
    eslint(),
    viteMockServe({
      mockPath: 'src/mock',
      localEnabled: isDev,
      prodEnabled: !isDev,
      supportTs: false,
      watchFiles: true,
      injectCode: `
          import { setupProdMockServer } from './mockProdServer';
          setupProdMockServer();
        `,
      injectFile: resolve(process.cwd(), 'src/main.jsx')
    })
  ],
  resolve: {
    alias: {
      '~': resolve(__dirname, './'), // 根路径
      '@': resolve(__dirname, 'src') // src 路径
    }
  },
  server: {
    port: 8765,
    host: 'localhost',
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:8765/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }
    },
  },
  build: {
    outDir: './echo', // 指定输出路径,默认是dist
    assetsDir: '/static/', // 指定生成静态资源的存放路径，默认assets
    terserOptions: {
      compress: {
        keep_infinity: true,
        drop_console: true
      }
    },
    minify:'terser',
    // chunk 大小警告的限制
    chunkSizeWarningLimit: 5000,
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html')
      },
      output: {
        // 用于命名代码拆分时创建的共享块的输出命名
        chunkFileNames: 'static/js/[name]-[hash].js',
        // 用于从入口点创建的块的打包输出格式[name]表示文件名,[hash]表示该文件内容hash值
        entryFileNames: 'static/js/[name]-[hash].js',
        // 用于输出静态资源的命名，[ext]表示文件扩展名
        assetFileNames: 'static/[ext]/index-[hash].[ext]'
      },
      manualChunks(id) { //静态资源分拆打包
        if (id.includes('node_modules')) {
          return id.toString().split('node_modules/')[1].split('/')[0].toString();
        }
      }
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        additionalData: `@import "${resolve(__dirname, 'src/styles/variable.less')}";`,
        // 支持内联 JavaScript
        javascriptEnabled: true
      }
    }
  }
});
