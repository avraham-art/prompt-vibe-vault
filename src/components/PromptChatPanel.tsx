import { useEffect, useRef, useState } from 'react';
import { Bot, Loader2, Send, User } from 'lucide-react';
import type { ChatMessage } from '../types';
import { sendChat } from '../lib/api';

interface PromptChatPanelProps {
  title: string;
  subtitle: string;
  placeholder: string;
  emptyState: string;
  compact?: boolean;
}

export function PromptChatPanel({
  title,
  subtitle,
  placeholder,
  emptyState,
  compact = false,
}: PromptChatPanelProps) {
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
    <div className="glass-dark flex h-full flex-col overflow-hidden rounded-2xl shadow-2xl shadow-violet-500/10">
      <div className="border-b border-white/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <Bot size={18} className="text-violet-400" />
          <div>
            <h2 className="text-sm font-semibold text-white">{title}</h2>
            <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
          </div>
        </div>
      </div>

      <div
        className={`flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4 ${
          compact ? 'max-h-[420px]' : ''
        }`}
      >
        {history.length === 0 && (
          <p className="mt-8 text-center text-sm text-slate-500">{emptyState}</p>
        )}

        {history.map((msg, i) => (
          <div
            key={i}
            className={`flex gap-2.5 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
          >
            <div
              className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
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
                  ? 'rounded-tr-sm bg-violet-600 text-white'
                  : 'glass rounded-tl-sm text-slate-200'
              }`}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex gap-2.5">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-slate-700">
              <Bot size={14} className="text-violet-300" />
            </div>
            <div className="glass rounded-2xl rounded-tl-sm px-3.5 py-2.5">
              <Loader2 size={16} className="animate-spin text-violet-400" />
            </div>
          </div>
        )}

        {error && <p className="text-center text-xs text-red-400">{error}</p>}
        <div ref={bottomRef} />
      </div>

      <div className="border-t border-white/10 px-4 pb-4 pt-2">
        <div className="flex items-end gap-2">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            rows={1}
            className="glass min-h-[42px] max-h-[120px] flex-1 resize-none rounded-xl px-3.5 py-2.5 text-sm text-white outline-none transition-colors placeholder:text-slate-500 focus:border-violet-500/50"
          />
          <button
            onClick={send}
            disabled={!input.trim() || loading}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-violet-600 transition-colors hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="שלח"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
