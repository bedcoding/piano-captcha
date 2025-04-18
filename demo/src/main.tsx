import React from 'react'
import { createRoot } from 'react-dom/client'
import { PianoCaptcha } from '../../src'

const App = () => {
  return (
    <div>
      <h1>Piano Captcha Demo</h1>
      <div>
        <PianoCaptcha 
          onSuccess={() => alert('캡차 통과!')}
          onFail={() => alert('캡차 실패!')}
          onClose={() => alert('캡차 닫기')}
        />
      </div>
    </div>
  )
}

const container = document.getElementById('root')
if (container) {
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
} 