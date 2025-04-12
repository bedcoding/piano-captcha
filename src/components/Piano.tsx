import './Piano.css'

interface PianoProps {
  onKeyPress: (note: string) => void;  // 건반이 눌렸을 때 호출될 콜백
}

export default function Piano({ onKeyPress }: PianoProps) {
  const notes = ['도', '레', '미', '파', '솔', '라', '시', '도'];
  
  return (
    <div className="piano">
      {notes.map((note, index) => (
        <button
          key={index}
          className="key"
          onClick={() => onKeyPress(note)}
        >
          {note}
        </button>
      ))}
    </div>
  )
} 