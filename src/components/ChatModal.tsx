import { X } from 'lucide-react';
import { PromptChatPanel } from './PromptChatPanel';

interface ChatModalProps {
  onClose: () => void;
}

export function ChatModal({ onClose }: ChatModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-lg" style={{ maxHeight: '80vh' }}>
        <button
          onClick={onClose}
          className="absolute left-4 top-4 z-10 text-slate-500 transition-colors hover:text-slate-300"
          aria-label="סגור"
        >
          <X size={18} />
        </button>

        <PromptChatPanel
          title="צ'אט עם PromptVibe"
          subtitle="שאל שאלה על הפרומפטים שלך או בקש רעיון חדש."
          placeholder="הקלד הודעה..."
          emptyState="שאל שאלה על הפרומפטים שלך"
        />
      </div>
    </div>
  );
}
