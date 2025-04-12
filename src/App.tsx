import { useState } from 'react'
import PianoCaptcha from './components/PianoCaptcha'
import './App.css'

function App() {
  const [showCaptcha, setShowCaptcha] = useState(true);
  console.log("===== 배포 테스트");

  // 캡챠 성공 시 처리
  const handleCaptchaSuccess = async () => {
    console.log('캡챠 통과!');  // 여기서 캡챠 성공 후의 추가 로직을 처리할 수 있음
  };

  // 캡챠 실패 시 처리
  const handleCaptchaFail = async () => {
    console.log('캡챠 실패!');  // 여기서 캡챠 실패 후의 추가 로직을 처리할 수 있음
  };

  // 캡챠 닫기 처리
  const handleCloseCaptcha = () => {
    setShowCaptcha(false);
  };

  // 캡챠 열기 처리
  const handleOpenCaptcha = () => {
    setShowCaptcha(true);
  };

  return (
    <div className="app">
      {/* 임시로 배경이 되는 컨텐츠 */}
      <div className="background-content">
        <h1>이 위에 피아노 캡챠가 뜹니다</h1>
        <p>스크롤을 내려도 피아노 캡챠는 그대로 유지됩니다</p>
        
        {/* 캡챠 열기 버튼 */}
        {!showCaptcha && (
          <button 
            onClick={handleOpenCaptcha}
            className="open-captcha-btn"
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
          onSuccess={handleCaptchaSuccess}
          onFail={handleCaptchaFail}
          onClose={handleCloseCaptcha}
        />
      )}
    </div>
  )
}

export default App
