# Piano Captcha (음주 코딩 방지 피아노 캡챠)
[![npm version](https://badge.fury.io/js/piano-captcha.svg)](https://badge.fury.io/js/piano-captcha)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![npm downloads](https://img.shields.io/npm/dm/piano-captcha.svg)](https://www.npmjs.com/package/piano-captcha)


## 📝 개요
음주 상태에서의 코딩을 방지하기 위한 피아노 캡챠 라이브러리입니다. <br/>
화면에 랜덤으로 계이름이 표시되고, 사용자가 피아노 건반을 올바른 순서대로 눌러야 통과할 수 있습니다.


## ✨ 주요 기능
- 🎵 피아노를 누르면 개발자의 감미로운 목소리 재생
- 🎹 플로팅 형태의 피아노 건반 UI
- 🔄 랜덤한 음계 시퀀스 생성
- ⚡️ 실시간 입력 검증
- 🎯 시도 횟수 제한


## 🛠️ 기술 스택
- React + TypeScript
- 순수 CSS
- Vite


## 🔗 링크 모음
- **데모**: https://bedcoding.github.io/piano-captcha
- **GitHub**: https://github.com/bedcoding/piano-captcha
- **npm 패키지**: https://www.npmjs.com/package/piano-captcha
- **사용 예시 (샘플 프로젝트)**: https://github.com/bedcoding/piano-captcha-sample.git


## 📦 설치 방법
```bash
npm install piano-captcha
```
```bash
yarn add piano-captcha
```


## 🚀 사용 방법
```tsx
import { PianoCaptcha } from 'piano-captcha';

function App() {
  return (
    <PianoCaptcha
      onSuccess={() => console.log('성공!')}
      onFail={() => console.log('실패!')}
      onClose={() => console.log('닫기!')}
      noteCount={5}        // 표시될 음계 개수
      maxAttempts={3}      // 최대 시도 횟수
    />
  );
}
```


## 🎵 음성 파일

피아노 캡차는 다음과 같은 음성 파일을 사용합니다 ^^

| 파일명    | 음계 |
|-----------|------|
| voice1.mp3 | 도   |
| voice2.mp3 | 레   |
| voice3.mp3 | 미   |
| voice4.mp3 | 파   |
| voice5.mp3 | 솔   |
| voice6.mp3 | 라   |
| voice7.mp3 | 시   |
| voice8.mp3 | 도   |
| voice9.mp3 | 레   |
| voice10.mp3| 미   |


## 📚 Props
| Prop      | Type     | Required | Description                          |
|-----------|----------|----------|--------------------------------------|
| onSuccess | Function | Yes      | 캡차 성공 시 호출될 콜백 함수        |
| onFail    | Function | Yes      | 캡차 실패 시 호출될 콜백 함수        |
| onClose   | Function | No       | 캡차 닫기 시 호출될 콜백 함수        |
| maxAttempts| Number  | No       | 최대 시도 횟수 (기본값: 3)           |
| noteCount | Number   | No       | 표시될 음계 개수 (기본값: 3)         |


## 📄 라이센스
MIT License - see [LICENSE](LICENSE) for details.