import { useState } from 'react'
import PianoCaptcha from './components/PianoCaptcha'
import './App.css'

function App() {
  const [showCaptcha, setShowCaptcha] = useState(true);

  // 캡챠 실패 시 처리
  const handleCaptchaFail = async () => {
    console.log('캡챠 실패!');  // 여기서 캡챠 실패 후의 추가 로직을 처리할 수 있음
  };

  // 캡챠 성공 시 처리
  const handleCaptchaSuccess = async () => {
    console.log('캡챠 통과!');  // 여기서 캡챠 성공 후의 추가 로직을 처리할 수 있음
  };

  // 캡챠 닫기 처리
  const handleCloseCaptcha = () => {
    setShowCaptcha(false);  // 여기서 캡챠 닫기 후의 추가 로직을 처리할 수 있음
  };

  // 캡챠 열기 처리
  const handleOpenCaptcha = () => {
    setShowCaptcha(true);
  };

  return (
    <div className="piano-captcha-app">
      {/* 임시로 배경이 되는 컨텐츠 */}
      <div className="piano-captcha-background-content">
        <h1>이 위에 피아노 캡챠가 뜹니다</h1>
        <p>스크롤을 내려도 피아노 캡챠는 그대로 유지됩니다</p>
        
        {/* 캡챠 열기 버튼 */}
        {!showCaptcha && (
          <button 
            onClick={handleOpenCaptcha}
            className="piano-captcha-open-btn"
          >
            음주 여부 확인 🎹
          </button>
        )}

        {Array.from({ length: 20 }).map((_, i) => (
          <p key={i}>배경 컨텐츠 {i + 1}</p>
        ))}
      </div>

      {/* 피아노 캡챠 */}
      {showCaptcha && (
        <PianoCaptcha 
          onFail={handleCaptchaFail}
          onSuccess={handleCaptchaSuccess}
          onClose={handleCloseCaptcha}
          noteCount={3}
          maxAttempts={3}
        />
      )}
    </div>
  )
}

export default App
