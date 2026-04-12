import journeyImg from '../assets/images/Journey from old to new.png';
import structuralImg from '../assets/images/structural breakdown.png';
import coreTechniquesImg from '../assets/images/טכניקות הליבה מ-Few-Shot ועד Chain of Thought.png';
import visualPromptsImg from '../assets/images/אמנות התיאור פרומפטים לעולמות הויזואליים.png';
import roleplayImg from '../assets/images/משחקי תפקידים (Roleplay) להפוך את ה-AI למומחה תוכן.png';
import promptChainingImg from '../assets/images/שרשור (Chaining) ואוטומציה ממשימה אחת למערכת שלמה.png';
import machinePsychologyImg from '../assets/images/הפסיכולוגיה של המכונה רגשות, הטיות ופריצת גבולות.png';
import promptToolkitImg from '../assets/images/ארגז הכלים של הפרומפטר המקצועי איפה שומרים את כל הטוב הזה.png';
import businessPromptsImg from '../assets/images/פרומפטים בעולם העסקי מקרי בוחן מהשטח.png';
import futurePromptsImg from '../assets/images/העתיד כבר כאן מגמות ל-2026 והלאה.png';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  component: string;
}

export const ARTICLES: Article[] = [
  {
    id: 'history-of-prompts',
    title: 'ההיסטוריה של הפרומפטים: מהשורת פקודה לשפת בני אדם',
    description: 'מדריך מקיף על האבולוציה של הנדסת פרומפטים משנות ה-50 ועד היום',
    category: 'מדריכים',
    readTime: '8 דקות',
    date: '2026-04-10',
    image: journeyImg,
    component: 'HistoryOfPrompts',
  },
  {
    id: 'anatomy-of-perfect-prompt',
    title: 'אנטומיה של הנחיה מושלמת: המבנה שמאחורי הקסם',
    description: 'מדריך מעשי המפרק את הפרומפט לששת מרכיבי הליבה שלו',
    category: 'מדריכים',
    readTime: '7 דקות',
    date: '2026-04-10',
    image: structuralImg,
    component: 'AnatomyOfPerfectPrompt',
  },
  {
    id: 'core-techniques',
    title: 'טכניקות הליבה: מ-Few-Shot ועד Chain of Thought',
    description: 'Zero-Shot, Few-Shot ושרשרת מחשבה — הטכניקות הבסיסיות עם דוגמאות מעשיות ל-2026',
    category: 'טכניקות',
    readTime: '9 דקות',
    date: '2026-04-10',
    image: coreTechniquesImg,
    component: 'CoreTechniques',
  },
  {
    id: 'visual-prompts',
    title: 'אמנות התיאור: פרומפטים לעולמות הויזואליים',
    description: 'כתיבת פרומפטים ל-DALL-E ו-Midjourney — שפה תיאורית, סגנונות וזוויות מצלמה',
    category: 'ויזואלי',
    readTime: '8 דקות',
    date: '2026-04-10',
    image: visualPromptsImg,
    component: 'VisualPrompts',
  },
  {
    id: 'roleplay-persona',
    title: 'משחקי תפקידים (Roleplay): להפוך את ה-AI למומחה תוכן',
    description: 'שיטות Roleplay מתקדמות לכתיבת פרומפטים שמייצרים תשובות בר-סמכא ומדויקות',
    category: 'טכניקות',
    readTime: '7 דקות',
    date: '2026-04-10',
    image: roleplayImg,
    component: 'RoleplayPersona',
  },
  {
    id: 'prompt-chaining',
    title: 'שרשור (Chaining) ואוטומציה: ממשימה אחת למערכת שלמה',
    description: 'בניית תהליכי עבודה אוטומטיים עם AI ושרשור פרומפטים למערכות חכמות',
    category: 'אוטומציה',
    readTime: '7 דקות',
    date: '2026-04-10',
    image: promptChainingImg,
    component: 'PromptChaining',
  },
  {
    id: 'machine-psychology',
    title: 'הפסיכולוגיה של המכונה: רגשות, הטיות ופריצת גבולות',
    description: 'הטיות מובנות, Emotional Prompting ואיך להפיק את המקסימום מה-AI',
    category: 'פסיכולוגיה',
    readTime: '8 דקות',
    date: '2026-04-10',
    image: machinePsychologyImg,
    component: 'MachinePsychology',
  },
  {
    id: 'prompt-toolkit',
    title: 'ארגז הכלים של הפרומפטר המקצועי',
    description: 'כלי ניהול פרומפטים, Prompt Vault, תוספי דפדפן וניהול גרסאות ביעילות',
    category: 'כלים',
    readTime: '6 דקות',
    date: '2026-04-10',
    image: promptToolkitImg,
    component: 'PromptToolkit',
  },
  {
    id: 'business-prompts',
    title: 'פרומפטים בעולם העסקי: מקרי בוחן מהשטח',
    description: 'ניתוח נתונים, שיווק ושירות לקוחות — יישום AI בסביבה עסקית אמיתית',
    category: 'עסקים',
    readTime: '9 דקות',
    date: '2026-04-10',
    image: businessPromptsImg,
    component: 'BusinessPrompts',
  },
  {
    id: 'future-prompts',
    title: 'העתיד כבר כאן: מגמות פרומפטים ל-2026 והלאה',
    description: 'מולטי-מודאליות, Self-Prompting וניהול כוונות — לאן הולך עולם הפרומפטים',
    category: 'עתיד',
    readTime: '7 דקות',
    date: '2026-04-10',
    image: futurePromptsImg,
    component: 'FuturePrompts',
  },
];
