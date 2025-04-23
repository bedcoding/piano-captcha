import './InitScreen.css'

interface InitScreenProps {
  onStart: () => void;
}

export default function InitScreen({ onStart }: InitScreenProps) {
  return (
    <div className="piano-captcha-init-screen">
      <h2>음주 테스트</h2>
      <p>화면에 표시되는 음표 순서대로<br />피아노 건반을 눌러주세요</p>
      <button onClick={onStart} className="piano-captcha-start-btn">
        시작하기
      </button>
    </div>
  )
} 