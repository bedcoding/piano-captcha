import React from 'react'
import { createRoot } from 'react-dom/client'
import { PianoCaptcha } from '../../src'

const App = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '20px',
      backgroundColor: '#f5f5f5'
    }}>
      <h1 style={{ marginBottom: '2rem', color: '#333' }}>Piano Captcha Demo</h1>
      <div style={{ 
        backgroundColor: 'white',
        padding: '2rem',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}>
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