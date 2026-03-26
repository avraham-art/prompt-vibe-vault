import { useEffect, useState } from 'react';

const COOKIE_CONSENT_KEY = 'promptvibe-cookie-consent';

type CookieBannerProps = {
  onOpenPrivacyPolicy: () => void;
};

export function CookieBanner({ onOpenPrivacyPolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = window.localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    window.localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
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
            <p className="text-sm leading-6 text-slate-200">
              אתר זה משתמש בעוגיות לשיפור חוויית המשתמש. המשך גלישה מהווה הסכמה למדיניות
              הפרטיות שלנו.
            </p>
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center">
            <button
              type="button"
              onClick={onOpenPrivacyPolicy}
              className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-all hover:border-violet-400/40 hover:text-white"
            >
              למדיניות הפרטיות
            </button>
            <button
              type="button"
              onClick={handleAccept}
              className="rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white shadow-lg shadow-violet-950/30 transition-all hover:bg-violet-500"
            >
              אני מסכים/ה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
