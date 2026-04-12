/**
 * Article: אמנות התיאור — פרומפטים לעולמות הויזואליים
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/אמנות התיאור פרומפטים לעולמות הויזואליים.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/visual-prompts-art-of-description";

const faqs = [
  {
    question: "האם כדאי להשתמש בשמות של אמנים ספציפיים?",
    answer:
      "כן, זה עוזר למודל 'להבין' את הסגנון במהירות, אך ב-2026 מומלץ לשלב בין סגנונות כדי ליצור משהו מקורי.",
  },
  {
    question: "מה המשמעות של יחס היבט (Aspect Ratio)?",
    answer:
      "זהו פרמטר קריטי (--ar ב-Midjourney). תמונה לסטורי באינסטגרם צריכה להיות 9:16, בעוד שתמונה קולנועית תהיה 16:9.",
  },
  {
    question: "איך נמנעים מתוצאות מעוותות (כמו ידיים עם 6 אצבעות)?",
    answer:
      "השתמשו ב-Negative Prompts — רשימת דברים שאתם לא רוצים שיופיעו בתמונה.",
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "אמנות התיאור: פרומפטים ויזואליים",
    url: CANONICAL_URL,
  },
];

const pillars = [
  {
    icon: "🎯",
    number: "1",
    title: "הנושא (Subject)",
    desc: 'תיאור מפורט של מה שרואים. במקום "חתול", השתמשו ב-"חתול סיאמי רזה עם עיניים כחולות בוהקות".',
    example: "חתול סיאמי רזה, עיניים כחולות בוהקות, פרווה לבנה-חומה",
    color: "violet",
  },
  {
    icon: "🎨",
    number: "2",
    title: "סגנון אמנותי (Style)",
    desc: "הגדירו את המדיום. האם זה צילום שמן, איור וקטורי, צילום ריאליסטי או פסל חימר?",
    example: "Cinematic photography, National Geographic style, Oil painting",
    color: "blue",
  },
  {
    icon: "💡",
    number: "3",
    title: "תאורה וזוויות מצלמה",
    desc: 'השתמשו ב-"Golden Hour" לתאורה חמה, "Cinematic Lighting" לדרמה, "Low angle" או "Extreme close-up".',
    example: "Rembrandt lighting, 85mm f/1.8, Low angle shot",
    color: "amber",
  },
  {
    icon: "🌟",
    number: "4",
    title: "אווירה ורגש (Mood)",
    desc: 'הוסיפו מילים כמו "Nostalgic", "Cyberpunk" או "Ethereal" כדי לתת לתמונה אופי ייחודי.',
    example: "Nostalgic, ethereal, quiet solitude, Cyberpunk atmosphere",
    color: "pink",
  },
];

const colorStyles: Record<string, string> = {
  violet: "border-violet-700/40 bg-violet-900/10",
  blue: "border-blue-700/40 bg-blue-900/10",
  amber: "border-amber-700/40 bg-amber-900/10",
  pink: "border-pink-700/40 bg-pink-900/10",
};

const numberColors: Record<string, string> = {
  violet: "bg-violet-600",
  blue: "bg-blue-600",
  amber: "bg-amber-600",
  pink: "bg-pink-600",
};

const titleColors: Record<string, string> = {
  violet: "text-violet-300",
  blue: "text-blue-300",
  amber: "text-amber-300",
  pink: "text-pink-300",
};

const evolutionRows = [
  {
    level: "בסיסי",
    quality: "⚠️",
    prompt: "איש זקן בים.",
    result: "תמונה משעממת, חסרת אופי, נראית כמו תמונת מאגר זולה.",
    rowStyle: "border-slate-700/40 bg-slate-900/20",
    levelStyle: "text-slate-400",
  },
  {
    level: "מתקדם",
    quality: "✅",
    prompt: "צילום ריאליסטי של דייג זקן על סירה, שקיעה ברקע.",
    result: "שיפור משמעותי, אך עדיין חסר 'טאץ'' מקצועי.",
    rowStyle: "border-yellow-700/30 bg-yellow-900/10",
    levelStyle: "text-yellow-400",
  },
  {
    level: "פרומפט Vault",
    quality: "🏆",
    prompt:
      "פורטרט קולנועי של דייג זקן עם קמטים עמוקים, תאורת צד חזקה (Rembrandt lighting), טיפות מים על הפנים. סגנון צילום National Geographic, עדשת 85mm f/1.8. אווירה של בדידות שקטה.",
    result: "תוצאה עוצרת נשימה, מלאה ברגש ובפרטים טכניים מדויקים.",
    rowStyle: "border-green-700/30 bg-green-900/10",
    levelStyle: "text-green-400",
  },
];

const mistakes = [
  {
    title: "ג'נרציה גנרית",
    desc: 'שימוש במילים בנאליות כמו "יפה" או "מדהים". ה-AI צריך תיאור של מה הופך את זה ליפה — למשל: "סימטרי", "עשיר בפרטים".',
  },
  {
    title: "חוסר בהקשר (Context)",
    desc: "אם לא תגדירו רקע, ה-AI ימציא אחד — ולרוב הוא יהיה עמוס ומיותר.",
  },
  {
    title: "עומס יתר של פרמטרים",
    desc: "הזרקה של עשרות שמות של אמנים שונים שמתערבבים לכדי בלילה לא ברורה.",
  },
];

export default function VisualPrompts() {
  return (
    <>
      <ArticleSeo
        title="אמנות התיאור: פרומפטים לעולמות הויזואליים – המדריך המלא ל-2026"
        description="מדריך מקיף לכתיבת פרומפטים ויזואליים ל-DALL-E ו-Midjourney — שפה תיאורית, זוויות מצלמה, סגנונות אמנותיים ואווירה. למד לייצר תמונות AI מקצועיות."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "פרומפט ויזואלי",
          "Midjourney",
          "DALL-E",
          "text to image",
          "Rembrandt lighting",
          "Few-Shot",
          "Negative Prompt",
          "הנדסת פרומפטים",
          "בינה מלאכותית ויזואלית",
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
            אמנות התיאור
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              פרומפטים לעולמות הויזואליים — המדריך המלא ל-2026
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
              alt="אמנות התיאור — כתיבת פרומפטים ויזואליים מקצועיים ל-DALL-E ו-Midjourney"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              מהמילה לפיקסל — ארבעת הנדבכים של פרומפט ויזואלי מקצועי
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
              איך הופכים תיאור מילולי ליצירת אמנות ויזואלית?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              כדי לייצר תמונות באיכות גבוהה בבינה מלאכותית, עליכם לעבור מתיאור
              כללי לבניית "סט צילום" מילולי. הנחיה ויזואלית מושלמת משלבת ארבעה
              נדבכים:{" "}
              <strong className="text-violet-300">
                נושא ברור, סגנון אמנותי, תאורה ואווירה, ופרמטרים טכניים של צילום
              </strong>
              . השילוב בין שפה תיאורית עשירה לבין הגדרות טכניות הוא המפתח
              ליצירת תמונות שאינן נראות כ"ג'נרציה גנרית", אלא כתוצר אמנותי
              מכוון.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              מה זה בכלל פרומפט ויזואלי?
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-white/5 border border-white/10 p-6">
                <h3 className="font-bold text-violet-300 mb-3">פרומפט טקסט</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  מחפשים לוגיקה, המשכיות ומבנה. ה-AI "קורא" ומסיק מסקנות
                  לינאריות.
                </p>
              </div>
              <div className="rounded-xl bg-violet-900/20 border border-violet-700/30 p-6">
                <h3 className="font-bold text-violet-300 mb-3">פרומפט ויזואלי</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  מחפשים "תרגום". רצף תארים המכוון את המודל ב-Latent Space למצוא
                  את הייצוג הויזואלי המדויק. כמו לתת הוראות לצוות הפקה שלם בבת
                  אחת.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 — Why 2026 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה זה חשוב במיוחד ב-2026?
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  icon: "🖼️",
                  title: "איכות הקלט קובעת את הפלט",
                  desc: "המודלים של היום מסוגלים להגיע לרזולוציות מטורפות, אך ללא הנחיה על סוג העדשה או התאורה — הם יבחרו בברירת המחדל המשעממת ביותר.",
                },
                {
                  icon: "⚡",
                  title: "חיסכון בזמן ו-Tokens",
                  desc: "הבנה של 'שפת הצילום' מונעת עשרות ניסיונות כושלים ומאפשרת להגיע לתוצאה הרצויה במהירות.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <span className="text-2xl mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-violet-300 mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Mechanism */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              איך זה עובד? מהמילה ועד הפיקסל
            </h2>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                כשאתם כותבים פרומפט ל-Midjourney או ל-DALL-E, המודל מפרק את
                המשפט ל-Tokens ויזואליים. הוא מחפש קשרים שלמד בין המילה
                "קוביזם" לבין סגנון הציור של פיקאסו, או בין המילה "bokeh" לבין
                רקע מטושטש בצילום פורטרט.
              </p>
              <div className="flex items-center gap-3 rounded-lg bg-black/30 p-4 font-mono text-sm text-slate-400 border border-white/5">
                <span className="text-violet-400">טקסט</span>
                <span>→</span>
                <span className="text-blue-400">Tokens</span>
                <span>→</span>
                <span className="text-amber-400">Latent Space</span>
                <span>→</span>
                <span className="text-green-400">Diffusion</span>
                <span>→</span>
                <span className="text-pink-400">תמונה</span>
              </div>
            </div>
          </section>

          {/* Section 5 — Four Pillars */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              ארבעת הנדבכים של פרומפט ויזואלי מקצועי
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className={`rounded-xl border p-5 ${colorStyles[pillar.color]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`w-7 h-7 rounded-full ${numberColors[pillar.color]} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}
                    >
                      {pillar.number}
                    </span>
                    <span className="text-xl">{pillar.icon}</span>
                    <h3 className={`font-bold ${titleColors[pillar.color]}`}>
                      {pillar.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {pillar.desc}
                  </p>
                  <div className="rounded-lg bg-black/30 p-2 font-mono text-xs text-slate-500 border border-white/5">
                    {pillar.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה התמונה נראית "AI-ish"? טעויות נפוצות
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

          {/* Section 7 — Evolution */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              האבולוציה של הפרומפט הויזואלי
            </h2>
            <div className="space-y-4">
              {evolutionRows.map((row) => (
                <div
                  key={row.level}
                  className={`rounded-xl border p-5 ${row.rowStyle}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{row.quality}</span>
                    <h3 className={`font-bold ${row.levelStyle}`}>{row.level}</h3>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">הפרומפט:</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-mono bg-black/20 rounded-lg p-3">
                      "{row.prompt}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">התוצאה הצפויה:</p>
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
              פרומפטים ויזואליים הם הגשר בין המילה הכתובה לבין החזון הוויזואלי.
              ככל שתלמדו יותר על צילום ואמנות, כך תהפכו למשתמשי AI טובים יותר.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                קחו תמונה שרציתם ליצור. הוסיפו שני פרמטרים טכניים (סוג עדשה
                ותאורה) ושני תיאורי רגש. ראו איך התמונה משתנה מ"תוצר מחשב"
                ל"יצירה אישית".
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              "משחקי תפקידים (Roleplay): להפוך את ה-AI למומחה תוכן".
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
