import { useState } from 'react'
import PianoCaptcha from './components/PianoCaptcha'
import './App.css'

function App() {
  const [showCaptcha, setShowCaptcha] = useState(true);

  // 캡챠 성공 시 처리
  const handleCaptchaSuccess = async () => {
    // 여기서 캡챠 성공 후의 추가 로직을 처리할 수 있습니다
  };

  // 캡챠 실패 시 처리
  const handleCaptchaFail = async () => {
    // 여기서 캡챠 실패 후의 추가 로직을 처리할 수 있습니다
  };

  // 캡챠 닫기 처리
  const handleCloseCaptcha = () => {
    setShowCaptcha(false);
  };

  return (
    <div className="app">
      {/* 임시로 배경이 되는 컨텐츠 */}
      <div className="background-content">
        <h1>이 위에 피아노 캡챠가 뜹니다</h1>
        <p>스크롤을 내려도 피아노 캡챠는 그대로 유지됩니다</p>
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
