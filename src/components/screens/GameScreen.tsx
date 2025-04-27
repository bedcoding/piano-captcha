import NoteList from '../game/NoteList';
import Piano from '../game/Piano';
import './GameScreen.css';

interface GameScreenProps {
  notes: string[];
  targetNotes: string[];
  attempts: number;
  maxAttempts: number;
  onKeyPress: (note: string) => void;
}

export default function GameScreen({ notes, targetNotes, attempts, maxAttempts, onKeyPress }: GameScreenProps) {
  return (
    <>
      <div className="piano-captcha-target-notes">
        맞춰야 할 음표: {targetNotes.join(' ')}
        <br />
        <span className="piano-captcha-attempts">시도 횟수: {attempts} / {maxAttempts}</span>
      </div>
      <NoteList notes={notes} />
      <Piano onKeyPress={onKeyPress} />
    </>
  );
} 