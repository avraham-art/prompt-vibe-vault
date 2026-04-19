import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Mail } from 'lucide-react';
import { subscribeToNewsletter } from '../lib/api';

type SubmitStatus = 'idle' | 'loading' | 'success' | 'error';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function NewsletterFooter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitStatus>('idle');
  const [message, setMessage] = useState('');

  const trimmedEmail = useMemo(() => email.trim(), [email]);
  const isValidEmail = EMAIL_PATTERN.test(trimmedEmail);
  const showValidationError = status === 'error' && !isValidEmail;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidEmail) {
      setStatus('error');
      setMessage('נא להזין כתובת אימייל תקינה');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      await subscribeToNewsletter(trimmedEmail);
      setStatus('success');
      setMessage('נרשמת בהצלחה! 🎉');
      setEmail('');
    } catch (error) {
      console.error('Newsletter signup failed:', error);
      setStatus('error');
      setMessage('משהו השתבש. נסו שוב בעוד רגע');
    }
  };

  return (
    <section dir="rtl" className="mx-auto max-w-6xl px-4 pb-4 sm:px-6">
      <div className="glass relative overflow-hidden rounded-2xl px-5 py-6 text-right shadow-2xl shadow-violet-950/20 sm:px-7">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-l from-transparent via-violet-400/60 to-transparent" />
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-violet-600/20 text-violet-200 ring-1 ring-violet-400/30">
              <Mail size={19} />
            </div>
            <h2 className="text-xl font-bold text-white sm:text-2xl">
              הצטרפו לניוזלטר השבועי שלנו על עולם הפרומפטים
            </h2>
          </div>

          <form onSubmit={handleSubmit} className="w-full max-w-md" noValidate>
            <div className="flex flex-col gap-3 sm:flex-row-reverse">
              <label className="sr-only" htmlFor="newsletter-email">
                אימייל
              </label>
              <input
                id="newsletter-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  if (status !== 'loading') {
                    setStatus('idle');
                    setMessage('');
                  }
                }}
                disabled={status === 'loading'}
                placeholder="האימייל שלך"
                aria-invalid={showValidationError}
                aria-describedby={message ? 'newsletter-message' : undefined}
                className="min-h-[44px] flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-right text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-violet-400/70 focus:bg-white/[0.13] disabled:cursor-not-allowed disabled:opacity-70"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-violet-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-900/30 transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === 'loading' ? 'שולח...' : 'הצטרף'}
              </button>
            </div>

            {message && (
              <p
                id="newsletter-message"
                className={`mt-3 text-sm ${status === 'success' ? 'text-emerald-300' : 'text-rose-300'}`}
                role={status === 'error' ? 'alert' : 'status'}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
