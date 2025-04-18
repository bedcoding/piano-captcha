import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vite 설정 정의 (데모 페이지 모드)
export default defineConfig({
  plugins: [react()],
  
  // GitHub Pages 배포를 위한 기본 경로 설정
  base: '/piano-captcha/',
  
  // 빌드 설정
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
}) 