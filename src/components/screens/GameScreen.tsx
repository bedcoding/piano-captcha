import NoteList from '../game/NoteList';
import Piano from '../game/Piano';
import './GameScreen.css';

interface GameScreenProps {
  targetNotes: string[];
  notes: string[];
  onKeyPress: (note: string) => void;
}

export default function GameScreen({ targetNotes, notes, onKeyPress }: GameScreenProps) {
  return (
    <>
      <div className="piano-captcha-target-notes">
        맞춰야 할 음표: {targetNotes.join(' ')}
      </div>
      <NoteList notes={notes} />
      <Piano onKeyPress={onKeyPress} />
    </>
  );
} 