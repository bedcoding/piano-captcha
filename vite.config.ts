import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { resolve } from 'path'

// Vite 설정 정의 (라이브러리 모드)
export default defineConfig({
  // React 플러그인 활성화
  // - JSX 변환
  // - Fast Refresh (코드 수정 시 자동 새로고침)
  // - React 관련 최적화
  plugins: [react()],
  
  // GitHub Pages 배포를 위한 기본 경로 설정
  // 모든 에셋(이미지, CSS 등)의 기본 URL 경로를 지정
  base: '/piano-captcha/',
  
  // 빌드 설정
  build: {
    // 라이브러리 모드 설정 (npm 패키지로 배포하기 위한 설정)
    lib: {
      // 라이브러리의 진입점 파일 지정 (이 파일에서 export한 것들이 라이브러리의 공개 API가 됨)
      entry: resolve(__dirname, 'src/index.ts'),
      
      // 브라우저에서 전역 변수로 사용될 때의 이름 (예시: <script src="piano-captcha.umd.js"></script> 후 window.PianoCaptcha로 접근 가능)
      name: 'PianoCaptcha',
      
      // 빌드된 파일의 이름 형식 지정
      // 빌드 시 다음 파일들이 생성됨:
      // 1. index.es.js - import/export 문법 사용 (EcmaScript Modules 형식)
      // 2. index.umd.js - 브라우저에서 <script> 태그로 직접 사용 가능 (UMD 형식)
      // 3. index.cjs.js - require() 문법 사용 가능 (CommonJS 형식)
      fileName: (format) => `index.${format}.js`
    },
    
    // Rollup 번들러 추가 설정
    // Rollup은 모던 JavaScript 모듈을 번들링하는 도구
    // Tree-shaking, 코드 최적화, 다양한 모듈 형식 지원
    rollupOptions: {
      // 번들에 포함하지 않을 외부 의존성 지정 (이 패키지들은 사용자의 프로젝트에 이미 설치되어 있을 것이므로 번들에 포함시키지 않고 외부에서 가져오도록 설정)
      external: [
        'react',           // React 코어
        'react-dom',       // React DOM 조작
        'react/jsx-runtime' // JSX 변환 런타임
      ],
      
      output: {
        // 외부 의존성을 브라우저에서 어떤 전역 변수로 참조할지 지정 (UMD 번들에서만 사용됨)
        globals: {
          react: 'React',           // window.React로 접근
          'react-dom': 'ReactDOM',  // window.ReactDOM으로 접근
          'react/jsx-runtime': 'jsxRuntime'  // window.jsxRuntime으로 접근
        },
        assetFileNames: 'index.css',  // 모든 CSS 파일을 하나로 합쳐서 'index.css'라는 이름으로 출력 (이렇게 하면 라이브러리 사용자가 별도로 CSS를 import 할 필요가 없음)
        exports: 'named'  // named exports만 사용하도록 설정
      }
    },

    // CSS 관련 설정
    cssCodeSplit: false  // cssCodeSplit: false - 모든 CSS를 하나의 파일로 번들링 (이렇게 하면 라이브러리 사용 시 별도의 CSS import가 필요 없음)
  }
})