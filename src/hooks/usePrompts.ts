import { useState, useEffect, useCallback } from 'react';
import type { Prompt } from '../types';
import { fetchPrompts } from '../lib/api';

interface UsePromptsResult {
  prompts: Prompt[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function usePrompts(): UsePromptsResult {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchPrompts();
      setPrompts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'שגיאה לא ידועה');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return { prompts, loading, error, refetch: load };
}
