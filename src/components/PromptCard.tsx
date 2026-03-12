import { ExternalLink } from 'lucide-react';
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
  const categoryStyle = CATEGORY_COLORS[prompt.category] ?? DEFAULT_COLOR;

  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-3 hover:border-violet-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/10 group">
      <h3 className="text-white font-semibold text-base leading-snug group-hover:text-violet-300 transition-colors">
        {prompt.name}
      </h3>

      <span
        className={`self-start text-xs px-2.5 py-0.5 rounded-full border font-medium ${categoryStyle}`}
      >
        {prompt.category}
      </span>

      {prompt.description && (
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
          {prompt.description}
        </p>
      )}

      {prompt.link && (
        <a
          href={prompt.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center gap-1.5 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors"
        >
          <ExternalLink size={14} />
          פתח ב-Drive
        </a>
      )}
    </div>
  );
}
