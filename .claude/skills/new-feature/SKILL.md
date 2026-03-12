---
name: new-feature
description: Scaffold a new React component with proper structure
allowed-tools: Write, Read
argument-hint: "[ComponentName]"
---

Create a new feature component for PromptVibe Vault:

1. Create directory: `src/components/$ARGUMENTS/`
2. Create `src/components/$ARGUMENTS/$ARGUMENTS.tsx` with:
   - TypeScript props interface
   - RTL support (dir="rtl")
   - Glassmorphism styling via Tailwind
   - Loading and error states
3. Export from component file
4. Update `src/App.tsx` to import the new component
5. Report what was created in Hebrew
