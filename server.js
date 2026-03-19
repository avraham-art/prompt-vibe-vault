import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3000;
const APPS_SCRIPT_URL =
  'https://script.google.com/macros/s/AKfycbyfv3c2zFNyLgs3Z9kjgv2WJUVIm5w6EHjnhX1asAqHlKnYY7jXh-1NYhd6ZV4xmrZ1/exec';
const PROMPTS_CACHE_TTL_MS = 5 * 60 * 1000;

let promptsCache = {
  data: null,
  expiresAt: 0,
  inFlightRequest: null,
};

function isPromptsCacheValid() {
  return Array.isArray(promptsCache.data) && promptsCache.expiresAt > Date.now();
}

async function loadPromptsFromAppsScript() {
  const response = await fetch(APPS_SCRIPT_URL);

  if (!response.ok) {
    throw new Error(`Apps Script request failed with status ${response.status}`);
  }

  const payload = await response.json();

  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && Array.isArray(payload.data)) {
    return payload.data;
  }

  return [];
}

async function getPrompts() {
  if (isPromptsCacheValid()) {
    return promptsCache.data;
  }

  if (!promptsCache.inFlightRequest) {
    promptsCache.inFlightRequest = loadPromptsFromAppsScript()
      .then((prompts) => {
        promptsCache = {
          data: prompts,
          expiresAt: Date.now() + PROMPTS_CACHE_TTL_MS,
          inFlightRequest: null,
        };

        return prompts;
      })
      .catch((error) => {
        promptsCache.inFlightRequest = null;
        throw error;
      });
  }

  return promptsCache.inFlightRequest;
}

app.use(express.static(join(__dirname, 'dist')));

app.get('/api/prompts', async (_req, res) => {
  try {
    const prompts = await getPrompts();
    res.json(prompts);
  } catch (error) {
    console.error('Failed to load prompts:', error);
    res.status(502).json({ error: 'Failed to load prompts' });
  }
});

app.get('/{*path}', (_req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`PromptVibe Vault running on port ${PORT}`);
});
