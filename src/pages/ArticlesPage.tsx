import { Clock, Tag } from 'lucide-react';
import { ARTICLES } from '../data/articles';

interface ArticlesPageProps {
  onSelectArticle: (id: string) => void;
}

export function ArticlesPage({ onSelectArticle }: ArticlesPageProps) {
  return (
    <div className="flex flex-col gap-8">
      <div>
        <h2 className="text-3xl font-bold text-white">מאמרים ומדריכים 📚</h2>
        <p className="mt-2 text-base text-slate-400">מדריכים מעמיקים על עולם הפרומפטים וה-AI</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        {ARTICLES.map((article) => (
          <button
            key={article.id}
            type="button"
            onClick={() => onSelectArticle(article.id)}
            className="glass group flex flex-col overflow-hidden rounded-3xl text-right transition hover:border-violet-500/40"
          >
            {/* Image */}
            <div className="relative h-48 w-full overflow-hidden sm:h-56">
              <img
                src={article.image}
                alt={article.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              {/* Category badge */}
              <span className="absolute end-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-violet-600/90 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                <Tag size={11} />
                {article.category}
              </span>
            </div>

            {/* Content */}
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-semibold leading-snug text-white group-hover:text-violet-200 transition-colors">
                {article.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-400">{article.description}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-2">
                <div className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock size={13} />
                  {article.readTime} קריאה
                </div>
                <span className="text-xs font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                  קרא עוד ←
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
