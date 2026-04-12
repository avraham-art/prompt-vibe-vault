/**
 * Article: שרשור (Chaining) ואוטומציה — ממשימה אחת למערכת שלמה
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/שרשור (Chaining) ואוטומציה ממשימה אחת למערכת שלמה.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/prompt-chaining-automation";

const faqs = [
  {
    question: "האם צריך כלי אוטומציה חיצוניים (כמו Zapier) כדי לשרשר?",
    answer:
      "לא חובה. אפשר לעשות זאת ידנית בתוך הצ'אט, אבל כלים חיצוניים מאפשרים להפוך את השרשרת לאוטומטית לחלוטין.",
  },
  {
    question: "האם שרשור עולה יותר Tokens?",
    answer:
      "לרוב כן, כי אתם מריצים מספר בקשות, אבל האיכות של התוצאה חוסכת לכם עבודה ידנית יקרה הרבה יותר.",
  },
  {
    question: "מתי כדאי להפסיק לשרשר?",
    answer:
      "כשאתם רואים שהמודל מתחיל לחזור על עצמו או שהפלט הופך להיות פחות רלוונטי למטרה המקורית.",
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "שרשור ואוטומציה",
    url: CANONICAL_URL,
  },
];

const chainSteps = [
  {
    number: "1",
    title: "שלב הפירוק (Decomposition)",
    desc: "חלקו את המשימה הגדולה לשלבים עצמאיים. כל שלב חייב להניב פלט ברור — טקסט, רשימה, קוד.",
    example: '"זהה את 5 המגמות המרכזיות בשוק הקפה ב-2026"',
    color: "violet",
  },
  {
    number: "2",
    title: "שלב הקישור (Linking)",
    desc: "הגדירו פרומפטים שמפנים למידע הקודם: \"על בסיס הרשימה שיצרת בצעד הקודם, בצע...\"",
    example: '"קח את המגמות שמצאת ונתח את המתחרים המובילים בכל אחת"',
    color: "blue",
  },
  {
    number: "3",
    title: "שלב הפורמט (Structuring)",
    desc: "ודאו שכל פלט מיוצר בפורמט שקל לפרומפט הבא לעכל — רשימה בולטית, JSON, טבלה.",
    example: '"בנה אסטרטגיה שיווקית מבוססת על הניתוח"',
    color: "green",
  },
];

const colorStyles: Record<string, string> = {
  violet: "border-violet-700/40 bg-violet-900/10",
  blue: "border-blue-700/40 bg-blue-900/10",
  green: "border-green-700/40 bg-green-900/10",
};

const numberColors: Record<string, string> = {
  violet: "bg-violet-600",
  blue: "bg-blue-600",
  green: "bg-green-600",
};

const titleColors: Record<string, string> = {
  violet: "text-violet-300",
  blue: "text-blue-300",
  green: "text-green-300",
};

const chainExample = [
  {
    step: "שלב 1: זיהוי",
    prompt: "סרוק את האינטרנט וזהה 5 טרנדים בתחום ה-SaaS ל-2026.",
    output: "רשימת טרנדים מזוקקת.",
    icon: "🔍",
  },
  {
    step: "שלב 2: ניתוח",
    prompt: "קח את הטרנד ה-1 מהרשימה ונתח 3 מתחרים המשתמשים בו.",
    output: "ניתוח מתחרים מפורט.",
    icon: "📊",
  },
  {
    step: "שלב 3: קריאייטיב",
    prompt: "בנה 5 רעיונות לקמפיין שיווקי המבוססים על ניתוח המתחרים.",
    output: "הצעות לקמפיינים מדויקים.",
    icon: "💡",
  },
];

const mistakes = [
  {
    title: "סחיפת הקשר (Context Drift)",
    desc: "אחרי 4–5 שלבים, ה-AI שוכח את המטרה המקורית. פתרון: חזרו על המטרה הסופית בקצרה בכל חוליה.",
  },
  {
    title: "שרשראות ארוכות מדי",
    desc: "שרשור של 20 פרומפטים עשוי להיות שביר. עדיף לבנות כמה שרשראות קצרות וממוקדות.",
  },
  {
    title: "חוסר בבדיקה ידנית",
    desc: "הסתמכות עיוורת על כך שפלט א' מושלם לפלט ב'. תמיד שלבו נקודת בקרה אנושית בשרשרת.",
  },
];

const whyChain = [
  {
    icon: "🎯",
    title: "דיוק מירבי",
    desc: "ה-AI מקדיש את מלוא כוח החישוב שלו לתת-נושא אחד בכל פעם.",
  },
  {
    icon: "🛡️",
    title: "מניעת הזיות",
    desc: "בקרת איכות בין שלב לשלב — אם שלב א' שגוי, ניתן לתקן לפני שהוא מזהם את שלב ב'.",
  },
  {
    icon: "⚡",
    title: "יכולת הרחבה",
    desc: "ברגע שבניתם שרשרת מוצלחת, ניתן להפוך אותה לאוטומציה שרצה בלחיצת כפתור.",
  },
];

export default function PromptChaining() {
  return (
    <>
      <ArticleSeo
        title="שרשור (Chaining) ואוטומציה: ממשימה אחת למערכת שלמה – המדריך המלא ל-2026"
        description="מדריך מעשי על טכניקת השרשור (Prompt Chaining) בהנדסת פרומפטים — בניית תהליכי עבודה אוטומטיים עם AI, מניעת הזיות ובניית סוכני AI עצמאיים."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "Prompt Chaining",
          "שרשור פרומפטים",
          "אוטומציה AI",
          "Workflow",
          "Context Drift",
          "סוכן AI",
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
            שרשור (Chaining) ואוטומציה
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              ממשימה אחת למערכת שלמה — המדריך המלא ל-2026
            </span>
          </h1>

          <p className="text-slate-400 text-sm mb-8">
            <time dateTime="2026-04-10">10 באפריל 2026</time>
            <span className="mx-2">·</span>
            <span>PromptVibe Vault</span>
            <span className="mx-2">·</span>
            <span>8 דקות קריאה</span>
          </p>

          <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
            <img
              src={heroImage}
              alt="שרשור פרומפטים ואוטומציה — בניית מערכות AI שלמות מחוליות מחוברות"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              מפרומפט בודד לשרשרת שלמה — כוח האוטומציה בהנדסת פרומפטים
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
              מהו שרשור פרומפטים ואיך הוא משנה את העבודה עם AI?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              שרשור פרומפטים (Prompt Chaining) הוא תהליך שבו מחברים מספר הנחיות
              ברצף לוגי, כך שהפלט של פרומפט אחד משמש כקלט עבור הפרומפט הבא.
              בניגוד לפרומפט בודד המנסה לבצע משימה מורכבת בבת אחת, שרשור מאפשר
              פירוק לתתי-משימות מדויקות — ובכך משפר דרמטית את איכות התוצר
              הסופי ומאפשר בניית{" "}
              <strong className="text-violet-300">
                סוכני AI עצמאיים
              </strong>
              .
            </p>
          </section>

          {/* Section 2 — What is Chaining */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              מה זה בכלל "שרשור"?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-slate-900/40 border border-white/10 p-6">
                <h3 className="font-bold text-slate-400 mb-3">פרומפט בודד</h3>
                <div className="font-mono text-sm bg-black/30 rounded-lg p-3 text-slate-400 border border-white/5 mb-3">
                  "תכתוב לי מחקר שוק על עולם הקפה"
                </div>
                <p className="text-slate-500 text-sm">
                  ה-AI מנסה לבצע הכל בבת אחת — לרוב התוצאה שטחית ומעורפלת.
                </p>
              </div>
              <div className="rounded-xl bg-violet-900/20 border border-violet-700/30 p-6">
                <h3 className="font-bold text-violet-300 mb-3">שרשור</h3>
                <ol className="space-y-2 text-sm text-slate-300">
                  {[
                    "זהה 5 מגמות בשוק הקפה",
                    "נתח מתחרים לפי מגמה",
                    "בנה אסטרטגיה שיווקית",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-violet-400 font-bold">{i + 1}.</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </section>

          {/* Section 3 — Why 2026 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה שרשור ואוטומציה קריטיים ב-2026?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {whyChain.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-violet-300 mb-2 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Mechanism */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              איך זה עובד? "הממסר המילולי"
            </h2>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-slate-300 leading-relaxed mb-6">
                בכל פעם שאנחנו מזריקים את הפלט הקודם לתוך הפרומפט החדש, אנחנו
                מעדכנים את ה-Tokens הפעילים בחלון ההקשר. המודל לא צריך "לנחש"
                מה קרה קודם — המידע המזוקק נמצא מולו כ-Grounding למשימה הבאה.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-2 font-mono text-sm">
                {["פרומפט א'", "→ פלט א'", "→ פרומפט ב'", "→ פלט ב'", "→ תוצר סופי"].map(
                  (step, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1.5 rounded-lg text-xs ${
                        step.startsWith("→ פלט")
                          ? "bg-green-900/30 text-green-300 border border-green-700/30"
                          : step.startsWith("→")
                          ? "text-slate-500"
                          : step === "→ תוצר סופי"
                          ? "bg-violet-900/40 text-violet-300 border border-violet-700/40"
                          : "bg-blue-900/30 text-blue-300 border border-blue-700/30"
                      }`}
                    >
                      {step}
                    </span>
                  )
                )}
              </div>
            </div>
          </section>

          {/* Section 5 — 3-Step Formula */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              בניית "סוכן AI" ב-3 שלבים
            </h2>
            <div className="space-y-4">
              {chainSteps.map((step) => (
                <div
                  key={step.title}
                  className={`rounded-xl border p-5 ${colorStyles[step.color]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`w-8 h-8 rounded-full ${numberColors[step.color]} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}
                    >
                      {step.number}
                    </span>
                    <h3 className={`font-bold ${titleColors[step.color]}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {step.desc}
                  </p>
                  <div className="rounded-lg bg-black/30 p-3 font-mono text-xs text-slate-400 border border-white/5">
                    {step.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טעויות נפוצות בשרשור פרומפטים
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
                    <p className="text-slate-400 text-sm leading-relaxed">{err.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Section 7 — Practical Example */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              דוגמה מעשית: מחקר שוק מלא
            </h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute right-6 top-0 bottom-0 w-0.5 bg-violet-800/30" />
              <div className="space-y-6">
                {chainExample.map((item, i) => (
                  <div key={i} className="relative pr-16">
                    <span className="absolute right-0 top-0 w-12 h-12 rounded-full bg-violet-900/40 border border-violet-700/40 text-2xl flex items-center justify-center">
                      {item.icon}
                    </span>
                    <div className="rounded-xl bg-white/5 border border-white/10 p-5">
                      <p className="text-xs text-violet-400 font-semibold mb-2">
                        {item.step}
                      </p>
                      <p className="font-mono text-sm text-slate-300 bg-black/20 rounded-lg p-3 mb-3 border border-white/5">
                        "{item.prompt}"
                      </p>
                      <div className="flex items-center gap-2">
                        <span className="text-green-400 text-xs">↓ פלט:</span>
                        <span className="text-slate-400 text-sm">{item.output}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
                  <dt className="font-bold text-violet-300 mb-2">{faq.question}</dt>
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
              שרשור פרומפטים הוא השלב שבו אתם מפסיקים להיות "כותבי תוכן"
              והופכים ל"מהנדסי מערכות". היכולת לחבר חוליות של בינה מלאכותית
              יוצרת כוח עבודה דיגיטלי שיכול לבצע משימות מורכבות מאפס.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                קחו משימה מורכבת שאתם עושים בפרומפט אחד (כמו כתיבת מאמר ארוך).
                חלקו אותה ל-3 פרומפטים נפרדים: 1. ראשי פרקים, 2. מחקר לכל
                פרק, 3. כתיבה סופית. השוו את האיכות לתוצאה של הפרומפט הבודד.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              "הפסיכולוגיה של המכונה: רגשות, הטיות ופריצת גבולות".
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
