// @ts-check
import React from 'react';
import { PianoCaptcha } from 'piano-captcha';
import { createRoot } from 'react-dom/client';

// HTML 요소 생성
const container = document.createElement('div');
container.id = 'captcha-container';
document.body.appendChild(container);

// React 컴포넌트를 렌더링하기 위한 루트 요소 생성
const root = document.createElement('div');
root.id = 'root';
container.appendChild(root);

// ReactDOM을 사용하여 컴포넌트 렌더링
const reactRoot = createRoot(root);
reactRoot.render(
  <PianoCaptcha 
    onSuccess={() => console.log('캡차 통과!')}
    onFail={() => console.log('캡차 실패!')}
    onClose={() => console.log('캡차 닫기')}
  />
); 