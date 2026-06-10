# Story: Tạo hồ sơ vay mới

**Status:** Done

**As a** Loan Officer
**I want to** tạo một hồ sơ vay mới trong hệ thống
**So that** tôi có thể bắt đầu quy trình xét duyệt cho khách hàng

## Acceptance Criteria
- [x] Given valid loan data, When POST /loans, Then return 201 with created loan (including generated ID and status "pending")
- [x] Given missing customer_name, When POST /loans, Then return 400 with error message
- [x] Given amount <= 0, When POST /loans, Then return 400 with error message

## Technical Notes
- **Endpoint**: POST /loans
- **Request**: `{ customer_name: string, amount: number, loan_type: string, term_months: number }`
- **Response Success (201)**: `{ data: { id, customer_name, amount, loan_type, term_months, status: "pending", created_at } }`
- **Response Error (400)**: `{ error: "customer_name is required" }`

## Implementation Checklist
- [x] Route file created: `src/routes/loans.js`
- [x] Data store created: `src/data/loans.js`
- [x] Route registered in `src/index.js`
- [x] Happy path tested with curl
- [x] Error cases tested

## Test Commands
```bash
# Happy path
curl -X POST http://localhost:3000/loans \
  -H "Content-Type: application/json" \
  -d '{"customer_name": "Nguyen Van A", "amount": 500000000, "loan_type": "personal", "term_months": 24}'

# Expected: 201 { data: { id: 1, customer_name: "Nguyen Van A", ... status: "pending" } }

# Error: missing name
curl -X POST http://localhost:3000/loans \
  -H "Content-Type: application/json" \
  -d '{"amount": 500000000}'

# Expected: 400 { error: "customer_name is required" }

# Error: invalid amount
curl -X POST http://localhost:3000/loans \
  -H "Content-Type: application/json" \
  -d '{"customer_name": "Nguyen Van A", "amount": -100}'

# Expected: 400 { error: "amount must be greater than 0" }
```

## Implementation

Files created:
- `src/data/loans.js` — In-memory store with ID counter
- `src/routes/loans.js` — POST /loans handler with validation
- `src/index.js` — Updated to import and use loans router
