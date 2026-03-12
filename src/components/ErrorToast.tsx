import { useEffect } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface ErrorToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export function ErrorToast({ message, onClose, duration = 4000 }: ErrorToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="fixed bottom-6 start-6 z-50 flex items-center gap-3 glass-dark border-red-500/30 rounded-xl px-4 py-3 shadow-xl max-w-sm animate-in slide-in-from-bottom-4">
      <AlertCircle size={18} className="text-red-400 shrink-0" />
      <p className="text-sm text-slate-200 flex-1">{message}</p>
      <button
        onClick={onClose}
        className="text-slate-500 hover:text-slate-300 transition-colors"
        aria-label="סגור"
      >
        <X size={16} />
      </button>
    </div>
  );
}
