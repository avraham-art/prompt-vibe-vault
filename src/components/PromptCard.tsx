import { useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import type { Prompt } from '../types';

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
  const categoryStyle = CATEGORY_COLORS[prompt.category] ?? DEFAULT_COLOR;

  return (
    <div
      onClick={() => setExpanded(true)}
      className={`glass rounded-2xl p-5 flex flex-col gap-3 transition-all duration-300 group cursor-pointer ${
        expanded
          ? 'relative border-violet-500/40 shadow-lg shadow-violet-500/10'
          : 'hover:border-violet-500/30 hover:shadow-lg hover:shadow-violet-500/10'
      }`}
    >
      {expanded && (
        <button
          type="button"
          aria-label="סגור כרטיסייה"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(false);
          }}
          className="absolute start-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-slate-900/70 text-slate-300 transition-colors hover:text-white hover:border-violet-400/40"
        >
          <X size={16} />
        </button>
      )}

      <h3 className="text-white font-semibold text-base leading-snug group-hover:text-violet-300 transition-colors">
        {prompt.name}
      </h3>

      <span
        className={`self-start text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryStyle}`}
      >
        {prompt.category}
      </span>

      {prompt.description && (
        <p className={`text-slate-400 text-sm leading-relaxed ${expanded ? '' : 'line-clamp-3'}`}>
          {prompt.description}
        </p>
      )}

      {expanded && prompt.content && (
        <div className="rounded-xl border border-white/10 bg-slate-950/40 p-3 text-sm leading-relaxed text-slate-300 whitespace-pre-wrap">
          {prompt.content}
        </div>
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
  );
}
