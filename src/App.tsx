import { useState } from 'react';
import { BarChart3, BookOpen, ChevronRight, Library, Menu, MessageCircle, X, Zap } from 'lucide-react';
import { usePrompts } from './hooks/usePrompts';
import { PromptGrid } from './components/PromptGrid';
import { SyncButton } from './components/SyncButton';
import { ChatModal } from './components/ChatModal';
import { ErrorToast } from './components/ErrorToast';
import { Dashboard } from './components/Dashboard';
import { CookieBanner } from './components/CookieBanner';
import { NewsletterFooter } from './components/NewsletterFooter';
import { AccessibilityWidget } from './components/AccessibilityWidget';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';
import { ArticlesPage } from './pages/ArticlesPage';
import HistoryOfPrompts from './pages/HistoryOfPrompts';
import AnatomyOfPerfectPrompt from './pages/AnatomyOfPerfectPrompt';
import CoreTechniques from './pages/CoreTechniques';
import VisualPrompts from './pages/VisualPrompts';
import PromptChaining from './pages/PromptChaining';
import MachinePsychology from './pages/MachinePsychology';
import PromptToolkit from './pages/PromptToolkit';
import BusinessPrompts from './pages/BusinessPrompts';
import FuturePrompts from './pages/FuturePrompts';
import RoleplayPersona from './pages/RoleplayPersona';

type Page = 'library' | 'dashboard' | 'privacy' | 'terms' | 'articles' | 'article-detail';

