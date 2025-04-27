import './Piano.css'

interface PianoProps {
  onKeyPress: (note: string) => void;  // 건반이 눌렸을 때 호출될 콜백
}

interface PianoKey {
  note: string;
  type: 'white' | 'black';
  position?: number; // 검은 건반의 상대적 위치 (0-100 사이의 값)
}

export default function Piano({ onKeyPress }: PianoProps) {
  const pianoKeys: PianoKey[] = [
    { note: '도', type: 'white' },
    { note: '도#', type: 'black', position: 6 },
    { note: '레', type: 'white' },
    { note: '레#', type: 'black', position: 16 },
    { note: '미', type: 'white' },
    { note: '파', type: 'white' },
    { note: '파#', type: 'black', position: 36 },
    { note: '솔', type: 'white' },
    { note: '솔#', type: 'black', position: 46 },
    { note: '라', type: 'white' },
    { note: '라#', type: 'black', position: 56 },
    { note: '시', type: 'white' },
    { note: '도', type: 'white' },
    { note: '도#', type: 'black', position: 76 },
    { note: '레', type: 'white' },
    { note: '레#', type: 'black', position: 86 },
    { note: '미', type: 'white' },
  ];

  return (
    <div className="piano-captcha-piano">
      <div className="piano-keys">
        {pianoKeys.filter(key => key.type === 'white').map((key, index) => (
          <button
            key={`white-${index}`}
            className="piano-captcha-key white-key"
            onClick={() => onKeyPress(key.note)}
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