import { useEffect, useState } from 'react';
import { Check, Copy, ExternalLink, X } from 'lucide-react';
import type { Prompt } from '../types';
import { fetchPromptContent, translatePrompt } from '../lib/api';

const CATEGORY_COLORS: Record<string, string> = {
  'כתיבה': 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  'שיווק': 'bg-green-500/20 text-green-300 border-green-500/30',
  'טכנולוגיה': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'עסקים': 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  'חינוך': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
};

const DEFAULT_COLOR = 'bg-violet-500/20 text-violet-300 border-violet-500/30';

interface PromptCardProps {
  prompt: Prompt;
}

export function PromptCard({ prompt }: PromptCardProps) {
  const [expanded, setExpanded] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [contentText, setContentText] = useState('');
  const [loadedLink, setLoadedLink] = useState<string | null>(null);
  const [isLoadingContent, setIsLoadingContent] = useState(false);
  const [contentError, setContentError] = useState(false);
  const [copied, setCopied] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const [isTranslating, setIsTranslating] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const categoryStyle = CATEGORY_COLORS[prompt.category] ?? DEFAULT_COLOR;

  useEffect(() => {
    setContentText('');
    setLoadedLink(null);
    setContentError(false);
    setIsLoadingContent(false);
    setCopied(false);
    setTranslatedText('');
    setShowTranslation(false);
    setIsTranslating(false);
  }, [prompt.link]);

  useEffect(() => {
    if (!expanded || !prompt.link || loadedLink === prompt.link) {
      return;
    }

    let isCancelled = false;

    const loadContent = async () => {
      setIsLoadingContent(true);
      setContentError(false);

      try {
        const content = await fetchPromptContent(prompt.link);
        if (!isCancelled) {
          setContentText(content);
          setLoadedLink(prompt.link);
        }
      } catch (error) {
        console.error('Failed to load prompt content:', error);
        if (!isCancelled) {
          setContentError(true);
        }
      } finally {
        if (!isCancelled) {
          setIsLoadingContent(false);
        }
      }
    };

    void loadContent();

    return () => {
      isCancelled = true;
    };
  }, [expanded, prompt.link, loadedLink]);

  useEffect(() => {
    if (!expanded) {
      setIsModalVisible(false);
      return;
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setIsModalVisible(true);
    });

    return () => {
      window.cancelAnimationFrame(animationFrame);
    };
  }, [expanded]);

  useEffect(() => {
    if (!expanded) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setExpanded(false);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [expanded]);

  const closeModal = () => {
    setExpanded(false);
    setCopied(false);
    setShowTranslation(false);
  };

  const handleTranslate = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    if (!contentText) return;

    if (translatedText) {
      setShowTranslation(true);
      return;
    }

    setIsTranslating(true);
    try {
      const result = await translatePrompt(contentText);
      setTranslatedText(result);
      setShowTranslation(true);
    } catch (error) {
      console.error('Failed to translate:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  const handleCopyContent = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (!contentText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(contentText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch (error) {
      console.error('Failed to copy prompt content:', error);
    }
  };

  return (
    <>
      <div
        onClick={() => setExpanded(true)}
        className="glass rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 group cursor-pointer hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10"
      >
        <h3 className="text-white font-semibold text-base leading-snug group-hover:text-violet-300 transition-colors">
          {prompt.name}
        </h3>

        <span
          className={`self-start text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryStyle}`}
        >
          {prompt.category}
        </span>

        {prompt.description && (
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">{prompt.description}</p>
        )}

        {prompt.link && (
          <a
            href={prompt.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="mt-auto inline-flex items-center gap-1.5 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
          >
            <ExternalLink size={14} />
            פתח ב-Drive
          </a>
        )}
      </div>

      {expanded && (
        <div
          dir="rtl"
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 sm:p-6 ${
            isModalVisible ? 'bg-slate-950/55 backdrop-blur-md' : 'bg-slate-950/0 backdrop-blur-0'
          }`}
          onClick={closeModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`prompt-modal-title-${prompt.id}`}
            onClick={(event) => event.stopPropagation()}
            className={`glass relative w-full max-w-3xl overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 shadow-2xl shadow-violet-950/30 transition-all duration-300 ${
              isModalVisible ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-6 scale-95 opacity-0'
            }`}
          >
            <button
              type="button"
              aria-label="סגור חלון"
              onClick={closeModal}
              className="absolute left-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-slate-950/60 text-slate-300 transition-colors hover:border-violet-400/40 hover:text-white"
            >
              <X size={18} />
            </button>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,#a78bfa1f,transparent_45%),linear-gradient(135deg,#ffffff14,transparent_55%)]" />

            <div className="relative flex max-h-[85vh] flex-col gap-5 p-6 text-right sm:p-8">
              <div className="flex flex-col gap-3 border-b border-white/10 pb-5 pl-12">
                <span
                  className={`self-start text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryStyle}`}
                >
                  {prompt.category}
                </span>
                <h2
                  id={`prompt-modal-title-${prompt.id}`}
                  className="text-2xl font-semibold leading-tight text-white sm:text-3xl"
                >
                  {prompt.name}
                </h2>
                {prompt.description && (
                  <p className="text-sm leading-relaxed text-slate-300">{prompt.description}</p>
                )}
              </div>

              <div className="min-h-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-slate-950/45 p-4 sm:p-5">
                {isLoadingContent ? (
                  <div className="space-y-3" aria-live="polite">
                    <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-11/12 animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-white/10" />
                    <div className="h-4 w-3/4 animate-pulse rounded bg-white/10" />
                    <span className="text-xs text-slate-400">טוען תוכן מלא...</span>
                  </div>
                ) : isTranslating ? (
                  <div className="space-y-3" aria-live="polite">
                    <div className="h-4 w-full animate-pulse rounded bg-violet-500/20" />
                    <div className="h-4 w-11/12 animate-pulse rounded bg-violet-500/20" />
                    <div className="h-4 w-4/5 animate-pulse rounded bg-violet-500/20" />
                    <span className="text-xs text-violet-400">מתרגם...</span>
                  </div>
                ) : contentError ? (
                  <p className="text-sm text-rose-300">לא ניתן לטעון את התוכן</p>
                ) : (showTranslation && translatedText) ? (
                  <div className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap pr-1 text-sm leading-7 text-slate-100">
                    {translatedText}
                  </div>
                ) : contentText ? (
                  <div className="max-h-[50vh] overflow-y-auto whitespace-pre-wrap pr-1 text-sm leading-7 text-slate-100">
                    {contentText}
                  </div>
                ) : (
                  <p className="text-sm text-slate-400">לא נמצא תוכן להצגה</p>
                )}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-4">
                <div className="flex flex-wrap gap-2">
                  <button
                    type="button"
                    onClick={handleCopyContent}
                    disabled={!contentText}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-violet-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {copied ? <Check size={16} /> : <Copy size={16} />}
                    {copied ? 'הועתק ✓' : 'העתק פרומפט'}
                  </button>

                  {showTranslation ? (
                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setShowTranslation(false); }}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300 transition-colors hover:border-violet-400/50 hover:text-violet-200"
                    >
                      הצג מקור
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={handleTranslate}
                      disabled={!contentText || isTranslating}
                      className="inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-violet-400/40 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      {isTranslating ? 'מתרגם...' : 'תרגם לעברית 🇮🇱'}
                    </button>
                  )}
                </div>

                {prompt.link && (
                  <a
                    href={prompt.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-violet-300 transition-colors hover:text-violet-200"
                  >
                    <ExternalLink size={15} />
                    פתח ב-Drive
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
