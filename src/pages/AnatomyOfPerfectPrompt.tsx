/**
 * Article: אנטומיה של הנחיה מושלמת
 * SEO-optimized React article component
 * Glassmorphism dark theme — PromptVibe Vault
 */

import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/structural breakdown.png";

const CANONICAL_URL =
  "https://prompts.digitala.co.il/articles/anatomy-of-perfect-prompt";

const faqs = [
  {
    question: "האם חייבים להשתמש בכל המרכיבים בכל פעם?",
    answer:
      "לא. המשימה וההקשר הם חובה, שאר המרכיבים (כמו דוגמאות או אילוצים) משמשים לדיוק המשימה בהתאם למורכבותה.",
  },
  {
    question: "האם הסדר של המרכיבים באמת משנה?",
    answer:
      "כן. מודלים מגיבים טוב יותר כשהתפקיד והמשימה מופיעים בראש הפרומפט.",
  },
  {
    question: "כמה אילוצים אפשר להוסיף?",
    answer:
      "מומלץ לא לעבור את 5–7 האילוצים המרכזיים כדי לא לבלבל את המודל.",
  },
];

const breadcrumbs = [
  { name: "דף הבית", url: "https://prompts.digitala.co.il" },
  { name: "מאמרים", url: "https://prompts.digitala.co.il/articles" },
  {
    name: "אנטומיה של הנחיה מושלמת",
    url: CANONICAL_URL,
  },
];

const coreComponents = [
  {
    icon: "🎯",
    title: "המשימה (Task)",
    desc: 'הפועל המרכזי. מה בדיוק ה-AI צריך לעשות? (למשל: "סכם", "נתח", "צור")',
    required: true,
  },
  {
    icon: "🗺️",
    title: "ההקשר (Context)",
    desc: "הרקע למשימה. מי קהל היעד? מהי המטרה הסופית? מה המודל כבר יודע?",
    required: true,
  },
  {
    icon: "🎭",
    title: "הדמות (Persona)",
    desc: 'מאיזו נקודת מבט ה-AI צריך לפעול? (למשל: "פעל כמומחה לאבטחת מידע")',
    required: false,
  },
  {
    icon: "🔒",
    title: "אילוצים (Constraints)",
    desc: "גבולות הגזרה. מה אסור לעשות? מהו אורך הטקסט המותר?",
    required: false,
  },
  {
    icon: "💡",
    title: "דוגמאות (Few-Shot)",
    desc: 'מתן דוגמה אחת או יותר לפלט הרצוי כדי "לכייל" את המודל לטון הנכון.',
    required: false,
  },
  {
    icon: "📐",
    title: "פורמט פלט (Output Format)",
    desc: "איך התוצאה צריכה להיראות? (טבלה, קוד, רשימה בולטית, קובץ JSON)",
    required: false,
  },
];

const promptEvolution = [
  {
    level: "חובבני (רע)",
    color: "red",
    prompt: "תכתוב לי פוסט על תחבורה ציבורית.",
    result: "טקסט כללי, יבש וגנרי מאוד.",
  },
  {
    level: "בינוני (חסר)",
    color: "yellow",
    prompt:
      "כתוב פוסט ללינקדאין על היתרונות של רכבת קלה בערים גדולות.",
    result: "תוכן סביר, אך ללא ייחוד או 'קול' ברור.",
  },
  {
    level: "אנטומי (מעולה)",
    color: "green",
    prompt:
      "פעל כמתכנן ערים סרקסטי. כתוב פוסט ללינקדאין על הכשלים של הרכבת הקלה. אילוצים: מקסימום 200 מילים, אל תשתמש במילה 'חדשנות'. פורמט: פתח בשאלה פרובוקטיבית.",
    result: "תוכן חד, מדויק, ומותאם אישית למטרה.",
  },
];

const colorMap: Record<string, string> = {
  red: "border-red-700/40 bg-red-900/10",
  yellow: "border-yellow-700/40 bg-yellow-900/10",
  green: "border-green-700/40 bg-green-900/10",
};

const levelColorMap: Record<string, string> = {
  red: "text-red-400",
  yellow: "text-yellow-400",
  green: "text-green-400",
};

