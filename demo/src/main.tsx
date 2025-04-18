import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PianoCaptcha } from '../../src'

const App = () => {
  const [status, setStatus] = useState('Piano Captcha Demo')
  const [showCaptcha, setShowCaptcha] = useState(true)

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{status}</h1>
      <div>
        {showCaptcha ? (
          <PianoCaptcha 
            onSuccess={() => setStatus('✨캡차 통과✨')}
            onFail={() => setStatus('😢캡차 실패😢')}
            onClose={()=> setShowCaptcha(false)}
          />
        ) : (
          <button 
            onClick={() => setShowCaptcha(true)}
            style={{ display: 'block', margin: '0 auto' }}
          >
            다시 테스트하기 🎹
          </button>
        )}
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