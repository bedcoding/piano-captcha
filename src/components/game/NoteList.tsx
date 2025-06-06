import './NoteList.css'

interface NoteListProps {
  notes: string[];  // 현재까지 입력된 음표들
}

export default function NoteList({ notes }: NoteListProps) {
  return (
    <div className="piano-captcha-note-list">
      <div className="piano-captcha-note-display">
        {notes.map((note, index) => (
          <span key={index} className="piano-captcha-note">
            {note}
          </span>
        ))}
      </div>
    </div>
  )
} 