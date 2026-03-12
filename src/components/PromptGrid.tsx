import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import type { Prompt } from '../types';
import { PromptCard } from './PromptCard';
import { SkeletonCard } from './SkeletonCard';

interface PromptGridProps {
  prompts: Prompt[];
  loading: boolean;
}

const SKELETON_COUNT = 6;

export function PromptGrid({ prompts, loading }: PromptGridProps) {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    if (!search.trim()) return prompts;
    const q = search.toLowerCase();
    return prompts.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description?.toLowerCase().includes(q),
    );
  }, [prompts, search]);

  return (
    <div className="flex flex-col gap-6">
      <div className="relative">
        <Search
          size={16}
          className="absolute top-1/2 -translate-y-1/2 end-3 text-slate-400 pointer-events-none"
        />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="חיפוש פרומפטים..."
          className="w-full glass rounded-xl px-4 py-2.5 pe-9 text-sm text-white placeholder-slate-500 outline-none focus:border-violet-500/50 transition-colors"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: SKELETON_COUNT }).map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">לא נמצאו פרומפטים</p>
          {search && (
            <p className="text-sm mt-1">נסה לחפש במילים אחרות</p>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((prompt) => (
            <PromptCard key={prompt.id} prompt={prompt} />
          ))}
        </div>
      )}
    </div>
  );
}
