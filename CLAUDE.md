# CLAUDE.md

## Project Overview

This is a **workshop exercise** for practicing BMAD methodology with Claude Code.

**Scenario**: Build a Loan Application Tracker API for a bank. The API manages loan applications — create, list, check status, approve/reject.

## Tech Stack

- Node.js with ESM modules
- Express 4
- In-memory storage (no database — keep it simple for the exercise)

## Coding Standards

- Use ESM (`import`/`export`), not CommonJS
- No TypeScript — plain JavaScript
- Keep files small and focused
- Use `const` by default, `let` only when reassignment is needed
- HTTP status codes: 200 (ok), 201 (created), 400 (bad request), 404 (not found)
- Response format: `{ data: ... }` for success, `{ error: "message" }` for errors

## File Structure

```
src/
  index.js          # Express app entry point
  routes/           # Route handlers (create as needed)
  data/             # In-memory data store (create as needed)
```

## BMAD Resources

- Templates: `bmad-core/templates/`
- Checklists: `bmad-core/checklists/`
- Examples: `examples/`
- Output docs go in: `docs/`

## Workflow

1. Use `/bmad-analyst` to brainstorm and create a project brief → save to `docs/project-brief.md`
2. Use `/bmad-pm` to create a PRD with user stories → save to `docs/prd.md`
3. Use `/bmad-dev` to implement one story from the PRD
