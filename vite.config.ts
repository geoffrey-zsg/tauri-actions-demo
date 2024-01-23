import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    // Tauri期望静态资源相对于`index.html`的位置进行引用。
    // 因此你需要确保Vite构建结果是相对路径。
    assetsDir: "./", // 静态资源目录设置为相对路径
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: [],
      output: {
        // 如果你有任何资产或类似的东西是根据路径动态加载的，禁止Vite改变代码路径。
        manualChunks: undefined,
      },
    },
  },
  // 设置开发服务器，允许Tauri的后台服务进行访问。
  server: {
    cors: true,              // 如果API请求受到CORS限制，则设置为true
    strictPort: true,        // 确保开发服务器始终使用相同的端口
  }
})

