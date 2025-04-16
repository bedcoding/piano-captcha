// Vite 설정을 정의하기 위한 함수를 import
import { defineConfig } from 'vite'
// React 플러그인을 import (JSX 변환 등 React 관련 기능 지원)
import react from '@vitejs/plugin-react'
// Node.js의 path 모듈에서 resolve 함수를 import (파일 경로 처리용)
import { resolve } from 'path'

// Vite 설정 정의
export default defineConfig({
  // React 플러그인 활성화 (JSX 변환 등을 위해 필요)
  plugins: [react()],
  
  // GitHub Pages 배포를 위한 기본 경로 설정
  base: '/piano-captcha/',
  
  // 빌드 설정
  build: {
    // 라이브러리 모드 설정
    lib: {
      // 라이브러리의 진입점 파일 지정 (이 파일에서 export한 것들이 라이브러리의 API가 됨)
      entry: resolve(__dirname, 'src/index.ts'),
      
      // 브라우저에서 전역 변수로 사용될 때의 이름 (예: window.PianoCaptcha)
      name: 'PianoCaptcha',
      
      // 빌드된 파일의 이름 형식 지정
      // format이 'es'면 index.es.js (ESM)
      // format이 'umd'면 index.umd.js (브라우저용)
      fileName: (format) => `index.${format}.js`
    },
    
    // Rollup 번들러 추가 설정
    rollupOptions: {
      // 번들에 포함하지 않을 외부 의존성 지정
      external: ['react', 'react-dom'],  // 사용자의 프로젝트에 있는 React를 사용하도록 함
      
      output: {
        // 외부 의존성을 브라우저에서 어떤 전역 변수로 참조할지 지정
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }
})
