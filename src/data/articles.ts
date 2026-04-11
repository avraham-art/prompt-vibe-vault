import journeyImg from '../assets/images/Journey from old to new.png';
import structuralImg from '../assets/images/structural breakdown.png';

export interface Article {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
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
  },
  {
    id: 'anatomy-of-perfect-prompt',
    title: 'אנטומיה של הנחיה מושלמת: המבנה שמאחורי הקסם',
    description: 'מדריך מעשי המפרק את הפרומפט לששת מרכיבי הליבה שלו',
    category: 'מדריכים',
    readTime: '7 דקות',
    date: '2026-04-10',
    image: structuralImg,
  },
];
