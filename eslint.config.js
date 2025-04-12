// ESLint 기본 설정과 플러그인
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },  // dist 폴더는 린트 검사에서 제외
  {
    extends: [
      js.configs.recommended,           // JavaScript 문법 오류 체크 (예: 선언되지 않은 변수 사용)
      ...tseslint.configs.recommended   // TypeScript 타입 체크 (예: 잘못된 타입 할당)
    ],
    files: ['**/*.{ts,tsx}'],  // TypeScript 파일에만 적용 (.ts와 .tsx 확장자를 가진 파일들에만 이 규칙들을 적용)
    
    // 언어 설정
    languageOptions: {
      ecmaVersion: 2020,        // ES2020 문법 사용 가능
      globals: globals.browser, // window, document 같은 브라우저 전역 변수 사용 가능
    },
    
    // React 관련 플러그인 설정
    plugins: {
      'react-hooks': reactHooks,      // useEffect 내부에서 사용하는 값들이 의존성 배열에 포함되어 있는지 체크 (단, 빈 배열([])은 허용)
      'react-refresh': reactRefresh,  // 개발할 때 코드 수정하면 자동 새로고침
    },
    
    // 규칙 설정
    rules: {
      ...reactHooks.configs.recommended.rules,  // Hook은 반드시 최상위에서만 호출, 컴포넌트 내부에서만 사용 등 React Hook 기본 규칙 적용 (예시: useState는 if문이나 for문 안에서 사용 불가)
      
      // Fast Refresh 관련 설정 (코드 수정시 자동 업데이트)
      'react-refresh/only-export-components': [
        'warn',  // 규칙 위반시 경고만 표시 (에러 아님)
        { allowConstantExport: true },  // 파일에서 상수만 export하는 경우는 Fast Refresh 규칙 검사에서 제외 (예시: export const MAX_ITEMS = 100; 이렇게 상수만 바꾸는 경우는 검사 제외)
      ],
    },
  },
)
