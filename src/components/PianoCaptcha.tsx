import { useState } from 'react'
import InitScreen from './screens/InitScreen'
import GameScreen from './screens/GameScreen'
import ResultScreen from './screens/ResultScreen'
import './PianoCaptcha.css'

export interface PianoCaptchaProps {
  onFail?: () => void;     // 캡챠 실패시 호출될 콜백
  onSuccess?: () => void;  // 캡챠 통과시 호출될 콜백
  onClose?: () => void;    // 캡챠 창 닫기 콜백
  noteCount?: number;      // 표시될 음계 개수
  maxAttempts?: number;    // 최대 시도 횟수
}

export default function PianoCaptcha({ 
  onFail, 
  onSuccess, 
  onClose,
  noteCount = 3,
  maxAttempts = 3,
}: PianoCaptchaProps) {
  const [notes, setNotes] = useState<string[]>([])  // 현재까지 입력된 음표들
  const [targetNotes, setTargetNotes] = useState<string[]>([])  // 맞춰야 할 음표들
  const [status, setStatus] = useState<'init' | 'playing' | 'success' | 'fail'>('init')  // 현재 상태
  const [attempts, setAttempts] = useState(0)  // 현재 시도 횟수

  // 새로운 목표 음표를 생성하는 함수
  const generateNewTarget = () => {
    const notes = ['도', '레', '미', '파', '솔', '라', '시'];
    const randomNotes = Array.from(
      {length: noteCount}, 
      () => notes[Math.floor(Math.random() * notes.length)]
    );
    setTargetNotes(randomNotes);
  };

  // 게임 시작 함수
  const startGame = () => {
    generateNewTarget();
    setStatus('playing');
    setAttempts(0);
  };

  // 게임 초기화 함수
  const handleResetGame = () => {
    console.log('게임 초기화 attempts :', attempts);
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
        setAttempts(0);
        onSuccess?.();
      } else {
        if (attempts + 1 >= maxAttempts) {
          console.log('실패 attempts:', attempts);
          setStatus('fail');
          setAttempts(0);
          onFail?.();
        } else {
          handleResetGame();
          setAttempts(prev => prev + 1);
        }
      }
    }
  };

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="piano-captcha-floating-box">
      <div className="piano-captcha-floating-content">
        {onClose && (
          <button className="piano-captcha-close" onClick={handleClose}>
            ×
          </button>
        )}
        
        {/* 1. 시작 화면 */}
        {status === 'init' && (
          <InitScreen onStart={startGame} />
        )}
        
        {/* 2. 게임 진행 화면 */}
        {status === 'playing' && (
          <GameScreen 
            notes={notes}
            targetNotes={targetNotes}
            attempts={attempts}
            maxAttempts={maxAttempts}
            onKeyPress={handleKeyPress}
          />
        )}

        {/* 3. 게임 결과 화면 */}
        {(status === 'fail' || status === 'success') && (
          <ResultScreen 
            notes={notes}
            status={status}
            onKeyPress={handleKeyPress}
            onRetry={handleResetGame}
            onClose={handleClose}
          />
        )}
      </div>
    </div>
  )
} 