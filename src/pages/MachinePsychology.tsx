/**
 * Article: הפסיכולוגיה של המכונה — רגשות, הטיות ופריצת גבולות
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/הפסיכולוגיה של המכונה רגשות, הטיות ופריצת גבולות.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/machine-psychology-emotions-biases";

const faqs = [
  {
    question: "האם ה-AI באמת מבין רגש?",
    answer:
      "לא. הוא מזהה דפוסים לשוניים של רגש ומשכפל את התגובות ההסתברותיות שתואמות להם.",
  },
  {
    question: 'למה "קח נשימה עמוקה" משפר את התוצאות?',
    answer:
      "כי בטקסטים אנושיים, הביטוי הזה מופיע לפני הסברים מפורטים ומחושבים, והמודל פשוט עוקב אחרי הדפוס הזה.",
  },
  {
    question: "איך נמנעים מהזיות רגשיות?",
    answer:
      'תמיד שלבו אילוצים (Constraints) יחד עם הרגש: "תהיה יצירתי אבל התבסס רק על העובדות הבאות".',
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "הפסיכולוגיה של המכונה",
    url: CANONICAL_URL,
  },
];

const techniques = [
  {
    icon: "💭",
    title: "Emotional Prompting",
    desc: 'הוסיפו משפטים המדגישים את חשיבות המשימה.',
    example: '"התשובה שלך תשפיע על ההחלטה העסקית הכי גדולה שלי השנה"',
    color: "violet",
  },
  {
    icon: "✅",
    title: "Positive Reinforcement",
    desc: "מתן משוב חיובי בתוך השרשור משפר לעיתים את העקביות של המודל.",
    example: '"מצוין! עכשיו בנה על מה שיצרנו ו..."',
    color: "green",
  },
  {
    icon: "⚖️",
    title: "Bias Mitigation (ניטרול הטיות)",
    desc: "בקשו מהמודל לנתח מנקודות מבט מרובות.",
    example: '"נתח מ-3 נקודות מבט, כולל כאלו המנוגדות לדעת הרוב"',
    color: "blue",
  },
];

const colorStyles: Record<string, string> = {
  violet: "border-violet-700/40 bg-violet-900/10",
  green: "border-green-700/40 bg-green-900/10",
  blue: "border-blue-700/40 bg-blue-900/10",
};

const titleColors: Record<string, string> = {
  violet: "text-violet-300",
  green: "text-green-300",
  blue: "text-blue-300",
};

const comparisonRows = [
  {
    type: "ניטרלי",
    quality: "⚠️",
    prompt: "כתוב לי אסטרטגיית שיווק למוצר חדש.",
    result: 'פלט סטנדרטי, מקיף אך חסר "ניצוץ" ייחודי.',
    rowStyle: "border-slate-700/40 bg-slate-900/20",
    typeStyle: "text-slate-400",
  },
  {
    type: "רגשי (Vault)",
    quality: "🏆",
    prompt:
      "אני בונה את העסק הראשון שלי וזה קריטי להצלחה שלי. בוא ניקח נשימה עמוקה ונבנה את אסטרטגיית השיווק הכי יצירתית ומדויקת שאפשר.",
    result:
      "פלט מפורט יותר, עם דגש על פתרונות יצירתיים ותחושת מחויבות גבוהה יותר לפרטים.",
    rowStyle: "border-green-700/30 bg-green-900/10",
    typeStyle: "text-green-400",
  },
];

const mistakes = [
  {
    title: "האנשת יתר (Anthropomorphism)",
    desc: "להאמין שה-AI באמת דואג לכם או כועס עליכם. זהו כלי סטטיסטי — התייחסות אליו כאל אדם עלולה להוביל להסתמכות עיוורת על מידע שגוי.",
  },
  {
    title: "עומס רגשי (Emotional Overload)",
    desc: 'שימוש ביותר מדי דרמה בפרומפט עלול לגרום למודל להפוך ל"יצירתי" מדי על חשבון עובדות ודיוק.',
  },
  {
    title: "התעלמות מהטיות",
    desc: "להניח שה-AI אובייקטיבי לחלוטין. זכרו: הוא צאצא של מודלים סטטיסטיים מוטים שצברו את כל הנתונים האנושיים.",
  },
];

const whyMatters = [
  {
    icon: "📈",
    title: "שיפור ביצועים",
    desc: "טריגרים רגשיים יכולים להעלות את איכות התשובה במשימות מורכבות.",
  },
  {
    icon: "🔍",
    title: "זיהוי הטיות",
    desc: "AI נוטה לשקף הטיות חברתיות; פרומפטר מיומן יודע לזהותן ולנטרלן.",
  },
  {
    icon: "🛡️",
    title: "אתיקה ובטיחות",
    desc: "הבנת הגבולות ודרכי הפריצה חיונית להגנה על מערכות ומידע.",
  },
];

export default function MachinePsychology() {
  return (
    <>
      <ArticleSeo
        title="הפסיכולוגיה של המכונה: רגשות, הטיות ופריצת גבולות – המדריך המלא ל-2026"
        description="מדריך מקיף על השפעת הקשר רגשי על מודלי שפה, זיהוי הטיות מובנות, טכניקת Emotional Prompting ואיך לנהל אינטראקציה שמפיקה את המקסימום מה-AI."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "Emotional Prompting",
          "הטיות AI",
          "פסיכולוגיה של מכונה",
          "Bias Mitigation",
          "LLM psychology",
          "הנדסת פרומפטים",
          "בינה מלאכותית",
          "prompt engineering",
          "AI bias",
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
            הפסיכולוגיה של המכונה
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              רגשות, הטיות ופריצת גבולות — המדריך המלא ל-2026
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
              alt="הפסיכולוגיה של מודלי שפה — Emotional Prompting, הטיות ופריצת גבולות"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              רגש כמשקולת הסתברותית — איך ההקשר הרגשי משנה את ביצועי ה-AI
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
              האם ניתן להשפיע רגשית על AI ואיך זה עובד?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              כן, ניתן להשפיע על ביצועי ה-AI באמצעות{" "}
              <strong className="text-violet-300">Emotional Prompting</strong>,
              אך לא משום שהמכונה חשה רגשות — אלא בשל האופן שבו היא מעבדת
              הסתברות. הוספת הקשר רגשי או דחיפות (כמו: "זה קריטי לקריירה שלי")
              גורמת למודל לתת משקל גבוה יותר לנתונים איכותיים ומדויקים מתוך
              מאגר האימון שלו — מה שמשפר את רמת הדיוק והפירוט של הפלט.
            </p>
          </section>

          {/* Section 2 — What is Machine Psychology */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              מהי "הפסיכולוגיה של המכונה"?
            </h2>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                המודל אינו מחזיק במודעות, אך הוא "צאצא" של כלל הידע האנושי
                שנצבר ברשת. לכן הוא משקף דפוסי חשיבה, רגשות והטיות שהיו
                קיימים בטקסטים עליהם התאמן.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="rounded-lg bg-slate-900/40 border border-white/10 p-4 text-center">
                  <div className="text-3xl mb-2">🤖</div>
                  <p className="text-slate-500 text-sm">
                    פקודה טכנית יבשה
                  </p>
                  <p className="text-slate-400 text-xs mt-1">תוצאה: פלט בינוני</p>
                </div>
                <div className="rounded-lg bg-violet-900/20 border border-violet-700/30 p-4 text-center">
                  <div className="text-3xl mb-2">🧠</div>
                  <p className="text-violet-300 text-sm font-medium">
                    ניהול אינטראקציה מיומנת
                  </p>
                  <p className="text-slate-400 text-xs mt-1">תוצאה: מקסימום מהמודל</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 — Why 2026 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה זה חשוב במיוחד ב-2026?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {whyMatters.map((item) => (
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
              איך זה עובד? רגש כמשקולת הסתברותית
            </h2>
            <div className="rounded-xl bg-white/5 border border-white/10 p-6">
              <p className="text-slate-300 leading-relaxed mb-6">
                כאשר אנחנו מוסיפים רגש לפרומפט, אנחנו משנים את "משקולות"
                ה-Tokens. המשפט{" "}
                <span className="font-mono text-sm bg-violet-900/30 px-2 py-0.5 rounded text-violet-300">
                  "קח נשימה עמוקה ותעבוד לאט"
                </span>{" "}
                מחקה טקסטים של פתרון בעיות איכותי במאגר האימון, מה שמפעיל אצל
                המודל מסלולי "חשיבה" לוגיים ומסודרים יותר. המכונה לא נרגעת —
                היא עוברת למצב עבודה המדמה ריכוז אנושי.
              </p>
              <div className="rounded-xl bg-black/40 border border-violet-900/30 p-4 font-mono text-center text-sm text-slate-400">
                <span className="text-slate-500">פרומפט + </span>
                <span className="text-pink-300">הקשר רגשי</span>
                <span className="text-slate-500"> = </span>
                <span className="text-violet-300">שינוי משקולות Attention</span>
                <span className="text-slate-500"> = </span>
                <span className="text-green-300">פלט מדויק יותר</span>
              </div>
            </div>
          </section>

          {/* Section 5 — Techniques */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טכניקות "הנדסה פסיכולוגית"
            </h2>
            <div className="space-y-4">
              {techniques.map((tech) => (
                <div
                  key={tech.title}
                  className={`rounded-xl border p-5 ${colorStyles[tech.color]}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{tech.icon}</span>
                    <h3 className={`font-bold ${titleColors[tech.color]}`}>
                      {tech.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-3">
                    {tech.desc}
                  </p>
                  <div className="rounded-lg bg-black/30 p-3 font-mono text-xs text-slate-400 border border-white/5">
                    {tech.example}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טעויות נפוצות בממשק הרגשי-מכני
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

          {/* Section 7 — Comparison */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              פרומפט ניטרלי מול פרומפט רגשי — השוואה
            </h2>
            <div className="space-y-4">
              {comparisonRows.map((row) => (
                <div
                  key={row.type}
                  className={`rounded-xl border p-5 ${row.rowStyle}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">{row.quality}</span>
                    <h3 className={`font-bold ${row.typeStyle}`}>{row.type}</h3>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">הפרומפט:</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-mono bg-black/20 rounded-lg p-3">
                      "{row.prompt}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">השפעה על הפלט:</p>
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
              הפסיכולוגיה של המכונה היא המראה של הפסיכולוגיה האנושית. כשאנחנו
              לומדים להשתמש בטריגרים הנכונים, אנחנו לא "מרמים" את המכונה —
              אנחנו מכוונים אותה למסלולי הנתונים האיכותיים ביותר שלה.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                נסו לבקש מה-AI משימה מורכבת שבה הוא נכשל בעבר. הפעם, הוסיפו
                משפט המדגיש את חשיבות המשימה עבורכם ובקשו ממנו "לחשוב לאט
                ובזהירות". השוו את התוצאה.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              "ארגז הכלים של הפרומפטר המקצועי: איפה שומרים את כל הטוב הזה?"
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
