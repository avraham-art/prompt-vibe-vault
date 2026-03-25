# PromptVibe Vault — Project Brain 🧠
> קובץ זיכרון ראשי. Claude Code קורא אותו בתחילת כל סשן.

---

## 🎯 מה הפרויקט הזה

**PromptVibe Vault** — אפליקציית ניהול פרומפטים אישית.  
ממשק ווב מקומי שמחובר ל-Google Sheets דרך Apps Script API.

**מטרת המשתמש:** לנהל, לחפש וליצור פרומפטים חכמים בממשק נקי בעברית.

---

## 🏗️ ארכיטקטורה

```
prompt-vibe-vault/
├── CLAUDE.md                    ← אתה כאן (קרא תמיד ראשון)
├── .claude/
│   └── commands/                ← Slash Commands מותאמים
│       ├── deploy.md
│       ├── sync-check.md
│       └── new-feature.md
├── src/
│   ├── components/
│   │   ├── PromptGrid/          ← רשת כרטיסי פרומפטים
│   │   ├── ChatModal/           ← ממשק צ'אט עם Expert Engineer
│   │   ├── SyncButton/          ← כפתור סנכרון עם Drive
│   │   └── SearchBar/           ← חיפוש בזמן אמת
│   ├── hooks/
│   │   ├── usePrompts.ts        ← fetch + state ל-prompts
│   │   └── useChat.ts           ← ניהול היסטוריית שיחה
│   ├── lib/
│   │   └── api.ts               ← כל קריאות ה-API במקום אחד
│   ├── types/
│   │   └── index.ts             ← TypeScript types
│   └── App.tsx
├── public/
├── .github/
│   └── workflows/
│       └── deploy.yml           ← CI/CD לפריסה אוטומטית
├── package.json
├── vite.config.ts
├── tailwind.config.js
└── tsconfig.json
```

---

## 🔌 API Configuration

```typescript
// src/lib/api.ts — הקובץ היחיד שנוגע ב-API
const API_BASE = "https://script.google.com/macros/s/AKfycbyfv3c2zFNyLgs3Z9kjgv2WJUVIm5w6EHjnhX1asAqHlKnYY7jXh-1NYhd6ZV4xmrZ1/exec";

// GET — טעינת כל הפרומפטים
export const fetchPrompts = () => fetch(API_BASE)

// POST — סנכרון עם Drive (no-cors בגלל CORS של Apps Script)
export const syncWithDrive = () => fetch(API_BASE, {
  method: "POST",
  mode: "no-cors",
  body: JSON.stringify({ action: "sync" })
})

// POST — שליחת הודעת צ'אט
export const sendChatMessage = (history: ChatMessage[]) => fetch(API_BASE, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ action: "chat", history })
})
```

**⚠️ CORS Warning:**  
Apps Script מחזיר `Access-Control-Allow-Origin: *` רק ל-GET.  
ל-POST — להשתמש תמיד ב-`mode: 'no-cors'` חוץ מ-chat (שמצפה לתשובה).

---

## 📦 TypeScript Types

```typescript
// src/types/index.ts
interface Prompt {
  id: string
  name: string
  category: string
  description: string
  content: string
  driveUrl: string
  createdAt: string
}

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

interface ApiResponse<T> {
  success: boolean
  data: T
  error?: string
}
```

---

## 🎨 Design System

**אסתטיקה:** Glassmorphism Dark — כהה, זכוכית, gradient עדין.

```css
/* Design Tokens */
--bg-primary: #0a0a0f
--bg-glass: rgba(255,255,255,0.05)
--border-glass: rgba(255,255,255,0.1)
--accent: #7c3aed        /* Violet */
--accent-glow: #a78bfa
--text-primary: #f8fafc
--text-muted: #94a3b8

/* RTL Support */
dir="rtl" על ה-<html>
font-family: 'Heebo', sans-serif (עברית)
```

**RTL חובה:**
- `dir="rtl"` על `<html>`
- `text-align: right` כברירת מחדל
- Flexbox: `flex-row-reverse` כשנדרש

---

## 🚀 Deployment Pipeline

```
Local Dev → GitHub Push → CloudPanel Auto-Deploy → Subdomain Live
```

**הגדרות:**
- **Subdomain:** `prompts.digitala.co.il` (או לפי הגדרת CloudPanel)
- **Branch:** `main` → Production
- **Build Command:** `npm run build`
- **Output Dir:** `dist/`

**GitHub Webhook ב-CloudPanel:**
1. CloudPanel → Site → Git → הגדר Webhook URL
2. GitHub → Settings → Webhooks → הוסף URL
3. Trigger: `push` ל-`main`

---

## ⚡ Slash Commands

### `/deploy`
בדוק שהבנייה עוברת ודחוף ל-main:
```bash
npm run build && git add -A && git commit -m "deploy: $DESCRIPTION" && git push origin main
```

### `/sync-check`
בדוק שה-API עובד:
```bash
curl "https://script.google.com/macros/s/AKfycbyfv3c2zFNyLgs3Z9kjgv2WJUVIm5w6EHjnhX1asAqHlKnYY7jXh-1NYhd6ZV4xmrZ1/exec"
```

### `/new-feature [name]`
1. צור תיקייה `src/components/[name]/`
2. צור `[name].tsx` + `[name].test.tsx`
3. עדכן `App.tsx`

---

## 🪝 Hooks (Claude Code Automation)

```json
// .claude/settings.json
{
  "hooks": {
    "PostToolUse": [
      {
        "matcher": "Write",
        "hooks": [
          { "type": "command", "command": "npm run type-check 2>&1 | tail -5" }
        ]
      }
    ]
  }
}
```
כל כתיבת קובץ → בדיקת TypeScript אוטומטית.

---

## ✅ Patterns — עשה כך

| מה | Pattern |
|---|---|
| קריאת API | תמיד דרך `src/lib/api.ts` |
| State | `usePrompts` hook, לא state ב-component |
| Error | toast notification + console.error |
| Loading | skeleton cards, לא spinner מלא מסך |
| Hebrew text | hardcode בקובץ, לא i18n (MVP) |
| Types | תמיד explicit, לא `any` |

## ❌ Anti-Patterns — אל תעשה

- אל תקרא ל-API ישירות מ-component
- אל תשתמש ב-`useEffect` לכל דבר — prefer React Query
- אל תכניס לוגיקה עסקית ל-JSX
- אל תשכח `dir="rtl"` על אלמנטים חדשים

---

## 📋 Current Status

- [ ] Init Vite + React + TypeScript
- [ ] Install dependencies (Tailwind, Lucide)
- [ ] Build `src/lib/api.ts`
- [ ] Build `usePrompts` hook
- [ ] Build `PromptGrid` component
- [ ] Build `ChatModal` component
- [x] Build `Dashboard` component
- [ ] Build `SyncButton` component
- [ ] Test API connection
- [ ] GitHub repo + push
- [ ] CloudPanel setup + webhook
- [ ] Subdomain DNS

---

## 🔑 Environment

```bash
# לא נדרש .env כרגע — ה-API URL הוא public
# בעתיד אם נוסיף auth:
# VITE_API_KEY=...
```

---

*עדכן את ה-Status למעלה אחרי כל milestone.*
