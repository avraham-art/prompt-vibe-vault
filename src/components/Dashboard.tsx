import { useState } from 'react';
import type { FormEvent } from 'react';
import { Sparkles, ChevronDown, BookOpen, Copy, Check, Clock } from 'lucide-react';
import type { Prompt } from '../types';
import { PromptChatPanel } from './PromptChatPanel';
import { ARTICLES } from '../data/articles';
import { subscribeToNewsletter } from '../lib/api';

const GUIDES = [
  {
    title: 'מבנה פרומפט בסיסי',
    content:
      'כל פרומפט טוב מורכב מ-3 חלקים: תפקיד (Persona), משימה (Task), והקשר (Context). הגדר תחילה מי ה-AI, מה אתה רוצה ממנו, ולמה. לדוגמה: "פעל כמומחה שיווק. כתוב 3 כותרות לפוסט ברשתות חברתיות על מוצר X. הקהל הוא בעלי עסקים קטנים."',
  },
  {
    title: 'כתיבת Role מושלם',
    content:
      'ה-Role (תפקיד) הוא ה"מסגרת החשיבה" של ה-AI. ככל שתהיה ספציפי יותר, כך התוצאה תהיה מדויקת יותר. במקום "מומחה שיווק" — כתוב "מומחה שיווק דיגיטלי עם 10 שנות ניסיון בשיווק B2B לחברות SaaS". הספציפיות היא המפתח.',
  },
  {
    title: 'הגדרת Context',
    content:
      'ההקשר (Context) הוא המידע הרקע שה-AI צריך כדי לתת תשובה מדויקת. כלול: מי קהל היעד, מה המטרה הסופית, ואילו מגבלות קיימות. דוגמה טובה: "הקהל הם בעלי עסקים קטנים בישראל, גיל 35-55, שאינם בקיאים בטכנולוגיה."',
  },
  {
    title: 'דוגמאות בפרומפט',
    content:
      'שימוש בדוגמאות (Few-Shot) הוא אחד הכלים החזקים ביותר. תן ל-AI דוגמה אחת או שתיים לפלט הרצוי. לדוגמה: "כתוב פוסט בסגנון הזה: [הדבק פוסט לדוגמה]". הדוגמה מכייל את ה-AI לטון, לאורך ולמבנה שאתה מחפש.',
  },
  {
    title: 'טיפים מתקדמים',
    content:
      '3 טיפים שישדרגו כל פרומפט: 1) הגדר פורמט פלט מפורש (טבלה, רשימה, JSON). 2) הוסף אילוצים ברורים ("מקסימום 100 מילים", "אל תשתמש במילה X"). 3) בקש מה-AI להסביר את החשיבה שלו לפני התשובה הסופית — זה משפר משמעותית את דיוק התוצאה.',
  },
];

type NewsletterStatus = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface DashboardProps {
  prompts: Prompt[];
  loading: boolean;
  setSelectedCategory: (category: string | null) => void;
  setCurrentPage: (page: 'library') => void;
  onGoToArticle: (id: string) => void;
  onGoToArticles: () => void;
}

interface CategoryStat {
  name: string;
  count: number;
}

function getTagSize(count: number, maxCount: number): string {
  const ratio = maxCount > 0 ? count / maxCount : 0;
  if (ratio >= 0.75) return 'text-xl';
  if (ratio >= 0.5) return 'text-lg';
  if (ratio >= 0.25) return 'text-base';
  return 'text-sm';
}

