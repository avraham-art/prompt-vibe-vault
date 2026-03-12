import { useState, useRef, useEffect } from 'react';
import { X, Send, Bot, User, Loader2 } from 'lucide-react';
import type { ChatMessage } from '../types';
import { sendChat } from '../lib/api';

interface ChatModalProps {
  onClose: () => void;
}

export function ChatModal({ onClose }: ChatModalProps) {
  const [history, setHistory] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: ChatMessage = { role: 'user', content: text };
    const updatedHistory = [...history, userMsg];
    setHistory(updatedHistory);
    setInput('');
    setLoading(true);
    setError(null);

    try {
      const reply = await sendChat(updatedHistory);
      setHistory((prev) => [...prev, { role: 'assistant', content: reply }]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'שגיאה בשליחה');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="glass-dark w-full max-w-lg rounded-2xl flex flex-col overflow-hidden shadow-2xl shadow-violet-500/10" style={{ maxHeight: '80vh' }}>
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <div className="flex items-center gap-2">
            <Bot size={18} className="text-violet-400" />
            <h2 className="text-white font-semibold text-sm">צ'אט עם PromptVibe</h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-300 transition-colors"
            aria-label="סגור"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
          {history.length === 0 && (
            <p className="text-center text-slate-500 text-sm mt-8">
              שאל שאלה על הפרומפטים שלך
            </p>
          )}
          {history.map((msg, i) => (
            <div
              key={i}
              className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
            >
              <div
                className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center ${
                  msg.role === 'user' ? 'bg-violet-600' : 'bg-slate-700'
                }`}
              >
                {msg.role === 'user' ? (
                  <User size={14} className="text-white" />
                ) : (
                  <Bot size={14} className="text-violet-300" />
                )}
              </div>
              <div
                className={`max-w-[75%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-violet-600 text-white rounded-tr-sm'
                    : 'glass text-slate-200 rounded-tl-sm'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex gap-2.5">
              <div className="shrink-0 w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center">
                <Bot size={14} className="text-violet-300" />
              </div>
              <div className="glass rounded-2xl rounded-tl-sm px-3.5 py-2.5">
                <Loader2 size={16} className="text-violet-400 animate-spin" />
              </div>
            </div>
          )}
          {error && (
            <p className="text-red-400 text-xs text-center">{error}</p>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Input */}
        <div className="px-4 pb-4 pt-2 border-t border-white/10">
          <div className="flex gap-2 items-end">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="הקלד הודעה..."
              rows={1}
              className="flex-1 glass rounded-xl px-3.5 py-2.5 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500/50 resize-none transition-colors"
              style={{ minHeight: '42px', maxHeight: '120px' }}
            />
            <button
              onClick={send}
              disabled={!input.trim() || loading}
              className="w-10 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-colors shrink-0"
              aria-label="שלח"
            >
              <Send size={15} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
