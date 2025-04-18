import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/piano-captcha/',
  build: {
    outDir: '../dist', // 상위 디렉토리의 dist에 빌드
    emptyOutDir: true
  }
}) 