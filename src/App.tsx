import PianoCaptcha from './components/PianoCaptcha'
import './App.css'

function App() {
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
      <PianoCaptcha 
        onSuccess={() => alert('캡챠 통과!')} 
        onFail={() => alert('다시 시도해주세요.')} 
      />
    </div>
  )
}

export default App
