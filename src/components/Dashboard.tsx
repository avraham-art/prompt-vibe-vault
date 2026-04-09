import { useState } from 'react';
import { Sparkles, ChevronDown, BookOpen, Mail } from 'lucide-react';
import type { Prompt } from '../types';
import { PromptChatPanel } from './PromptChatPanel';
import { fetchGuide } from '../lib/api';

const GUIDE_TOPICS = [
  'מבנה פרומפט בסיסי',
  'כתיבת Role מושלם',
  'הגדרת Context',
  'דוגמאות בפרומפט',
  'טיפים מתקדמים',
];

interface DashboardProps {
  prompts: Prompt[];
  loading: boolean;
  setSelectedCategory: (category: string | null) => void;
  setCurrentPage: (page: 'library' | 'dashboard') => void;
}

interface CategoryStat {
  name: string;
  count: number;
}

export function Dashboard({ prompts, loading, setSelectedCategory, setCurrentPage }: DashboardProps) {
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const [guideContent, setGuideContent] = useState<Record<string, string>>({});
  const [guideLoading, setGuideLoading] = useState<Record<string, boolean>>({});

  const totalPrompts = prompts.length;

  const categoryStats: CategoryStat[] = Object.entries(
    prompts.reduce<Record<string, number>>((acc, prompt) => {
      const category = prompt.category?.trim() || 'ללא קטגוריה';
      acc[category] = (acc[category] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('library');
  };

  const handleTopicToggle = async (topic: string) => {
    if (openTopic === topic) {
      setOpenTopic(null);
      return;
    }
    setOpenTopic(topic);
    if (!guideContent[topic] && !guideLoading[topic]) {
      setGuideLoading((prev) => ({ ...prev, [topic]: true }));
      try {
        const result = await fetchGuide(topic);
        setGuideContent((prev) => ({ ...prev, [topic]: result }));
      } catch {
        setGuideContent((prev) => ({ ...prev, [topic]: 'לא הצלחנו לטעון את המדריך. נסה שוב.' }));
      } finally {
        setGuideLoading((prev) => ({ ...prev, [topic]: false }));
      }
    }
  };

  /* ── Shared sections (state lives in parent, no duplicate fetches) ── */

  const heroSection = (
    <div className="glass-dark relative overflow-hidden rounded-3xl border border-white/10 p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_50%)]" />
      <div className="relative">
        <p className="text-base text-violet-200">סך כל הפרומפטים שלך</p>
        <h2 className="mt-2 text-6xl font-bold text-white">{loading ? '…' : totalPrompts}</h2>
        <p className="mt-2 text-base text-slate-400">פרומפטים שמורים בספרייה</p>
        <button
          type="button"
          onClick={() => setCurrentPage('library')}
          className="mt-6 inline-flex min-h-[48px] items-center gap-2 rounded-2xl bg-violet-600 px-7 text-base font-semibold text-white shadow-lg shadow-violet-900/40 transition hover:bg-violet-500"
        >
          <Sparkles size={18} />
          ✨ צור פרומפט חדש
        </button>
      </div>
    </div>
  );

  const categoryChips = (
    <div>
      <p className="mb-3 text-base font-medium text-slate-400">סנן לפי קטגוריה</p>
      <div
        className="flex gap-2.5 overflow-x-auto pb-1"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {loading
          ? Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="skeleton h-11 w-28 flex-shrink-0 rounded-2xl" />
            ))
          : categoryStats.map((stat) => (
              <button
                key={stat.name}
                type="button"
                onClick={() => handleCategoryClick(stat.name)}
                className="inline-flex min-h-[44px] flex-shrink-0 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-base text-white transition hover:border-violet-500/40 hover:bg-violet-500/10"
              >
                <span>{stat.name}</span>
                <span className="rounded-full bg-violet-500/20 px-2 py-0.5 text-sm text-violet-300">
                  {stat.count}
                </span>
              </button>
            ))}
      </div>
    </div>
  );

  const guidesAccordion = (
    <div className="glass rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
          <BookOpen size={18} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">מדריכי כתיבת פרומפטים</h3>
          <p className="mt-0.5 text-sm text-slate-400">לחץ על נושא לקבלת מדריך מ-Gemini AI</p>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {GUIDE_TOPICS.map((topic) => (
          <div key={topic}>
            <button
              type="button"
              onClick={() => handleTopicToggle(topic)}
              className="flex min-h-[52px] w-full items-center justify-between gap-3 py-3 text-right transition hover:text-violet-300"
            >
              <span className="text-base font-medium text-white">{topic}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                  openTopic === topic ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openTopic === topic ? 'max-h-[600px] pb-5' : 'max-h-0'
              }`}
            >
              {guideLoading[topic] ? (
                <div className="flex flex-col items-center justify-center gap-3 py-8">
                  <span className="text-base text-violet-400/80">Gemini מכין מדריך... ✨</span>
                  <div className="h-1 w-32 overflow-hidden rounded-full bg-violet-500/20">
                    <div className="h-full w-1/2 animate-pulse rounded-full bg-violet-400/50" />
                  </div>
                </div>
              ) : (
                <p className="whitespace-pre-wrap text-base leading-relaxed text-slate-300">
                  {guideContent[topic]}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const newsletterCard = (
    <div className="glass rounded-3xl p-5 sm:p-6">
      <div className="mb-5 flex items-start gap-3">
        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
          <Mail size={18} />
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">טיפים ישירות למייל</h3>
          <p className="mt-1 text-base text-slate-400">עדכונים, שיטות ודוגמאות שאוצרו במיוחד</p>
        </div>
      </div>
      <div className="flex gap-2.5">
        <input
          type="email"
          placeholder="your@email.com"
          dir="ltr"
          className="min-h-[48px] flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-500 focus:border-violet-500/50 focus:outline-none"
        />
        <button
          type="button"
          className="min-h-[48px] flex-shrink-0 rounded-2xl bg-violet-600 px-6 text-base font-semibold text-white transition hover:bg-violet-500"
        >
          הצטרף
        </button>
      </div>
    </div>
  );

  const chatPanel = (
    <PromptChatPanel
      title="יוצר פרומפט חדש"
      subtitle="תאר מה אתה צריך, והצ'אט יעזור לנסח פרומפט חדש מתוך הדאטה שלך."
      placeholder="לדוגמה: צור לי פרומפט לכתיבת פוסט מכירה בעברית..."
      emptyState="כתוב בקשה ליצירת פרומפט חדש, ונבנה אותה יחד."
      compact
    />
  );

  return (
    <>
      {/* ── Mobile (< md) ── */}
      <div className="flex flex-col gap-5 md:hidden">
        {heroSection}
        {categoryChips}
        {chatPanel}
        {guidesAccordion}
        {newsletterCard}
      </div>

      {/* ── Desktop (>= md): RTL grid — right col 60%, left col 40% ── */}
      <div className="hidden md:grid md:grid-cols-[3fr_2fr] md:gap-6">
        {/* Right column (60%) */}
        <div className="flex flex-col gap-5">
          {heroSection}
          {categoryChips}
          {guidesAccordion}
          {newsletterCard}
        </div>
        {/* Left column (40%) */}
        <div className="min-h-[600px]">{chatPanel}</div>
      </div>
    </>
  );
}
