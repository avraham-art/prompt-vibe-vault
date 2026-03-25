import { BarChart3, Layers3, Sparkles } from 'lucide-react';
import type { Prompt } from '../types';
import { PromptChatPanel } from './PromptChatPanel';

interface DashboardProps {
  prompts: Prompt[];
  loading: boolean;
}

interface CategoryStat {
  name: string;
  count: number;
  percentage: number;
}

export function Dashboard({ prompts, loading }: DashboardProps) {
  const totalPrompts = prompts.length;

  const categoryStats: CategoryStat[] = Object.entries(
    prompts.reduce<Record<string, number>>((acc, prompt) => {
      const category = prompt.category?.trim() || 'ללא קטגוריה';
      acc[category] = (acc[category] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .map(([name, count]) => ({
      name,
      count,
      percentage: totalPrompts > 0 ? Math.round((count / totalPrompts) * 100) : 0,
    }))
    .sort((a, b) => b.count - a.count);

  return (
    <div className="flex flex-col gap-6">
      <section className="grid grid-cols-1 gap-4 xl:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-dark relative overflow-hidden rounded-3xl border border-white/10 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.22),transparent_45%)]" />
          <div className="relative flex items-start justify-between gap-4">
            <div>
              <p className="text-sm text-violet-200">תמונת מצב כללית</p>
              <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
                {loading ? '...' : totalPrompts}
              </h2>
              <p className="mt-2 text-sm text-slate-300">
                סך כל הפרומפטים השמורים בספרייה שלך
              </p>
            </div>
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20 text-violet-200">
              <Sparkles size={24} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-1">
          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-violet-300">
                <Layers3 size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400">קטגוריות פעילות</p>
                <p className="text-xl font-semibold text-white">
                  {loading ? '...' : categoryStats.length}
                </p>
              </div>
            </div>
          </div>

          <div className="glass rounded-2xl p-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/8 text-violet-300">
                <BarChart3 size={18} />
              </div>
              <div>
                <p className="text-xs text-slate-400">הקטגוריה המובילה</p>
                <p className="text-base font-semibold text-white">
                  {loading ? '...' : categoryStats[0]?.name ?? 'אין עדיין נתונים'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="glass rounded-3xl p-5 sm:p-6">
          <div className="mb-5 flex items-center justify-between gap-3">
            <div>
              <h3 className="text-lg font-semibold text-white">סטטיסטיקה לפי קטגוריה</h3>
              <p className="mt-1 text-sm text-slate-400">
                חלוקת הפרומפטים לפי הנושאים שבספרייה
              </p>
            </div>
            <div className="rounded-xl bg-white/5 px-3 py-1 text-xs text-slate-300">
              {loading ? 'טוען...' : `${categoryStats.length} קטגוריות`}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {loading &&
              Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="glass rounded-2xl p-4">
                  <div className="skeleton h-4 w-28 rounded" />
                  <div className="mt-3 skeleton h-2.5 w-full rounded-full" />
                </div>
              ))}

            {!loading && categoryStats.length === 0 && (
              <div className="rounded-2xl border border-dashed border-white/10 px-4 py-10 text-center text-sm text-slate-400">
                עדיין אין פרומפטים להצגה בדשבורד.
              </div>
            )}

            {!loading &&
              categoryStats.map((stat) => (
                <div key={stat.name} className="glass rounded-2xl p-4">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium text-white">{stat.name}</p>
                      <p className="text-xs text-slate-400">{stat.count} פרומפטים</p>
                    </div>
                    <div className="text-sm font-semibold text-violet-200">
                      {stat.percentage}%
                    </div>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-white/8">
                    <div
                      className="h-full rounded-full bg-gradient-to-l from-violet-400 to-violet-600"
                      style={{ width: `${stat.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="min-h-[560px]">
          <PromptChatPanel
            title="יוצר פרומפט חדש"
            subtitle="תאר מה אתה צריך, והצ'אט יעזור לנסח פרומפט חדש מתוך הדאטה שלך."
            placeholder="לדוגמה: צור לי פרומפט לכתיבת פוסט מכירה בעברית..."
            emptyState="כתוב בקשה ליצירת פרומפט חדש, ונבנה אותה יחד."
            compact
          />
        </div>
      </section>
    </div>
  );
}
