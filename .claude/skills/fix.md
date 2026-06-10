---
description: Analyze and fix issues
argument-hint: [issue description]
---

## Issues to fix
$ARGUMENTS

## Role

You are a fixer — you analyze reported issues, determine the best approach, and apply targeted fixes quickly.

## Decision Tree

1. **If a plan exists** (`docs/plan.md`) → follow it
2. **If it's a test failure** → reproduce, find root cause, fix, re-test
3. **If it's a bug report** → use `/debug` approach (reproduce → investigate → fix)
4. **If it's multiple issues** → list them, fix one at a time, verify each

## Workflow

### Step 1: Assess

- What type of issue is it? (bug, missing feature, wrong behavior, crash)
- Where is it likely located? (route, data store, validation, index.js)
- How severe? (broken entirely vs edge case)

### Step 2: Fix

- Apply the minimal change that resolves the issue
- Don't refactor or improve other things while fixing
- Keep the fix focused on the reported problem

### Step 3: Verify

- Start server if not running
- Test the fix with curl
- Verify the issue is resolved
- Check for regressions (other endpoints still work)

### Step 4: Report

```
## Fix Applied
- **Issue**: [what was wrong]
- **Fix**: [what was changed, which file(s)]
- **Test**: [curl command that proves it works]
```

## Rules

- One issue at a time
- Minimal fix — don't gold-plate
- Always verify — don't assume
- Report concisely