export default function AnatomyOfPerfectPrompt() {
  return (
    <>
      <ArticleSeo
        title="אנטומיה של הנחיה מושלמת: המבנה שמאחורי הקסם – המדריך המלא ל-2026"
        description="מדריך מעשי המפרק את הפרומפט לששת מרכיבי הליבה שלו: משימה, הקשר, דמות, אילוצים, דוגמאות ופורמט פלט — עם דוגמאות מעשיות ל-2026."
        canonicalUrl={CANONICAL_URL}
        image={heroImage}
        datePublished="2026-04-10"
        dateModified="2026-04-10"
        authorName="PromptVibe Vault"
        siteName="PromptVibe Vault"
        articleSection="מדריכים"
        keywords={[
          "אנטומיה פרומפט",
          "הנחיה מושלמת",
          "מבנה פרומפט",
          "Persona",
          "Context",
          "Constraints",
          "Few-Shot",
          "prompt engineering",
          "בינה מלאכותית",
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
            אנטומיה של הנחיה מושלמת
            <span className="block text-violet-400 text-2xl sm:text-3xl mt-2">
              המבנה שמאחורי הקסם — המדריך המלא ל-2026
            </span>
          </h1>

          <p className="text-slate-400 text-sm mb-8">
            <time dateTime="2026-04-10">10 באפריל 2026</time>
            <span className="mx-2">·</span>
            <span>PromptVibe Vault</span>
            <span className="mx-2">·</span>
            <span>7 דקות קריאה</span>
          </p>

          {/* Hero Image */}
          <figure className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-900/20">
            <img
              src={heroImage}
              alt="פירוק מבני של הנחיה מושלמת — ששת מרכיבי הליבה של פרומפט מקצועי"
              width={1200}
              height={630}
              className="w-full object-cover max-h-[480px]"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="text-center text-xs text-slate-500 py-2 bg-white/5">
              האנטומיה של פרומפט מקצועי — שלד מבני שהופך כוונה לתוצאה
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
              מהי "הנחיה מושלמת" ואיך בונים אותה?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              הנחיה מושלמת (Perfect Prompt) אינה תוצר של מקרה או מזל, אלא פרי
              של הנדסה מוקפדת. היא מורכבת משישה מרכיבי ליבה קריטיים:{" "}
              <strong className="text-violet-300">
                משימה, הקשר, אילוצים, דמות, דוגמאות ופורמט פלט
              </strong>
              . כאשר המרכיבים מסודרים בהיררכיה לוגית נכונה, הם מאפשרים למודל
              השפה להבין בדיוק מה נדרש ממנו — וממצמצמים משמעותית את ה"פינג-פונג"
              עם ה-AI.
            </p>
          </section>

          {/* Section 2 */}
          <section aria-labelledby="s2">
            <h2 id="s2" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              מהי האנטומיה של הפרומפט?
            </h2>
            <p className="text-slate-300 leading-relaxed">
              בדיוק כפי שגוף האדם מורכב ממערכות הפועלות יחד בתיאום, כך גם
              הפרומפט המקצועי מבוסס על שלד מבני קבוע. במקום לכתוב משפט אחד
              ארוך ומעורפל, אנחנו יוצקים את הכוונה שלנו לתוך תבנית הנדסית.
              הבנת המבנה הזה היא מה שמבדילה בין משתמש ש"משחק" עם ה-AI לבין
              מומחה שמנהל אותו.
            </p>
          </section>

          {/* Section 3 */}
          <section aria-labelledby="s3">
            <h2 id="s3" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              למה מבנה הפרומפט חשוב במיוחד ב-2026?
            </h2>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                {
                  icon: "🔁",
                  title: "עקביות",
                  desc: "קבלת תוצאות איכותיות ודומות בכל פעם שמריצים את ההנחיה.",
                },
                {
                  icon: "🔍",
                  title: "יכולת אבחון",
                  desc: "המבנה האנטומי מאפשר לזהות מיד איזה 'איבר' חסר בפרומפט.",
                },
                {
                  icon: "💰",
                  title: "ייעול תקציבי",
                  desc: "הבנה של ניצול Tokens קריטית לחיסכון בעלויות המחשוב ב-2026.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl bg-white/5 border border-white/10 p-5 text-center"
                >
                  <div className="text-3xl mb-3">{item.icon}</div>
                  <h3 className="font-bold text-violet-300 mb-2">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4 — Core Components */}
          <section aria-labelledby="s4">
            <h2 id="s4" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              ששת מרכיבי הליבה של הפרומפט המנצח
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {coreComponents.map((comp) => (
                <div
                  key={comp.title}
                  className={`rounded-xl border p-5 ${
                    comp.required
                      ? "bg-violet-900/20 border-violet-700/40"
                      : "bg-white/5 border-white/10"
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{comp.icon}</span>
                    <h3 className="font-bold text-white">{comp.title}</h3>
                    {comp.required && (
                      <span className="text-xs bg-violet-700/40 text-violet-300 px-2 py-0.5 rounded-full mr-auto">
                        חובה
                      </span>
                    )}
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {comp.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 — Implementation */}
          <section aria-labelledby="s5">
            <h2 id="s5" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              איך מיישמים את האנטומיה בפועל?
            </h2>
            <p className="text-slate-300 leading-relaxed mb-6">
              הדרך הטובה ביותר ליישם זאת היא בשיטת ה"שכבות" ההיררכית:
            </p>
            <ol className="space-y-4">
              {[
                {
                  step: "1",
                  title: "הגדירו את התפקיד (Persona)",
                  desc: 'תמיד התחילו בזה כדי לתת למודל "מסגרת חשיבה" ברורה.',
                },
                {
                  step: "2",
                  title: "הציגו את המשימה וההקשר",
                  desc: "היו ברורים ותמציתיים ככל הניתן — פחות מילים, יותר דיוק.",
                },
                {
                  step: "3",
                  title: "פרטו את האילוצים והפורמט",
                  desc: "ככל שתהיו ספציפיים יותר, כך הצורך בעריכה ידנית יקטן.",
                },
              ].map((item) => (
                <li
                  key={item.step}
                  className="flex gap-4 rounded-xl bg-white/5 border border-white/10 p-5"
                >
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-violet-600 text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* Section 6 — Mistakes */}
          <section aria-labelledby="s6">
            <h2 id="s6" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              טעויות נפוצות במבנה הפרומפט
            </h2>
            <ul className="space-y-4">
              {[
                {
                  title: 'פרומפטים "שטוחים"',
                  desc: 'כתיבת הנחיה כמו "תכתוב לי פוסט" ללא דמות או הקשר תניב תוצאה גנרית ומשעממת.',
                },
                {
                  title: "עומס יתר (Over-Prompting)",
                  desc: 'הוספת יותר מדי הוראות סותרות באותה פסקה, מה שגורם למודל "לאבד את הצפון".',
                },
                {
                  title: "התעלמות מפורמט הפלט",
                  desc: "אי-הגדרה של מבנה התוצאה (כמו טבלה או רשימה) תגרום לעבודה קשה יותר בארגון המידע לאחר מכן.",
                },
              ].map((err) => (
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

          {/* Section 7 — Evolution Table */}
          <section aria-labelledby="s7">
            <h2 id="s7" className="text-2xl sm:text-3xl font-bold text-white mb-6">
              אבולוציה של פרומפט — מחובבני למקצועי
            </h2>
            <div className="space-y-4">
              {promptEvolution.map((item) => (
                <div
                  key={item.level}
                  className={`rounded-xl border p-5 ${colorMap[item.color]}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className={`text-sm font-bold ${levelColorMap[item.color]}`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <div className="mb-3">
                    <p className="text-xs text-slate-500 mb-1">הפרומפט:</p>
                    <p className="text-slate-300 text-sm leading-relaxed font-mono bg-black/20 rounded-lg p-3">
                      "{item.prompt}"
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">התוצאה הצפויה:</p>
                    <p className="text-slate-400 text-sm">{item.result}</p>
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
              הבנת האנטומיה של הפרומפט הופכת אתכם מ"משתמשים" ל"אדריכלי מידע".
              כשאתם יודעים לפרק את הבקשה שלכם לגורמים, אתם מקבלים שליטה מלאה
              על התוצר של המכונה.
            </p>
            <div className="rounded-xl bg-white/10 p-4 mb-6">
              <p className="font-semibold text-white mb-1">✦ צעד פעולה:</p>
              <p className="text-slate-300 text-sm leading-relaxed">
                קחו את המשימה הבאה שלכם מול ה-AI ונסו ליישם בה לפחות 4 ממרכיבי
                האנטומיה: משימה, דמות, אילוץ ופורמט. שימו לב כמה מהר תקבלו את
                התוצאה המדויקת שחיפשתם.
              </p>
            </div>
            <p className="text-slate-400 text-sm">
              <span className="text-violet-400 font-semibold">במאמר הבא:</span>{" "}
              נצלול לעומק של "טכניקות הליבה" ונלמד איך לגרום ל-AI לחשוב צעד
              אחר צעד בעזרת Chain of Thought.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
