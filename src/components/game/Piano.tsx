import './Piano.css'
import { useCallback } from 'react'

interface PianoProps {
  onKeyPress: (note: string) => void;  // 건반이 눌렸을 때 호출될 콜백
}

interface PianoKey {
  note: string;
  octave: number;  // 옥타브 정보 추가
  type: 'white' | 'black';
  position?: number; // 검은 건반의 상대적 위치 (0-100 사이의 값)
}

export default function Piano({ onKeyPress }: PianoProps) {
  const playNote = useCallback((note: string, octave: number) => {
    // 음계에 따른 음성 파일 인덱스 매핑
    const noteToIndex: { [key: string]: number } = {
      '도': 1,
      '레': 2,
      '미': 3,
      '파': 4,
      '솔': 5,
      '라': 6,
      '시': 7
    };

    const index = noteToIndex[note];
    if (index) {
      // 옥타브에 따라 음성 파일 인덱스 조정
      const adjustedIndex = index + (octave - 1) * 7;
      const getAudioPath = () => {
        // 개발 환경 또는 GitHub Pages에서 음악 파일을 가져오는 경우
        if (import.meta.env.DEV || window.location.hostname.includes('github.io')) {
          return `${import.meta.env.BASE_URL || ''}audio/voice${adjustedIndex}.mp3`;
        }
        
        // 외부에서 이 프로젝트를 npm 패키지로 설치한 경우
        try {
          // 환경 변수에서 버전 정보를 가져옴
          const version = import.meta.env.PACKAGE_VERSION || 'latest';
          return `https://unpkg.com/piano-captcha@${version}/public/audio/voice${adjustedIndex}.mp3`;
        } catch (error) {
          // 오류 발생 시 기본 경로 사용
          console.warn('Failed to load audio from unpkg, using local path:', error);
          return `audio/voice${adjustedIndex}.mp3`;
        }
      };

      const audio = new Audio(getAudioPath());
      audio.play();
    }
  }, []);

  const handleKeyPress = useCallback((note: string, octave: number) => {
    playNote(note, octave);
    onKeyPress(note);  // 음계만 전달
  }, [onKeyPress, playNote]);

  const pianoKeys: PianoKey[] = [
    { note: '도', octave: 1, type: 'white' },
    { note: '도#', octave: 1, type: 'black', position: 6 },
    { note: '레', octave: 1, type: 'white' },
    { note: '레#', octave: 1, type: 'black', position: 16 },
    { note: '미', octave: 1, type: 'white' },
    { note: '파', octave: 1, type: 'white' },
    { note: '파#', octave: 1, type: 'black', position: 36 },
    { note: '솔', octave: 1, type: 'white' },
    { note: '솔#', octave: 1, type: 'black', position: 46 },
    { note: '라', octave: 1, type: 'white' },
    { note: '라#', octave: 1, type: 'black', position: 56 },
    { note: '시', octave: 1, type: 'white' },
    { note: '도', octave: 2, type: 'white' },
    { note: '도#', octave: 2, type: 'black', position: 76 },
    { note: '레', octave: 2, type: 'white' },
    { note: '레#', octave: 2, type: 'black', position: 86 },
    { note: '미', octave: 2, type: 'white' },
  ];

  return (
    <div className="piano-captcha-piano">
      <div className="piano-keys">
        {pianoKeys.filter(key => key.type === 'white').map((key, index) => (
          <button
            key={`white-${index}`}
            className="piano-captcha-key white-key"
            onClick={() => handleKeyPress(key.note, key.octave)}
          >
            {key.note}
          </button>
        ))}
        <div className="black-keys">
          {pianoKeys.filter(key => key.type === 'black').map((key, index) => (
            <div
              key={`black-${index}`}
              className="piano-captcha-key black-key"
              style={{ left: `${key.position}%` }}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 