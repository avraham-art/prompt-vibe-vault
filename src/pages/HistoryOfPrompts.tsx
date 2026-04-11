/**
 * Article: ההיסטוריה של הפרומפטים
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/Journey from old to new.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/history-of-prompts";

const faqs = [
  {
    question: "האם הנדסת פרומפטים תעלם בעתיד?",
    answer:
      "לא, היא לא תעלם אלא תשתנה. ככל שהמודלים ישתפרו, המקצוע יהפוך מ'הנדסה' ל'ניהול כוונות' (Intent Management).",
  },
  {
    question: "מהו השינוי הכי משמעותי שקרה ב-2017?",
    answer:
      "המצאת ה-Transformer, שאפשרה למכונות להבין סאבטקסט והקשר מורכב דרך מנגנון ה-Attention.",
  },
  {
    question: "האם צריך לדעת לתכנת כדי לכתוב פרומפטים טובים?",
    answer:
      "ממש לא. ה-AI הפך את השפה לקוד, כך שמי ששולט בשפה ובלוגיקה הוא 'המתכנת' החדש.",
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "ההיסטוריה של הפרומפטים",
    url: CANONICAL_URL,
  },
];

export default function HistoryOfPrompts() {
  return (
    <>
      <ArticleSeo
        title="ההיסטוריה של הפרומפטים: מהשורת פקודה לשפת בני אדם – המדריך המלא ל-2026"
        description="מדריך מקיף על האבולוציה של הנדסת פרומפטים משנות ה-50 ועד היום — מ-Fortran ו-Assembly, דרך NLP, ועד מהפכת ה-Transformers ב-2017."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "פרומפט",
          "הנדסת פרומפטים",
          "בינה מלאכותית",
          "Transformers",
          "NLP",
          "ChatGPT",
          "AI",
          "prompt engineering",
        ]}
        faqs={faqs}
        breadcrumbs={breadcrumbs}
        lang="he"
        dir="rtl"
      />

      <article
        dir="rtl"
        lang="he"
        className="min-h-screen bg-[#0a0a0f] text-slate-100 font-[Heebo,sans-serif]"
      >
        {/* ── Breadcrumb ── */}
        <nav
          aria-label="ניווט ארגזי לחם"
          className="max-w-4xl mx-auto px-4 pt-8 pb-2"
        >
          <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-400">
            {breadcrumbs.map((crumb, i) => (
              <li key={crumb.url} className="flex items-center gap-1">
                {i > 0 && <span aria-hidden="true">›</span>}
                {i < breadcrumbs.length - 1 ? (
                  <a
                    href={crumb.url}
                    className="hover:text-violet-400 transition-colors"
                  >
                    {crumb.name}
                  </a>
                ) : (
                  <span className="text-violet-400">{crumb.name}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* ── Hero ── */}
        <header className="max-w-4xl mx-auto px-4 pt-6 pb-10">
          <div className="inline-block mb-4 px-3 py-1 rounded-full text-xs font-medium bg-violet-900/40 text-violet-300 border border-violet-700/40">
            מדריכים
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
            ההיסטוריה של הפרומפטים: מהשורת פקודה לשפת בני אדם
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              המדריך המלא ל-2026
            </span>
          </h1>

          <p className="text-slate-400 text-sm mb-8">
            <time dateTime="2026-04-10">10 באפריל 2026</time>
            <span className="mx-2">·</span>
            <span>PromptVibe Vault</span>
            <span className="mx-2">·</span>
            <span>8 דקות קריאה</span>
          </p>

          {/* Hero Image */}
          <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
            <img
              src={heroImage}
              alt="מסע מהתכנות הישן לשפת ה-AI המודרנית — ההיסטוריה של הפרומפטים"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              האבולוציה של ממשקי המחשוב — משורת פקודה לשיחה חופשית
            </figcaption>
          </figure>
        </header>

        {/* ── Article Body ── */}
        <div className="max-w-4xl mx-auto px-4 pb-16 space-y-12">

          {/* Section 1 — Direct Answer */}
          <section
            aria-labelledby="s1"
            className="rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm"
          >
            <h2 id="s1" className="text-xl sm:text-2xl font-bold text-violet-300 mb-4">
              פתיח: איך עברנו מכתיבת קוד נוקשה לשיחה חופשית עם AI?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              המעבר מכתיבת קוד נוקשה לשיחה חופשית עם בינה מלאכותית הוא תוצאה
              של אבולוציה בת שבעה עשורים בממשקי המחשוב. זה התחיל בהקלדת פקודות
              לוגיות נוקשות בשפות כמו Fortran ו-Assembly בשנות ה-50, המשיך דרך
              פיתוח מודלי שפה סטטיסטיים (NLP) בשנות ה-90, והגיע לשיאו ב"מפץ
              הגדול" של ארכיטקטורת ה-Transformers ב-2017. כיום, "הנדסת
              פרומפטים" היא למעשה תרגום של כוונה אנושית לחישוב הסתברותי מדויק.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              מה זה בכלל "פרומפט" בהקשר ההיסטורי?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              המילה "פרומפט" (Prompt) לא נולדה בעידן ה-ChatGPT; במקור, בעולם
              המחשוב המוקדם, הפרומפט היה בסך הכל "סימן מוכנות" — אותו קו מהבהב
              בטרמינל שהודיע למשתמש שהמחשב מוכן לקבל פקודה.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                <h3 className="font-bold text-violet-300 mb-2">
                  פקודה (Command)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  הוראה דטרמיניסטית וקשיחה שאינה משאירה מקום לפרשנות. למשל,
                  פקודת DELETE שמבצעת מחיקה מיידית ללא שאלות.
                </p>
              </div>
              <div className="rounded-xl bg-violet-900/20 border border-violet-700/30 p-5">
                <h3 className="font-bold text-violet-300 mb-2">
                  הנחיה (Prompt)
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  הוראה ג'נרטיבית שבה המשתמש מספק כיוון, הקשר ומטרה, והמכונה
                  "מייצרת" תשובה מבוססת הסתברות. המעבר הזה מייצג מניהול מכונות
                  להנחיית אינטליגנציה.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה הבנת ההיסטוריה של ה-AI קריטית לנו ב-2026?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              ב-2026, כשה-AI מוטמע בכל כלי עבודה, הבנת המקורות שלו עוזרת לנו
              להבין את המגבלות שלו. כשאנחנו מבינים ש-AI מודרני הוא צאצא של
              מודלים סטטיסטיים, קל לנו יותר להבין מדוע הוא "הוזה" (Hallucinations):
              הוא אינו "משקר", אלא פשוט מנסה להשלים את מחרוזת המילים ההסתברותית
              הטובה ביותר על סמך נתוני העבר. הבנת האבולוציה הזו מלמדת אותנו
              שהשפה הטבעית הפכה לשפת התכנות החזקה בעולם, אך כזו שדורשת "תחביר"
              חדש ומדויק.
            </p>
          </section>

          {/* Section 4 — Timeline */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="text-2xl sm:text-3xl font-bold text-white mb-8">
              ציר הזמן — עד ל-Tokens
            </h2>
            <ol className="relative border-r border-violet-800/40 space-y-10 pr-6">
              {[
                {
                  era: "1950–1980",
                  title: "עידן המכונה",
                  desc: "בני אדם נאלצו להתאים את עצמם למכונה ולדבר 'מחשבית'. שפות כמו Fortran דרשו דיוק מתמטי מוחלט — טעות בפסיק אחד פירושה קריסת התוכנית כולה.",
                },
                {
                  era: "1990–2010",
                  title: "מהפכת ה-NLP",
                  desc: "המחשבים החלו 'להבין' תחביר אנושי בצורה שבירה. זה היה עידן של 'מילות מפתח' — ללא המילה המדויקת, המחשב לא ידע לזהות את כוונת המשתמש.",
                },
                {
                  era: "2017",
                  title: 'עידן ה-Transformers',
                  desc: "עם פרסום המאמר 'Attention Is All You Need', הוצג מנגנון ה-Transformer המאפשר למחשב להבין 'הקשר' על ידי מתן משקל שונה לכל מילה. זהו הרגע שבו הפרומפט נולד באמת.",
                },
              ].map((item) => (
                <li key={item.era} className="relative">
                  <span className="absolute -right-[1.6rem] top-1 w-3 h-3 rounded-full bg-violet-500 border-2 border-violet-300" />
                  <span className="text-xs font-mono text-violet-400 mb-1 block">
                    {item.era}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                </li>
              ))}
            </ol>

            {/* Attention formula */}
            <div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-5 font-mono text-center text-slate-300 text-sm overflow-x-auto">
              <p className="mb-2 text-violet-300 font-sans font-semibold">
                נוסחת ה-Attention:
              </p>
              <p>Attention(Q, K, V) = softmax( QKᵀ / √d_k ) · V</p>
            </div>
          </section>

          {/* Section 5 */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              איך מיישמים את זה היום?
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: "בניית היררכיה",
                  desc: "סדר ההוראות קריטי; הגדרת התפקיד (Persona) צריכה להופיע לפני פירוט המשימה.",
                },
                {
                  title: "ניהול הקשר (Context)",
                  desc: "כל מילה נצרכת כ-Token. שימוש מושכל בהקשר המשימה משפר את דיוק התוצאה בעשרות אחוזים.",
                },
              ].map((tip) => (
                <li
                  key={tip.title}
                  className="flex gap-4 rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <span className="text-violet-400 text-xl mt-0.5">✦</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{tip.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {tip.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טעויות נפוצות בהבנת מהות הפרומפט
            </h2>
            <ol className="space-y-4 list-decimal list-inside">
              {[
                {
                  title: 'יחס של "תיבת חיפוש"',
                  desc: 'כתיבת מילות מפתח קצרות (כמו בגוגל של 2010) במקום לנהל שיחה ולהסביר את הכוונה.',
                },
                {
                  title: 'התעלמות מ"חלון ההקשר" (Context Window)',
                  desc: "פרומפטים ארוכים מדי ללא מבנה ברור יגרמו ל-AI 'לשכוח' את תחילת ההנחיה.",
                },
              ].map((err, i) => (
                <li
                  key={i}
                  className="rounded-xl bg-red-900/10 border border-red-800/20 p-5 list-none"
                >
                  <span className="text-red-400 font-bold ml-2">
                    {i + 1}.
                  </span>
                  <span className="font-bold text-white">{err.title}</span>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                    {err.desc}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 7 — Comparison Table */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              פקודת קוד מול פרומפט מודרני
            </h2>
            <div className="overflow-x-auto rounded-xl border border-white/10">
              <table className="w-full text-sm text-right">
                <thead className="bg-violet-900/30 text-violet-300">
                  <tr>
                    <th className="p-4 font-semibold">מאפיין</th>
                    <th className="p-4 font-semibold">עידן הקוד (SQL/Fortran)</th>
                    <th className="p-4 font-semibold">עידן ה-Prompt (Generative AI)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    ["שפה", "סינטקס קשיח ומוגדר מראש", "שפה טבעית חופשית"],
                    ["גמישות", "אפס. טעות אחת = שגיאה", 'גבוהה. המודל מנסה "לנחש" כוונה'],
                    ["הקשר", "לא קיים (דורש הגדרה ידנית)", "מובנה בתוך המודל (Transformers)"],
                    [
                      "דוגמה",
                      "SELECT name FROM users WHERE age > 18;",
                      'תביא לי רשימת שמות של משתמשים בוגרים, בפורמט טבלה."',
                    ],
                  ].map(([attr, old, modern]) => (
                    <tr key={attr} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-violet-300">{attr}</td>
                      <td className="p-4 text-slate-400">{old}</td>
                      <td className="p-4 text-slate-300">{modern}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 8 — FAQ */}
          <section aria-labelledby="s8">
            <h2 id="s8" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              שאלות נפוצות
            </h2>
            <dl className="space-y-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-xl bg-white/5 border border-white/10 p-6"
                >
                  <dt className="font-bold text-violet-300 mb-2">
                    {faq.question}
                  </dt>
                  <dd className="text-slate-400 leading-relaxed">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </section>

          {/* Section 9 — Summary */}
          <section
            aria-labelledby="s9"
            className="rounded-2xl bg-violet-900/20 border border-violet-700/30 p-6 sm:p-8"
          >
            <h2 id="s9" className="text-2xl font-bold text-violet-300 mb-4">
              סיכום וצעד פעולה
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              המסע מהקוד הנוקשה לשיחה הקולחת הוא סיפור על הנגשת כוח החישוב
              לכל אדם. הפרומפט הוא הגשר שבנינו כדי לדבר עם המכונה בשפה שלנו
              בלי לאבד את הדיוק שלה.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                קחו משימה שגרתית ופרקו אותה לשלבים לוגיים (משתנים, מטרה,
                מגבלות) — אך כתבו אותה בשפה חופשית.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              נפרק את "אנטומיה של הנחיה מושלמת" ונלמד את הנוסחה המדויקת
              לבניית פרומפטים מנצחים.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
