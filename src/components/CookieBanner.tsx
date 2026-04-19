import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'promptvibe-cookie-consent';
const OPEN_COOKIE_SETTINGS_EVENT = 'promptvibe:open-cookie-settings';

interface CookieBannerProps {
  onPrivacyClick: () => void;
  onTermsClick: () => void;
}

export function CookieBanner({ onPrivacyClick, onTermsClick }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }

    const openSettings = () => setIsVisible(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);

    return () => {
      window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, openSettings);
    };
  }, []);

  const saveConsent = (value: 'accepted' | 'rejected') => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, value);
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div dir="rtl" className="fixed inset-x-0 bottom-0 z-50 px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-4xl glass-dark rounded-[1.75rem] border border-white/15 px-5 py-4 shadow-2xl shadow-black/30">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="text-right">
            <h2 className="text-base font-semibold text-white">העדפות עוגיות</h2>
            <p className="text-sm leading-6 text-slate-200">
              האתר משתמש באחסון מקומי ועוגיות חיוניות לשמירת העדפות כמו אישור עוגיות והגדרות
              תצוגה. אם יתווספו כלי מדידה בעתיד, הם יופעלו רק לאחר אישור.
            </p>
            <div className="mt-2 flex flex-wrap gap-3 text-sm">
              <button
                type="button"
                onClick={onPrivacyClick}
                className="font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline"
              >
                מדיניות פרטיות
              </button>
              <button
                type="button"
                onClick={onTermsClick}
                className="font-medium text-violet-300 underline-offset-4 transition hover:text-violet-200 hover:underline"
              >
                תנאי שימוש
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => saveConsent('rejected')}
              className="min-h-[44px] rounded-xl border border-white/10 bg-white/5 px-4 text-sm font-medium text-slate-200 transition-all hover:border-violet-500/40 hover:text-white"
            >
              דחייה
            </button>
            <button
              type="button"
              onClick={() => saveConsent('accepted')}
              className="min-h-[44px] rounded-xl bg-violet-600 px-4 text-sm font-medium text-white shadow-lg shadow-violet-950/30 transition-all hover:bg-violet-500"
            >
              אישור
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
