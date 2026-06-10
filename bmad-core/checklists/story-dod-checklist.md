# Story Definition of Done Checklist

Use this checklist to verify a story is complete before moving on.

## Code
- [ ] Code compiles/runs without errors
- [ ] Follows coding standards in CLAUDE.md
- [ ] Uses ESM imports
- [ ] No hardcoded values that should be configurable

## Functionality
- [ ] All acceptance criteria from the story are met
- [ ] Happy path works (tested with curl)
- [ ] Basic error handling exists (400 for bad input, 404 for not found)
- [ ] Response format matches spec: `{ data: ... }` or `{ error: "..." }`

## Integration
- [ ] Route is registered in index.js
- [ ] Server starts without errors (`npm run dev`)
- [ ] Existing /health endpoint still works
- [ ] No conflicts with other implemented stories
