# Story Template

## Story: [Tên story]

**Status:** Draft | In Progress | Done

**As a** [user type]
**I want to** [hành động]
**So that** [lợi ích]

## Acceptance Criteria
- [ ] Given [context], When [action], Then [result]
- [ ] Given [context], When [action], Then [result]
- [ ] Given [context], When [action], Then [result]

## Technical Notes
- **Endpoint**: [METHOD /path]
- **Request**: `{ field: type }`
- **Response Success (200/201)**: `{ data: ... }`
- **Response Error (400/404)**: `{ error: "message" }`

## Implementation Checklist
- [ ] Route file created/updated
- [ ] Data store created/updated
- [ ] Route registered in index.js
- [ ] Happy path tested with curl
- [ ] Error cases tested

## Test Commands
```bash
# Happy path
curl -X [METHOD] http://localhost:3000/[path] -H "Content-Type: application/json" -d '[body]'

# Error case
curl -X [METHOD] http://localhost:3000/[path] -H "Content-Type: application/json" -d '[bad body]'
```
