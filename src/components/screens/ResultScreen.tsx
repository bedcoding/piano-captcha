import ResultMessage from '../game/ResultMessage';
import NoteList from '../game/NoteList';
import Piano from '../game/Piano';

interface ResultScreenProps {
  status: 'fail' | 'success';
  notes: string[];
  onKeyPress: (note: string) => void;
  onRetry: () => void;
  onClose: () => void;
}

export default function ResultScreen({ 
  notes, 
  status, 
  onKeyPress, 
  onRetry,
  onClose, 
}: ResultScreenProps) {
  return (
    <>
      <ResultMessage 
        status={status}
        onRetry={onRetry}
        onClose={onClose}
      />
      <NoteList notes={notes} />
      <Piano onKeyPress={onKeyPress} />
    </>
  );
} 