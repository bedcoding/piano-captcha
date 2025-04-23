import { useState } from 'react'
import InitScreen from './InitScreen'
import GameScreen from './GameScreen'
import ResultScreen from './ResultScreen'
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

  return (
    <div className="piano-captcha-floating-box">
      <div className="piano-captcha-floating-content">
        {/* 1. 시작 화면 */}
        {status === 'init' && (
          <InitScreen onStart={startGame} />
        )}
        
        {/* 2. 게임 진행 화면 */}
        {status === 'playing' && (
          <GameScreen 
            targetNotes={targetNotes}
            notes={notes}
            onKeyPress={handleKeyPress}
          />
        )}

        {/* 3. 게임 결과 화면 */}
        {(status === 'success' || status === 'fail') && (
          <ResultScreen 
            status={status}
            notes={notes}
            onKeyPress={handleKeyPress}
            onClose={onClose || (() => {})}
            onRetry={resetGame}
          />
        )}
      </div>
    </div>
  )
} 