/**
 * Article: טכניקות הליבה — מ-Few-Shot ועד Chain of Thought
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/טכניקות הליבה מ-Few-Shot ועד Chain of Thought.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/core-techniques-few-shot-chain-of-thought";

const faqs = [
  {
    question: "מתי עדיף להשתמש ב-Few-Shot על פני CoT?",
    answer:
      "השתמשו ב-Few-Shot כשאתם רוצים שהפלט ייראה בצורה מסוימת (עיצוב, טון). השתמשו ב-CoT כשהדיוק הלוגי הוא המטרה המרכזית.",
  },
  {
    question: "כמה דוגמאות צריך ב-Few-Shot?",
    answer:
      "לרוב 2–3 דוגמאות איכותיות מספיקות; מעבר לכך אתם עלולים 'לחנוק' את חלון ההקשר.",
  },
  {
    question: "האם ה-CoT עובד גם על יצירת תוכן קריאייטיבי?",
    answer:
      "בהחלט. זה גורם למודל לתכנן את עלילת הסיפור או את מבנה המאמר לפני שהוא כותב את המילה הראשונה.",
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "טכניקות הליבה",
    url: CANONICAL_URL,
  },
];

const techniques = [
  {
    icon: "⚡",
    title: "Zero-Shot",
    badge: "בסיסי",
    badgeColor: "bg-slate-700/40 text-slate-300 border-slate-600/40",
    desc: "המצב הבסיסי שבו אנחנו מבקשים משימה ללא דוגמאות. מהיר, אך פחות מדויק במשימות מורכבות.",
    example: '"תרגם את הטקסט הבא לאנגלית."',
  },
  {
    icon: "🎯",
    title: "Few-Shot",
    badge: "מומלץ",
    badgeColor: "bg-violet-900/40 text-violet-300 border-violet-700/40",
    desc: "מתן מספר קטן של דוגמאות (זוגות קלט-פלט) כדי לכייל את המודל לסגנון ולטון הרצויים.",
    example: '"קלט: כלב → פלט: Dog. קלט: חתול → פלט:"',
  },
  {
    icon: "🧠",
    title: "Chain of Thought",
    badge: "מתקדם",
    badgeColor: "bg-green-900/40 text-green-300 border-green-700/40",
    desc: "הנחיה למודל להסביר את תהליך החשיבה שלו צעד אחר צעד. משפר דיוק במשימות לוגיות.",
    example: '"פתור את הבעיה. בוא נחשוב צעד אחר צעד."',
  },
];

const comparisonRows = [
  {
    technique: "Zero-Shot",
    color: "text-slate-300",
    prompt: 'כמה יעלה פרויקט של 100 שעות ב-50 דולר לשעה עם מע"מ?',
    result: '"5,850 דולר." (חישוב מהיר, עלול לטעות ללא פירוט).',
    quality: "⚠️",
  },
  {
    technique: "Few-Shot",
    color: "text-violet-300",
    prompt: 'קלט: 10 שעות ב-10 דולר → פלט: 100+מע"מ=117. משימה: חשב 100 שעות ב-50 דולר.',
    result: "המודל עוקב אחרי מבנה החישוב המדויק שהגדרתם.",
    quality: "✅",
  },
  {
    technique: "Chain of Thought",
    color: "text-green-300",
    prompt: 'חשב 100 שעות ב-50 דולר לשעה. "בוא נחשוב צעד אחר צעד."',
    result: "1. סה״כ לפני מס: 100×50=5000. 2. מע״מ (17%): 850. 3. סה״כ: 5,850.",
    quality: "🏆",
  },
];

const mistakes = [
  {
    title: "דוגמאות מטעות",
    desc: "מתן דוגמאות (Few-Shot) שאינן תואמות במדויק את המבנה המבוקש יבלבל את המודל ויגרום לפלט מעוות.",
  },
  {
    title: "CoT למשימות פשוטות",
    desc: 'שימוש בשרשרת מחשבה לבקשות בנאליות (כמו "מה השעה?") הוא בזבוז של Tokens וזמן עיבוד.',
  },
  {
    title: "חוסר באילוצים",
    desc: "גם בתוך CoT, ללא הגדרת אילוצים (Constraints), המודל עלול להאריך מדי בהסברים מיותרים.",
  },
];

export default function CoreTechniques() {
  return (
    <>
      <ArticleSeo
        title="טכניקות הליבה: מ-Few-Shot ועד Chain of Thought – המדריך המלא ל-2026"
        description="מדריך מקיף על טכניקות הליבה של הנדסת פרומפטים — Zero-Shot, Few-Shot ושרשרת מחשבה (Chain of Thought) — עם דוגמאות מעשיות ל-2026."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "Few-Shot",
          "Chain of Thought",
          "Zero-Shot",
          "טכניקות פרומפט",
          "In-Context Learning",
          "CoT",
          "הנדסת פרומפטים",
          "בינה מלאכותית",
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
            טכניקות הליבה
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              מ-Few-Shot ועד Chain of Thought — המדריך המלא ל-2026
            </span>
          </h1>

          <p className="text-slate-400 text-sm mb-8">
            <time dateTime="2026-04-10">10 באפריל 2026</time>
            <span className="mx-2">·</span>
            <span>PromptVibe Vault</span>
            <span className="mx-2">·</span>
            <span>9 דקות קריאה</span>
          </p>

          <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
            <img
              src={heroImage}
              alt="טכניקות הליבה של הנדסת פרומפטים — Few-Shot, Chain of Thought ו-Zero-Shot"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              שלוש טכניקות הליבה שהופכות AI מעוזר לפותר בעיות מקצועי
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
              איך גורמים ל-AI לפתור בעיות מורכבות בדיוק של מומחה?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              הדרך לעבור מתשובות גנריות לתוצרים מקצועיים ומדויקים עוברת דרך
              אימוץ טכניקות הנדסה מתקדמות, ובראשן{" "}
              <strong className="text-violet-300">Few-Shot Prompting</strong> ו-
              <strong className="text-violet-300">Chain of Thought (CoT)</strong>
              . בעוד ש-Few-Shot מאפשרת למודל ללמוד דפוסים מתוך דוגמאות בודדות,
              טכניקת ה-CoT גורמת ל-AI לפרק בעיות לוגיות לשלבי ביניים — מה
              שמשפר את הדיוק במשימות מורכבות בעשרות אחוזים.
            </p>
          </section>

          {/* Section 2 — Techniques Overview */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              שלוש טכניקות הליבה — השוואה
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {techniques.map((tech) => (
                <div
                  key={tech.title}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 flex flex-col gap-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{tech.icon}</span>
                      <h3 className="font-bold text-white font-mono">
                        {tech.title}
                      </h3>
                    </div>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full border ${tech.badgeColor}`}
                    >
                      {tech.badge}
                    </span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {tech.desc}
                  </p>
                  <div className="mt-auto rounded-lg bg-black/30 p-3 font-mono text-xs text-slate-400 border border-white/5">
                    {tech.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 — Why 2026 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה טכניקות אלו קריטיות ב-2026?
            </h2>
            <div className="space-y-4">
              {[
                {
                  icon: "🧩",
                  title: "צמצום הזיות (Hallucinations)",
                  desc: "הכרחת המודל לעבור דרך שלבי לוגיקה מפחיתה את הסיכוי לטעויות עובדתיות.",
                },
                {
                  icon: "🎨",
                  title: "שליטה בטון ובסגנון",
                  desc: "Few-Shot הוא הכלי החזק ביותר לשמירה על מותג או קול אישי עקבי.",
                },
                {
                  icon: "🔗",
                  title: "פתרון בעיות רב-שלביות",
                  desc: "היכולת לנהל פרויקטים מורכבים בתוך חלון הקשר אחד.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-violet-300 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Mechanism */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              איך זה עובד? מהסתברות ועד לוגיקה
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-violet-900/20 border border-violet-700/30 p-6">
                <h3 className="font-bold text-violet-300 mb-3 text-lg">
                  מנגנון Few-Shot
                  <span className="block text-xs font-normal text-slate-400 mt-1">
                    In-Context Learning
                  </span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  כשאנחנו מספקים דוגמאות, אנחנו לא "מאמנים" את המודל מחדש,
                  אלא משתמשים במנגנון ה-Attention כדי להגדיל את ההסתברות
                  שהמילים הבאות יהיו בסגנון שהכתבנו. המודל מזהה דפוס ומשכפל
                  אותו על הקלט החדש.
                </p>
              </div>
              <div className="rounded-xl bg-green-900/10 border border-green-700/20 p-6">
                <h3 className="font-bold text-green-300 mb-3 text-lg">
                  מנגנון Chain of Thought
                  <span className="block text-xs font-normal text-slate-400 mt-1">
                    Reasoning Steps
                  </span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  כשה-AI כותב "שלב 1...", הוא מקבע לעצמו בתוך ה-Context Window
                  את הנתונים שישמשו אותו לשלב 2. זהו תהליך בניית "שרשרת" שבה
                  כל חוליה נשענת על קודמתה — תהליך חשיבה מובנה.
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 — Implementation */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              איך מיישמים בפועל?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-bold text-violet-300 mb-4">
                  נוסחת ה-Few-Shot
                </h3>
                <ol className="space-y-3">
                  {[
                    "הגדרת משימה ברורה.",
                    "מתן 2–3 דוגמאות: קלט: [דוגמה] → פלט: [תוצאה].",
                    "הצגת הקלט החדש למילוי.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-bold text-green-300 mb-4">
                  נוסחת ה-CoT
                </h3>
                <ol className="space-y-3">
                  {[
                    'הוסף: "בוא נחשוב על זה צעד אחר צעד".',
                    "דרוש מהמודל להציג הנחות יסוד לפני הפתרון.",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-slate-300">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-700 text-white text-xs flex items-center justify-center font-bold">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
                <div className="mt-4 rounded-lg bg-black/30 p-3 font-mono text-xs text-green-400 border border-green-900/30">
                  "בוא נחשוב על זה צעד אחר צעד."
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טעויות נפוצות בשימוש בטכניקות מתקדמות
            </h2>
            <ul className="space-y-4">
              {mistakes.map((err) => (
                <li
                  key={err.title}
                  className="flex gap-4 rounded-xl bg-red-900/10 border border-red-800/20 p-5"
                >
                  <span className="text-red-400 text-xl mt-0.5">✗</span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{err.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {err.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7 — Comparison */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              דוגמה מעשית: פתרון בעיית לוגיקה עסקית
            </h2>
            <div className="space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.technique}
                  className="rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{row.quality}</span>
                    <h3 className={`font-bold font-mono ${row.color}`}>
                      {row.technique}
                    </h3>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">הפרומפט:</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-mono bg-black/20 rounded-lg p-3">
                      "{row.prompt}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">התוצאה:</p>
                    <p className="text-slate-400 text-sm">{row.result}</p>
                  </div>
                </div>
              ))}
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
                  <dd className="text-slate-400 leading-relaxed">{faq.answer}</dd>
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
              טכניקות הליבה הן הגשר בין "שאילתה" לבין "פתרון". השליטה
              ב-Few-Shot וב-CoT מעניקה לכם את היכולת לנהל את ה-AI בצורה עמוקה
              ויסודית יותר.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                קחו בעיה מורכבת שנתקלתם בה השבוע ונסו לפתור אותה פעמיים: פעם
                אחת עם פרומפט רגיל, ופעם שנייה עם "בוא נחשוב על זה צעד אחר
                צעד". השוו את הדיוק.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              נצא מעולם הטקסט אל העולם הויזואלי — "אמנות התיאור: פרומפטים
              לעולמות הויזואליים" (DALL-E, Midjourney).
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
