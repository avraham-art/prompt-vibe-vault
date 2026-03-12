export interface Prompt {
  id: string;
  name: string;
  category: string;
  description: string;
  link: string;
  content?: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
