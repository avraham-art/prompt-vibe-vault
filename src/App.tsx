import { useState } from 'react';
import { BarChart3, Library, Menu, MessageCircle, X, Zap } from 'lucide-react';
import { usePrompts } from './hooks/usePrompts';
import { PromptGrid } from './components/PromptGrid';
import { SyncButton } from './components/SyncButton';
import { ChatModal } from './components/ChatModal';
import { ErrorToast } from './components/ErrorToast';
import { Dashboard } from './components/Dashboard';
import { CookieBanner } from './components/CookieBanner';
import { PrivacyPolicy } from './pages/PrivacyPolicy';

function App() {
  const { prompts, loading, error, refetch } = usePrompts();
  const [chatOpen, setChatOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toastError, setToastError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<'library' | 'dashboard' | 'privacy'>('dashboard');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

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
              <button
                type="button"
                onClick={goToLibrary}
                className={`inline-flex min-h-[36px] items-center gap-2 rounded-xl px-4 text-sm font-medium transition-all ${
                  currentPage === 'library'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Library size={15} />
                ספרייה 📚
              </button>
              <button
                type="button"
                onClick={goToDashboard}
                className={`inline-flex min-h-[36px] items-center gap-2 rounded-xl px-4 text-sm font-medium transition-all ${
                  currentPage === 'dashboard'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <BarChart3 size={15} />
                דשבורד 📊
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
                className={`inline-flex min-h-[48px] items-center gap-3 rounded-2xl px-5 text-base font-medium transition-all ${
                  currentPage === 'library'
                    ? 'bg-violet-600 text-white'
                    : 'glass text-slate-300 hover:text-white'
                }`}
              >
                <Library size={18} />
                ספרייה 📚
              </button>
              <button
                type="button"
                onClick={() => { goToDashboard(); setMenuOpen(false); }}
                className={`inline-flex min-h-[48px] items-center gap-3 rounded-2xl px-5 text-base font-medium transition-all ${
                  currentPage === 'dashboard'
                    ? 'bg-violet-600 text-white'
                    : 'glass text-slate-300 hover:text-white'
                }`}
              >
                <BarChart3 size={18} />
                דשבורד 📊
              </button>
              <div className="pt-1">
                <SyncButton onSync={() => { handleSyncDone(); setMenuOpen(false); }} onError={handleError} />
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {error && !loading && (
          <div className="mb-6 glass border-red-500/30 rounded-xl px-4 py-3 text-red-300 text-sm">
            {error} —{' '}
            <button onClick={refetch} className="underline hover:no-underline">
              נסה שוב
            </button>
          </div>
        )}

        {currentPage === 'library' ? (
          <>
            <div className="mb-6 flex items-center justify-between">
              <p className="text-slate-400 text-sm">
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
        ) : (
          <Dashboard
            prompts={prompts}
            loading={loading}
            setSelectedCategory={setSelectedCategory}
            setCurrentPage={setCurrentPage}
          />
        )}
      </main>

      <footer className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 sm:pb-28">
        <div className="glass rounded-2xl px-4 py-3 text-center text-sm text-slate-400">
          <button
            type="button"
            onClick={goToPrivacyPolicy}
            className="font-medium text-slate-200 transition-colors hover:text-white"
          >
            מדיניות פרטיות
          </button>
        </div>
      </footer>

      {/* Chat Modal */}
      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}

      {/* Error Toast */}
      {toastError && (
        <ErrorToast message={toastError} onClose={() => setToastError(null)} />
      )}

      <CookieBanner />
    </div>
  );
}

export default App;
