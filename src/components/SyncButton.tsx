import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import { syncPrompts } from '../lib/api';

interface SyncButtonProps {
  onSync?: () => void;
  onError?: (msg: string) => void;
}

export function SyncButton({ onSync, onError }: SyncButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleSync = async () => {
    setLoading(true);
    try {
      await syncPrompts();
      onSync?.();
    } catch (err) {
      onError?.(err instanceof Error ? err.message : 'שגיאה בסנכרון');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSync}
      disabled={loading}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
    >
      <RefreshCw size={15} className={loading ? 'animate-spin' : ''} />
      {loading ? 'מסנכרן...' : 'סנכרון'}
    </button>
  );
}
