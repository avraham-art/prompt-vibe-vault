import { useState } from 'react';
import { BarChart3, Library, MessageCircle, Zap } from 'lucide-react';
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={goToDashboard}
            className="flex items-center gap-2.5 rounded-2xl px-2 py-1 text-right transition-all hover:bg-white/5"
          >
            <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-none">PromptVibe Vault</h1>
              <p className="text-slate-500 text-xs mt-0.5">ניהול פרומפטים</p>
            </div>
          </button>

          <div className="flex items-center gap-2">
            <nav className="glass rounded-2xl p-1 flex items-center gap-1">
              <button
                onClick={goToLibrary}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                  currentPage === 'library'
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-900/30'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <Library size={15} />
                ספרייה 📚
              </button>
              <button
                onClick={goToDashboard}
                className={`inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-all ${
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
                onClick={() => setChatOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:border-violet-500/40 text-slate-300 hover:text-white text-sm font-medium transition-all"
              >
                <MessageCircle size={15} />
                צ'אט
              </button>
            )}
          </div>
        </div>
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
