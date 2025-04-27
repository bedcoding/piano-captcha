import './ResultMessage.css';

interface ResultMessageProps {
  status: 'fail' | 'success';
  onRetry: () => void;
  onClose: () => void;
}

const RESULT_CONTENT = {
  fail: {
    hint: '클릭하여 재시도',
    message: '😱 음주 코딩이 의심됩니다 😱',
    action: (props: ResultMessageProps) => props.onRetry
  },
  success: {
    hint: '클릭하여 닫기',
    message: '🎉 아직 정신이 멀쩡하신데요? 🎉',
    action: (props: ResultMessageProps) => props.onClose
  },
} as const;

export default function ResultMessage(props: ResultMessageProps) {
  const { status } = props;
  const content = RESULT_CONTENT[status];

  return (
    <button 
      className={`piano-captcha-result-message ${status}`}
      onClick={content.action(props)}
    >
      <p>{content.message}</p>
      <p className="piano-captcha-result-hint">{content.hint}</p>
    </button>
  );
} 