import { useEffect, useId, useState } from 'react';
import { Eye, Link, RotateCcw, Type, X } from 'lucide-react';

const ACCESSIBILITY_KEY = 'promptvibe-accessibility-preferences';

interface AccessibilityPreferences {
  textSize: 'normal' | 'large' | 'larger';
  highContrast: boolean;
  highlightLinks: boolean;
}

const DEFAULT_PREFERENCES: AccessibilityPreferences = {
  textSize: 'normal',
  highContrast: false,
  highlightLinks: false,
};

function loadPreferences(): AccessibilityPreferences {
  const saved = window.localStorage.getItem(ACCESSIBILITY_KEY);

  if (!saved) {
    return DEFAULT_PREFERENCES;
  }

  try {
    return { ...DEFAULT_PREFERENCES, ...JSON.parse(saved) } as AccessibilityPreferences;
  } catch {
    return DEFAULT_PREFERENCES;
  }
}

function applyPreferences(preferences: AccessibilityPreferences) {
  const root = document.documentElement;

  root.classList.toggle('a11y-text-large', preferences.textSize === 'large');
  root.classList.toggle('a11y-text-larger', preferences.textSize === 'larger');
  root.classList.toggle('a11y-high-contrast', preferences.highContrast);
  root.classList.toggle('a11y-highlight-links', preferences.highlightLinks);
}

export function AccessibilityWidget() {
  const panelId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [preferences, setPreferences] = useState<AccessibilityPreferences>(DEFAULT_PREFERENCES);

  useEffect(() => {
    const savedPreferences = loadPreferences();
    setPreferences(savedPreferences);
    applyPreferences(savedPreferences);
  }, []);

  const updatePreferences = (nextPreferences: AccessibilityPreferences) => {
    setPreferences(nextPreferences);
    applyPreferences(nextPreferences);
    window.localStorage.setItem(ACCESSIBILITY_KEY, JSON.stringify(nextPreferences));
  };

  const resetPreferences = () => {
    updatePreferences(DEFAULT_PREFERENCES);
  };

  const increaseTextSize = () => {
    const nextSize = preferences.textSize === 'normal'
      ? 'large'
      : preferences.textSize === 'large'
        ? 'larger'
        : 'larger';

    updatePreferences({ ...preferences, textSize: nextSize });
  };

  const decreaseTextSize = () => {
    const nextSize = preferences.textSize === 'larger'
      ? 'large'
      : preferences.textSize === 'large'
        ? 'normal'
        : 'normal';

    updatePreferences({ ...preferences, textSize: nextSize });
  };

  return (
    <div dir="rtl" className="fixed bottom-5 right-4 z-50 sm:right-6">
      {isOpen && (
        <div
          id={panelId}
          className="mb-3 w-[min(22rem,calc(100vw-2rem))] glass-dark rounded-2xl border border-white/15 p-4 text-right shadow-2xl shadow-black/30"
        >
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold text-white">העדפות נגישות</h2>
              <p className="mt-1 text-sm leading-6 text-slate-300">
                התאמות תצוגה אישיות. הכלי אינו מחליף בדיקת נגישות מלאה.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="flex min-h-[40px] min-w-[40px] items-center justify-center rounded-xl text-slate-300 transition hover:bg-white/10 hover:text-white"
              aria-label="סגור העדפות נגישות"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid gap-2">
            <button
              type="button"
              onClick={increaseTextSize}
              className="flex min-h-[44px] items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-violet-500/40"
            >
              <span className="inline-flex items-center gap-2">
                <Type size={16} />
                הגדלת טקסט
              </span>
              <span className="text-xs text-slate-400">
                {preferences.textSize === 'normal' ? 'רגיל' : preferences.textSize === 'large' ? 'גדול' : 'גדול מאוד'}
              </span>
            </button>

            <button
              type="button"
              onClick={decreaseTextSize}
              className="flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-white transition hover:border-violet-500/40"
            >
              <Type size={16} />
              הקטנת טקסט
            </button>

            <button
              type="button"
              onClick={() => updatePreferences({ ...preferences, highContrast: !preferences.highContrast })}
              className={`flex min-h-[44px] items-center justify-between gap-3 rounded-xl border px-4 text-sm font-medium transition ${
                preferences.highContrast
                  ? 'border-cyan-300/60 bg-cyan-300/15 text-white'
                  : 'border-white/10 bg-white/5 text-white hover:border-violet-500/40'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Eye size={16} />
                ניגודיות גבוהה
              </span>
              <span className="text-xs text-slate-300">{preferences.highContrast ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              onClick={() => updatePreferences({ ...preferences, highlightLinks: !preferences.highlightLinks })}
              className={`flex min-h-[44px] items-center justify-between gap-3 rounded-xl border px-4 text-sm font-medium transition ${
                preferences.highlightLinks
                  ? 'border-cyan-300/60 bg-cyan-300/15 text-white'
                  : 'border-white/10 bg-white/5 text-white hover:border-violet-500/40'
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <Link size={16} />
                הדגשת קישורים וכפתורים
              </span>
              <span className="text-xs text-slate-300">{preferences.highlightLinks ? 'פעיל' : 'כבוי'}</span>
            </button>

            <button
              type="button"
              onClick={resetPreferences}
              className="flex min-h-[44px] items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition hover:border-violet-500/40 hover:text-white"
            >
              <RotateCcw size={16} />
              איפוס הגדרות
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex min-h-[52px] min-w-[52px] items-center justify-center rounded-2xl bg-violet-600 text-lg font-bold text-white shadow-2xl shadow-violet-950/40 transition hover:bg-violet-500"
        aria-label="פתח העדפות נגישות"
        aria-expanded={isOpen}
        aria-controls={panelId}
      >
        ♿
      </button>
    </div>
  );
}
