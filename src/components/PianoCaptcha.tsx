import { useState, useEffect } from 'react'
import NoteList from './NoteList'
import Piano from './Piano'
import './PianoCaptcha.css'

interface PianoCaptchaProps {
  onSuccess?: () => void;  // 캡챠 통과시 호출될 콜백
  onFail?: () => void;     // 캡챠 실패시 호출될 콜백
}

export default function PianoCaptcha({ onSuccess, onFail }: PianoCaptchaProps) {
  const [notes, setNotes] = useState<string[]>([])  // 현재까지 입력된 음표들
  const [targetNotes, setTargetNotes] = useState<string[]>([])  // 맞춰야 할 음표들

  // 새로운 목표 음표를 생성하는 함수
  const generateNewTarget = () => {
    const notes = ['도', '레', '미', '파', '솔', '라', '시'];
    const length = 3; // 목표 음표 개수
    const randomNotes = Array.from({length}, () => notes[Math.floor(Math.random() * notes.length)]);
    setTargetNotes(randomNotes);
  };

  // 컴포넌트가 처음 마운트될 때 목표 음표들을 생성
  useEffect(() => {
    generateNewTarget();
  }, []);

  // 음표가 입력될 때마다 체크
  useEffect(() => {
    // 목표 음표가 설정되지 않았거나 아직 입력이 없으면 스킵
    if (targetNotes.length === 0 || notes.length === 0) return;
    
    // 아직 목표 개수만큼 입력하지 않았으면 스킵
    if (notes.length < targetNotes.length) return;

    // 입력된 음표들이 목표와 일치하는지 체크
    const isCorrect = notes.every((note, index) => note === targetNotes[index]);

    if (isCorrect) {
      onSuccess?.();  // 성공 콜백 호출
      setNotes([]);   // 입력 초기화
      generateNewTarget();  // 새로운 목표 음표 생성
    } else {
      onFail?.();     // 실패 콜백 호출
      setNotes([]);   // 입력 초기화
    }
  }, [notes, targetNotes, onSuccess, onFail]);

  return (
    <div className="floating-box">
      <div className="floating-header">
        <h2>Piano Captcha</h2>
      </div>
      <div className="floating-content">
        <div className="target-notes">
          맞춰야 할 음표: {targetNotes.join(' ')}
        </div>
        <NoteList notes={notes} />
        <Piano onKeyPress={(note) => setNotes([...notes, note])} />
      </div>
    </div>
  )
} 