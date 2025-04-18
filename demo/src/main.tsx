import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { PianoCaptcha } from '../../src'

const App = () => {
  const [status, setStatus] = useState('Piano Captcha Demo')

  return (
    <div>
      <h1>{status}</h1>
      <div>
        <PianoCaptcha 
          onSuccess={() => setStatus('✨캡차 통과✨')}
          onFail={() => setStatus('😢캡차 실패😢')}
          onClose={() => setStatus('Piano Captcha Demo')}
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