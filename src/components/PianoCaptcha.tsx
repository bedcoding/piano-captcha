import { useState } from 'react'
import NoteList from './NoteList'
import Piano from './Piano'
import './PianoCaptcha.css'

export interface PianoCaptchaProps {
  onSuccess?: () => void | Promise<void>;  // 캡챠 통과시 호출될 콜백
  onFail?: () => void | Promise<void>;     // 캡챠 실패시 호출될 콜백
  onClose?: () => void;                    // 캡챠 창 닫기 콜백
}

export default function PianoCaptcha({ onSuccess, onFail, onClose }: PianoCaptchaProps) {
  const [notes, setNotes] = useState<string[]>([])  // 현재까지 입력된 음표들
  const [targetNotes, setTargetNotes] = useState<string[]>([])  // 맞춰야 할 음표들
  const [status, setStatus] = useState<'init' | 'playing' | 'success' | 'fail'>('init')  // 현재 상태

  // 새로운 목표 음표를 생성하는 함수
  const generateNewTarget = () => {
    const notes = ['도', '레', '미', '파', '솔', '라', '시'];
    const length = 3; // 목표 음표 개수
    const randomNotes = Array.from({length}, () => notes[Math.floor(Math.random() * notes.length)]);
    setTargetNotes(randomNotes);
  };

  // 게임 시작 함수
  const startGame = () => {
    generateNewTarget();
    setStatus('playing');
  };

  // 게임 초기화 함수
  const resetGame = () => {
    setNotes([]);
    generateNewTarget();
    setStatus('playing');
  };

  // 건반이 눌렸을 때 처리하는 함수
  const handleKeyPress = (note: string) => {
    if (status !== 'playing') return; // 게임이 끝난 상태면 입력 무시

    const newNotes = [...notes, note];
    setNotes(newNotes);

    // 목표 개수만큼 입력되었을 때 체크
    if (newNotes.length === targetNotes.length) {
      const isCorrect = newNotes.every((n, i) => n === targetNotes[i]);
      
      if (isCorrect) {
        setStatus('success');
        onSuccess?.();
      } else {
        setStatus('fail');
        onFail?.();
      }
    }
  };

  // 결과 메시지와 버튼 렌더링
  const renderContent = () => {
    if (status === 'init') {
      return (
        <div className="init-screen">
          <h2>음주 테스트</h2>
          <p>화면에 표시되는 음표 순서대로<br />피아노 건반을 눌러주세요</p>
          <button onClick={startGame} className="start-btn">
            시작하기
          </button>
        </div>
      );
    }

    return (
      <>
        {status === 'playing' ? (
          <div className="target-notes">
            맞춰야 할 음표: {targetNotes.join(' ')}
          </div>
        ) : (
          <div className={`result-message ${status}`}>
            <p>{status === 'success' ? '아직 정신이 멀쩡하신데요?' : '음주 코딩이 의심됩니다'}</p>
            <div className="result-buttons">
              {status === 'success' && (
                <button onClick={onClose} className="close-btn">
                  확인
                </button>
              )}
              {status === 'fail' && (
                <button onClick={resetGame} className="retry-btn">
                  재시도
                </button>
              )}
            </div>
          </div>
        )}
        <NoteList notes={notes} />
        <Piano onKeyPress={handleKeyPress} />
      </>
    );
  };

  return (
    <div className="floating-box">
      <div className="floating-content">
        {renderContent()}
      </div>
    </div>
  )
} 