export function Dashboard({ prompts, loading, setSelectedCategory, setCurrentPage, onGoToArticle, onGoToArticles }: DashboardProps) {
  const [openTopic, setOpenTopic] = useState<string | null>(null);
  const [copiedGuide, setCopiedGuide] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<NewsletterStatus>('idle');
  const [newsletterMessage, setNewsletterMessage] = useState('');

  const totalPrompts = prompts.length;
  const trimmedNewsletterEmail = newsletterEmail.trim();
  const isNewsletterEmailValid = EMAIL_PATTERN.test(trimmedNewsletterEmail);

  const categoryStats: CategoryStat[] = Object.entries(
    prompts.reduce<Record<string, number>>((acc, prompt) => {
      const category = prompt.category?.trim() || 'ללא קטגוריה';
      acc[category] = (acc[category] ?? 0) + 1;
      return acc;
    }, {}),
  )
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count);

  const maxCount = categoryStats[0]?.count ?? 1;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage('library');
  };

  const handleTopicToggle = (title: string) => {
    setOpenTopic((prev) => (prev === title ? null : title));
  };

  const handleCopy = async (title: string, content: string) => {
    await navigator.clipboard.writeText(content);
    setCopiedGuide(title);
    setTimeout(() => setCopiedGuide(null), 2000);
  };

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isNewsletterEmailValid) {
      setNewsletterStatus('error');
      setNewsletterMessage('נא להזין כתובת אימייל תקינה');
      return;
    }

    setNewsletterStatus('loading');
    setNewsletterMessage('');

    try {
      await subscribeToNewsletter(trimmedNewsletterEmail);
      setNewsletterStatus('success');
      setNewsletterMessage('נרשמת בהצלחה! 🎉');
      setNewsletterEmail('');
    } catch (error) {
      console.error('Dashboard newsletter signup failed:', error);
      setNewsletterStatus('error');
      setNewsletterMessage('משהו השתבש. נסו שוב בעוד רגע');
    }
  };

  /* ── Shared sections ── */

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

  const categoryCloud = (
    <div>
      <p className="mb-3 text-base font-medium text-slate-400">סנן לפי קטגוריה</p>
      <div className="flex flex-wrap gap-2.5">
        {loading
          ? Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="skeleton h-10 w-24 rounded-2xl" />
            ))
          : categoryStats.map((stat) => (
              <button
                key={stat.name}
                type="button"
                onClick={() => handleCategoryClick(stat.name)}
                className={`inline-flex min-h-[44px] items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2 font-medium text-white transition hover:border-violet-500/40 hover:bg-violet-500/10 ${getTagSize(stat.count, maxCount)}`}
              >
                {stat.name}
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
          <p className="mt-0.5 text-sm text-slate-400">לחץ על נושא לקריאה</p>
        </div>
      </div>
      <div className="flex flex-col divide-y divide-white/5">
        {GUIDES.map((guide) => (
          <div key={guide.title}>
            <button
              type="button"
              onClick={() => handleTopicToggle(guide.title)}
              className="flex min-h-[52px] w-full items-center justify-between gap-3 py-3 text-right transition hover:text-violet-300"
            >
              <span className="text-base font-medium text-white">{guide.title}</span>
              <ChevronDown
                size={18}
                className={`flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                  openTopic === guide.title ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openTopic === guide.title ? 'max-h-[400px] pb-5' : 'max-h-0'
              }`}
            >
              <p className="mb-4 whitespace-pre-wrap text-base leading-relaxed text-slate-300">
                {guide.content}
              </p>
              <button
                type="button"
                onClick={() => handleCopy(guide.title, guide.content)}
                className="inline-flex min-h-[36px] items-center gap-2 rounded-xl bg-violet-500/15 px-4 text-sm font-medium text-violet-300 transition hover:bg-violet-500/25"
              >
                {copiedGuide === guide.title ? (
                  <>
                    <Check size={14} />
                    הועתק!
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    העתק
                  </>
                )}
              </button>
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
          <span className="text-lg" aria-hidden="true">📧</span>
        </div>
        <div>
          <h3 className="text-base font-semibold text-white">עדכונים שבועיים על עולם הפרומפטים</h3>
          <p className="mt-1 text-base text-slate-400">קבלו טיפים, מגמות וטכניקות חדשות ישירות למייל</p>
        </div>
      </div>

      <form onSubmit={handleNewsletterSubmit} noValidate>
        <div className="flex flex-col gap-2.5 sm:flex-row-reverse">
          <label className="sr-only" htmlFor="dashboard-newsletter-email">
            אימייל
          </label>
          <input
            id="dashboard-newsletter-email"
            type="email"
            inputMode="email"
            autoComplete="email"
            value={newsletterEmail}
            onChange={(event) => {
              setNewsletterEmail(event.target.value);
              if (newsletterStatus !== 'loading') {
                setNewsletterStatus('idle');
                setNewsletterMessage('');
              }
            }}
            disabled={newsletterStatus === 'loading'}
            placeholder="your@email.com"
            dir="ltr"
            aria-invalid={newsletterStatus === 'error' && !isNewsletterEmailValid}
            aria-describedby={newsletterMessage ? 'dashboard-newsletter-message' : undefined}
            className="min-h-[48px] flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 text-base text-white placeholder:text-slate-500 transition focus:border-violet-500/50 focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
          />
          <button
            type="submit"
            disabled={newsletterStatus === 'loading'}
            className="min-h-[48px] flex-shrink-0 rounded-2xl bg-violet-600 px-6 text-base font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {newsletterStatus === 'loading' ? 'שולח...' : 'הצטרף'}
          </button>
        </div>

        {newsletterMessage && (
          <p
            id="dashboard-newsletter-message"
            className={`mt-3 text-sm ${newsletterStatus === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
            role={newsletterStatus === 'error' ? 'alert' : 'status'}
          >
            {newsletterMessage}
          </p>
        )}
      </form>
    </div>
  );

  const articlesGallery = (
    <div>
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/20 text-violet-300">
            <BookOpen size={17} />
          </div>
          <h3 className="text-base font-semibold text-white">מאמרים אחרונים</h3>
        </div>
        <button
          type="button"
          onClick={onGoToArticles}
          className="text-sm font-medium text-violet-400 transition hover:text-violet-300"
        >
          כל המאמרים ←
        </button>
      </div>

      {/* Mixed grid: big card + small card */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-[3fr_2fr]">
        {/* Featured big card */}
        {ARTICLES[0] && (
          <button
            type="button"
            onClick={() => onGoToArticle(ARTICLES[0].id)}
            className="glass group relative overflow-hidden rounded-3xl text-right transition hover:border-violet-500/40"
          >
            <div className="relative h-48 w-full overflow-hidden sm:h-64">
              <img
                src={ARTICLES[0].image}
                alt={ARTICLES[0].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-0 w-full p-4">
                <span className="mb-2 inline-block rounded-full bg-violet-600/90 px-2.5 py-0.5 text-xs font-medium text-white">
                  {ARTICLES[0].category}
                </span>
                <h4 className="text-base font-semibold leading-snug text-white">
                  {ARTICLES[0].title}
                </h4>
                <div className="mt-1.5 flex items-center gap-1.5 text-xs text-slate-300">
                  <Clock size={11} />
                  {ARTICLES[0].readTime} קריאה
                </div>
              </div>
            </div>
          </button>
        )}

        {/* Small card */}
        {ARTICLES[1] && (
          <button
            type="button"
            onClick={() => onGoToArticle(ARTICLES[1].id)}
            className="glass group flex flex-col overflow-hidden rounded-3xl text-right transition hover:border-violet-500/40"
          >
            <div className="relative h-36 w-full overflow-hidden">
              <img
                src={ARTICLES[1].image}
                alt={ARTICLES[1].title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-2 p-4">
              <span className="inline-block w-fit rounded-full bg-violet-600/70 px-2.5 py-0.5 text-xs font-medium text-white">
                {ARTICLES[1].category}
              </span>
              <h4 className="text-sm font-semibold leading-snug text-white group-hover:text-violet-200 transition-colors">
                {ARTICLES[1].title}
              </h4>
              <p className="text-xs leading-relaxed text-slate-400 line-clamp-2">
                {ARTICLES[1].description}
              </p>
              <div className="mt-auto flex items-center justify-between gap-2 pt-1">
                <div className="inline-flex items-center gap-1 text-xs text-slate-500">
                  <Clock size={11} />
                  {ARTICLES[1].readTime}
                </div>
                <span className="text-xs font-medium text-violet-400 group-hover:text-violet-300 transition-colors">
                  קרא עוד ←
                </span>
              </div>
            </div>
          </button>
        )}
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
        {categoryCloud}
        {chatPanel}
        {guidesAccordion}
        {articlesGallery}
        {newsletterCard}
      </div>

      {/* ── Desktop (>= md): RTL grid — right col 60%, left col 40% ── */}
      <div className="hidden md:grid md:grid-cols-[3fr_2fr] md:gap-6">
        {/* Right column (60%) */}
        <div className="flex flex-col gap-5">
          {heroSection}
          {categoryCloud}
          {guidesAccordion}
          {articlesGallery}
          {newsletterCard}
        </div>
        {/* Left column (40%) */}
        <div className="min-h-[600px]">{chatPanel}</div>
      </div>
    </>
  );
}
