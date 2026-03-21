import type { Prompt, ChatMessage } from '../types';

const BASE_URL =
  'https://script.google.com/macros/s/AKfycbyfv3c2zFNyLgs3Z9kjgv2WJUVIm5w6EHjnhX1asAqHlKnYY7jXh-1NYhd6ZV4xmrZ1/exec';
const PROMPTS_API_URL = '/api/prompts';

export async function fetchPrompts(): Promise<Prompt[]> {
  const response = await fetch(PROMPTS_API_URL);
  if (!response.ok) {
    throw new Error(`שגיאת רשת: ${response.status}`);
  }
  const data = await response.json();
  if (Array.isArray(data)) {
    return data as Prompt[];
  }
  if (data && Array.isArray(data.data)) {
    return data.data as Prompt[];
  }
  return [];
}

export async function syncPrompts(): Promise<void> {
  await fetch(BASE_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'sync' }),
  });
  // no-cors returns opaque response — this is expected
}

export async function sendChat(history: ChatMessage[]): Promise<string> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'chat', history }),
  });
  if (!response.ok) {
    throw new Error(`שגיאת שרת: ${response.status}`);
  }
  const data = await response.json();
  return typeof data === 'string' ? data : (data?.reply ?? data?.message ?? JSON.stringify(data));
}

export async function translatePrompt(content: string): Promise<string> {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'translate', content }),
  });
  if (!response.ok) {
    throw new Error(`שגיאת שרת: ${response.status}`);
  }
  const data = await response.json();
  return typeof data === 'string' ? data : (data?.translation ?? data?.content ?? JSON.stringify(data));
}

export async function fetchPromptContent(link: string): Promise<string> {
  const url = `${BASE_URL}?action=getContent&link=${encodeURIComponent(link)}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`שגיאת שרת: ${response.status}`);
  }

  const data = await response.json();
  const content = data?.content;

  if (typeof content !== 'string') {
    throw new Error('תוכן לא זמין');
  }

  return content;
}
