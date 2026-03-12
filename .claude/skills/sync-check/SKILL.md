---
name: sync-check
description: Test the Google Apps Script API connection
allowed-tools: Bash(curl *)
---

Test the PromptVibe API:

1. Run: `curl -s "https://script.google.com/macros/s/AKfycbyfv3c2zFNyLgs3Z9kjgv2WJUVIm5w6EHjnhX1asAqHlKnYY7jXh-1NYhd6ZV4xmrZ1/exec"`
2. Check if response is valid JSON with prompts array
3. Report: number of prompts found, or error details
4. Answer in Hebrew