function App() {
  const { prompts, loading, error, refetch } = usePrompts();
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastError, setToastError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [articleId, setArticleId] = useState<string | null>(null);

  const handleError = (msg: string) => setToastError(msg);
  const handleSyncDone = () => refetch();
  const goToLibrary = () => setCurrentPage('library');
  const goToDashboard = () => {
    setSelectedCategory(null);
    setCurrentPage('dashboard');
  };
  const goToPrivacyPolicy = () => {
    setChatOpen(false);
    setCurrentPage('privacy');
  };
  const goToTerms = () => {
    setChatOpen(false);
    setCurrentPage('terms');
  };
  const goToArticles = () => setCurrentPage('articles');
  const goToArticle = (id: string) => {
    setArticleId(id);
    setCurrentPage('article-detail');
  };
  const openCookiePreferences = () => {
    window.dispatchEvent(new Event('promptvibe:open-cookie-settings'));
  };

  const isArticlePage = currentPage === 'articles' || currentPage === 'article-detail';

  const navBtnClass = (active: boolean) =>
    `inline-flex min-h-[36px] items-center gap-2 rounded-xl px-4 text-sm font-medium transition-all ${
      active
        ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
        : 'text-slate-300 hover:text-white'
    }`;

  const mobileNavBtnClass = (active: boolean) =>
    `inline-flex min-h-[48px] items-center gap-3 rounded-2xl px-5 text-base font-medium transition-all ${
      active ? 'bg-violet-600 text-white' : 'glass text-slate-300 hover:text-white'
    }`;

  return (
    <div
      dir="rtl"
      className="min-h-screen"
      style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f0f1a 100%)' }}
    >
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0a0a0f]">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
          {/* Logo */}
          <button
            type="button"
            onClick={goToDashboard}
            className="flex items-center gap-2.5 rounded-2xl px-2 py-1 text-right transition-all hover:bg-white/5"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-violet-600">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <h1 className="text-base font-bold leading-none text-white">PromptVibe Vault</h1>
              <p className="mt-0.5 text-xs text-slate-500">ניהול פרומפטים</p>
            </div>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-2 md:flex">
            <nav className="glass flex items-center gap-1 rounded-2xl p-1">
              <button type="button" onClick={goToLibrary} className={navBtnClass(currentPage === 'library')}>
                <Library size={15} />
                ספרייה 📚
              </button>
              <button type="button" onClick={goToDashboard} className={navBtnClass(currentPage === 'dashboard')}>
                <BarChart3 size={15} />
                דשבורד 📊
              </button>
              <button type="button" onClick={goToArticles} className={navBtnClass(isArticlePage)}>
                <BookOpen size={15} />
                מאמרים ✍️
              </button>
            </nav>
            <SyncButton onSync={handleSyncDone} onError={handleError} />
            {currentPage === 'library' && (
              <button
                type="button"
                onClick={() => setChatOpen(true)}
                className="glass inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-slate-300 transition-all hover:border-violet-500/40 hover:text-white"
              >
                <MessageCircle size={15} />
                צ'אט
              </button>
            )}
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="glass flex min-h-[44px] min-w-[44px] items-center justify-center rounded-2xl text-white transition hover:border-violet-500/40 md:hidden"
            aria-label={menuOpen ? 'סגור תפריט' : 'פתח תפריט'}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {menuOpen && (
          <div className="border-t border-white/10 px-4 pb-4 pt-3 md:hidden">
            <div className="flex flex-col gap-2">
              <button
                type="button"
                onClick={() => { goToLibrary(); setMenuOpen(false); }}
                className={mobileNavBtnClass(currentPage === 'library')}
              >
                <Library size={18} />
                ספרייה 📚
              </button>
              <button
                type="button"
                onClick={() => { goToDashboard(); setMenuOpen(false); }}
                className={mobileNavBtnClass(currentPage === 'dashboard')}
              >
                <BarChart3 size={18} />
                דשבורד 📊
              </button>
              <button
                type="button"
                onClick={() => { goToArticles(); setMenuOpen(false); }}
                className={mobileNavBtnClass(isArticlePage)}
              >
                <BookOpen size={18} />
                מאמרים ✍️
              </button>
              <div className="pt-1">
                <SyncButton onSync={() => { handleSyncDone(); setMenuOpen(false); }} onError={handleError} />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        {error && !loading && (
          <div className="mb-6 glass rounded-xl border-red-500/30 px-4 py-3 text-sm text-red-300">
            {error} —{' '}
            <button onClick={refetch} className="underline hover:no-underline">
              נסה שוב
            </button>
          </div>
        )}

        {currentPage === 'library' ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-slate-400">
                {loading ? 'טוען...' : `${prompts.length} פרומפטים`}
              </p>
            </div>
            <PromptGrid
              prompts={prompts}
              loading={loading}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </>
        ) : currentPage === 'privacy' ? (
          <PrivacyPolicy />
        ) : currentPage === 'terms' ? (
          <TermsOfUse />
        ) : currentPage === 'articles' ? (
          <ArticlesPage onSelectArticle={goToArticle} />
        ) : currentPage === 'article-detail' ? (
          <div>
            {/* Back button */}
            <button
              type="button"
              onClick={goToArticles}
              className="glass mb-6 inline-flex min-h-[44px] items-center gap-2 rounded-2xl px-5 text-base font-medium text-slate-300 transition hover:border-violet-500/40 hover:text-white"
            >
              <ChevronRight size={18} />
              חזרה למאמרים
            </button>
            {articleId === 'history-of-prompts' ? <HistoryOfPrompts />
              : articleId === 'anatomy-of-perfect-prompt' ? <AnatomyOfPerfectPrompt />
              : articleId === 'core-techniques' ? <CoreTechniques />
              : articleId === 'visual-prompts' ? <VisualPrompts />
              : articleId === 'prompt-chaining' ? <PromptChaining />
              : articleId === 'machine-psychology' ? <MachinePsychology />
              : articleId === 'prompt-toolkit' ? <PromptToolkit />
              : articleId === 'business-prompts' ? <BusinessPrompts />
              : articleId === 'future-prompts' ? <FuturePrompts />
              : articleId === 'roleplay-persona' ? <RoleplayPersona />
              : null
            }
          </div>
        ) : (
          <Dashboard
            prompts={prompts}
            loading={loading}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={goToLibrary}
            onGoToArticle={goToArticle}
            onGoToArticles={goToArticles}
          />
        )}
      </main>

      {currentPage !== 'dashboard' && <NewsletterFooter />}

      <footer className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 sm:pb-28">
        <div className="glass flex flex-wrap items-center justify-center gap-x-5 gap-y-2 rounded-2xl px-4 py-3 text-center text-sm text-slate-400">
          <button
            type="button"
            onClick={goToPrivacyPolicy}
            className="font-medium text-slate-200 transition-colors hover:text-white"
          >
            מדיניות פרטיות
          </button>
          <button
            type="button"
            onClick={goToTerms}
            className="font-medium text-slate-200 transition-colors hover:text-white"
          >
            תנאי שימוש
          </button>
          <button
            type="button"
            onClick={openCookiePreferences}
            className="font-medium text-slate-200 transition-colors hover:text-white"
          >
            העדפות עוגיות
          </button>
        </div>
      </footer>

      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}

      {toastError && (
        <ErrorToast message={toastError} onClose={() => setToastError(null)} />
      )}

      <AccessibilityWidget />
      <CookieBanner onPrivacyClick={goToPrivacyPolicy} onTermsClick={goToTerms} />
    </div>
  );
}

export default App;
