import ArticleSeo from "./ArticleSeo";
import heroImage from "../assets/images/משחקי תפקידים (Roleplay) להפוך את ה-AI למומחה תוכן.png";

export default function RoleplayPersona() {
  return (
    <>
      <ArticleSeo
        title="משחקי תפקידים (Roleplay): להפוך את ה-AI למומחה תוכן"
        description="שיטות Roleplay מתקדמות לכתיבת פרומפטים שמייצרים תשובות בר-סמכא ומדויקות"
        canonicalUrl="https://prompts.digitala.co.il/articles/roleplay-persona"
        image={heroImage}
      />
      <article className="mx-auto max-w-3xl">
        <div className="relative mb-10 overflow-hidden rounded-3xl">
          <img src={heroImage} alt="משחקי תפקידים" className="h-64 w-full object-cover sm:h-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 p-6">
            <span className="mb-3 inline-block rounded-full bg-violet-600/90 px-3 py-1 text-sm font-medium text-white">
              טכניקות
            </span>
            <h1 className="text-2xl font-bold leading-snug text-white sm:text-3xl">
              משחקי תפקידים (Roleplay): להפוך את ה-AI למומחה תוכן
            </h1>
          </div>
        </div>

        <div className="glass rounded-3xl p-8 text-center">
          <p className="text-4xl">✍️</p>
          <p className="mt-4 text-xl font-semibold text-white">המאמר המלא בקרוב</p>
          <p className="mt-2 text-base text-slate-400">
            אנחנו עובדים על תוכן מפורט ומעמיק — חזרו בקרוב!
          </p>
        </div>
      </article>
    </>
  );
}
