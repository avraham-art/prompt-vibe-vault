import { useState } from 'react';
import { BookOpen, Copy, Check, ChevronLeft } from 'lucide-react';
import { fetchGuide } from '../lib/api';

const TOPICS = [
  'מבנה פרומפט בסיסי',
  'כתיבת Role מושלם',
  'הגדרת Context',
  'דוגמאות בפרומפט',
  'טיפים מתקדמים',
];

export function GuidesPanel() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [guideText, setGuideText] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleTopicClick = async (topic: string) => {
    if (topic === selectedTopic && guideText) return;
    setSelectedTopic(topic);
    setGuideText(null);
    setError(null);
    setLoading(true);
    try {
      const result = await fetchGuide(topic);
      setGuideText(result);
    } catch {
      setError('לא הצלחנו לטעון את המדריך. נסה שוב.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = async () => {
    if (!guideText) return;
    await navigator.clipboard.writeText(guideText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBack = () => {
    setSelectedTopic(null);
    setGuideText(null);
    setError(null);
  };

  return (
    <div className="glass rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
          <BookOpen size={18} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">מדריכי כתיבת פרומפטים</h3>
          <p className="mt-0.5 text-sm text-slate-400">בחר נושא וקבל מדריך מ-Gemini AI</p>
        </div>
      </div>

      {!selectedTopic ? (
        <div className="flex flex-col gap-2">
          {TOPICS.map((topic) => (
            <button
              key={topic}
              type="button"
              onClick={() => handleTopicClick(topic)}
              className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-right text-sm font-medium text-white transition-all hover:border-violet-500/40 hover:bg-white/8"
            >
              <span>{topic}</span>
              <ChevronLeft size={16} className="text-slate-400" />
            </button>
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-1.5 rounded-xl bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:bg-white/10"
            >
              <ChevronLeft size={14} />
              חזרה
            </button>
            <span className="text-sm font-semibold text-violet-200">{selectedTopic}</span>
          </div>

          <div className="min-h-[8rem] rounded-2xl border border-white/8 bg-white/4 p-4 text-sm leading-relaxed text-slate-200">
            {loading ? (
              <div className="flex h-24 flex-col items-center justify-center gap-2">
                <span className="text-sm text-violet-400/80">Gemini מכין מדריך... ✨</span>
                <div className="h-1 w-32 overflow-hidden rounded-full bg-violet-500/20">
                  <div className="h-full w-1/2 animate-pulse rounded-full bg-violet-400/50" />
                </div>
              </div>
            ) : error ? (
              <p className="text-center text-red-400">{error}</p>
            ) : (
              <p className="whitespace-pre-wrap">{guideText}</p>
            )}
          </div>

          {guideText && !loading && (
            <button
              type="button"
              onClick={handleCopy}
              className="flex items-center justify-center gap-2 rounded-xl bg-violet-500/20 px-4 py-2.5 text-sm font-medium text-violet-200 transition hover:bg-violet-500/30"
            >
              {copied ? (
                <>
                  <Check size={15} />
                  הועתק!
                </>
              ) : (
                <>
                  <Copy size={15} />
                  העתק מדריך
                </>
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
}
