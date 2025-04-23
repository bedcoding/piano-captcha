import NoteList from './NoteList';
import Piano from './Piano';
import ResultMessage from './ResultMessage';

interface ResultScreenProps {
  status: 'success' | 'fail';
  notes: string[];
  onKeyPress: (note: string) => void;
  onClose: () => void;
  onRetry: () => void;
}

export default function ResultScreen({ 
  status, 
  notes, 
  onKeyPress, 
  onClose, 
  onRetry 
}: ResultScreenProps) {
  return (
    <>
      <ResultMessage 
        status={status}
        onClose={onClose}
        onRetry={onRetry}
      />
      <NoteList notes={notes} />
      <Piano onKeyPress={onKeyPress} />
    </>
  );
} 