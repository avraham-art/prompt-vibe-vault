---
name: deploy
description: Build the project and push to main branch for auto-deployment
allowed-tools: Bash(npm *), Bash(git *)
argument-hint: "[commit message]"
---

Deploy PromptVibe Vault to production:

1. Run type check: `npx tsc --noEmit`
2. Run build: `npm run build`
3. If build succeeds:
   - `git add -A`
   - `git commit -m "deploy: $ARGUMENTS"`
   - `git push origin main`
4. Report success or failure clearly in Hebrew
