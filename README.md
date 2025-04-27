# Piano Captcha (음주 코딩 방지 피아노 캡챠)


## 📝 개요
1. 음주 상태에서의 코딩을 방지하기 위한 피아노 캡챠 라이브러리입니다.
화면에 랜덤으로 계이름이 표시되고 (예: "미레 도레 미미미 미레도 레미미"), 사용자가 피아노 건반을 올바른 순서대로 눌러야 통과할 수 있습니다.

2. 통과하지 못하면 "음주 코딩이 의심됩니다"라는 메시지와 함께 경고를 표시합니다.
기본적으로 플로팅 형태의 피아노 건반을 제공하며, 캡챠 통과 여부를 전달받을 수 있습니다.

3. 각 건반을 누르면 개발자가 직접 녹음한 "도...레...미...파...솔...라...시...도↗↗↗↗↗" 이렇게 음성이 나오며,
기존 UI에 영향을 주지 않고 독립적으로 동작합니다.


## 🛠️ 기술 스택
- React + TypeScript
- 순수 CSS
- Vite


## 🔗 링크 모음
- **데모**: https://bedcoding.github.io/piano-captcha
- **GitHub 저장소**: https://github.com/bedcoding/piano-captcha
- **npm 패키지**: https://www.npmjs.com/package/piano-captcha
- **사용 예시 (샘플 프로젝트)**: https://github.com/bedcoding/piano-captcha-sample.git


## 설치 방법

```bash
npm install piano-captcha
```


## 사용 방법

```tsx
import { PianoCaptcha } from 'piano-captcha';

function App() {
  return (
    <PianoCaptcha
      onSuccess={() => console.log('성공!')}
      onFail={() => console.log('실패!')}
      onClose={() => console.log('닫기!')}
    />
  );
}
```


## 음성 파일

피아노 캡차는 다음과 같은 음성 파일을 사용합니다:

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


## Props

| Prop      | Type     | Required | Description                          |
|-----------|----------|----------|--------------------------------------|
| onSuccess | Function | Yes      | 캡차 성공 시 호출될 콜백 함수        |
| onFail    | Function | Yes      | 캡차 실패 시 호출될 콜백 함수        |
| onClose   | Function | No       | 캡차 닫기 시 호출될 콜백 함수        |
| maxAttempts| Number  | No       | 최대 시도 횟수 (기본값: 3)           |
| noteCount | Number   | No       | 표시될 음계 개수 (기본값: 3)         |


## 라이센스

MIT