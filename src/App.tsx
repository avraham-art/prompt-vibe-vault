import { useState } from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import { usePrompts } from './hooks/usePrompts';
import { PromptGrid } from './components/PromptGrid';
import { SyncButton } from './components/SyncButton';
import { ChatModal } from './components/ChatModal';
import { ErrorToast } from './components/ErrorToast';

function App() {
  const { prompts, loading, error, refetch } = usePrompts();
  const [chatOpen, setChatOpen] = useState(false);
  const [toastError, setToastError] = useState<string | null>(null);

  const handleError = (msg: string) => setToastError(msg);
  const handleSyncDone = () => refetch();

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #0f0f1a 0%, #1a0a2e 50%, #0f0f1a 100%)' }}>
      {/* Header */}
      <header className="glass-dark sticky top-0 z-40 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-violet-600 flex items-center justify-center">
              <Zap size={16} className="text-white" />
            </div>
            <div>
              <h1 className="text-white font-bold text-base leading-none">PromptVibe Vault</h1>
              <p className="text-slate-500 text-xs mt-0.5">ניהול פרומפטים</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <SyncButton onSync={handleSyncDone} onError={handleError} />
            <button
              onClick={() => setChatOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:border-violet-500/40 text-slate-300 hover:text-white text-sm font-medium transition-all"
            >
              <MessageCircle size={15} />
              צ'אט
            </button>
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

        <div className="mb-6 flex items-center justify-between">
          <p className="text-slate-400 text-sm">
            {loading ? 'טוען...' : `${prompts.length} פרומפטים`}
          </p>
        </div>

        <PromptGrid prompts={prompts} loading={loading} />
      </main>

      {/* Chat Modal */}
      {chatOpen && <ChatModal onClose={() => setChatOpen(false)} />}

      {/* Error Toast */}
      {toastError && (
        <ErrorToast message={toastError} onClose={() => setToastError(null)} />
      )}
    </div>
  );
}

export default App;
