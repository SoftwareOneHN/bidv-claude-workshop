# PRD: Loan Application Tracker API

## Product Overview
REST API cho phép nhân viên tín dụng quản lý hồ sơ vay vốn — tạo mới, xem danh sách, xem chi tiết, và cập nhật trạng thái duyệt.

## Target Users
| User Type | Mô tả | Nhu cầu chính |
|-----------|--------|---------------|
| Loan Officer | Nhân viên tín dụng tại chi nhánh | Tạo và theo dõi hồ sơ vay nhanh chóng |
| Branch Manager | Quản lý chi nhánh | Duyệt/từ chối hồ sơ, xem tổng quan |

## Epic: Quản lý Hồ sơ Vay (Loan CRUD)

### Story 1: Tạo hồ sơ vay mới
**As a** Loan Officer
**I want to** tạo một hồ sơ vay mới trong hệ thống
**So that** tôi có thể bắt đầu quy trình xét duyệt cho khách hàng

**Acceptance Criteria:**
- [ ] Given valid loan data, When POST /loans, Then return 201 with created loan (including generated ID and status "pending")
- [ ] Given missing customer_name, When POST /loans, Then return 400 with error message
- [ ] Given amount <= 0, When POST /loans, Then return 400 with error message

**Technical Notes:**
- Endpoint: POST /loans
- Request body: `{ customer_name: string, amount: number, loan_type: string, term_months: number }`
- Response 201: `{ data: { id, customer_name, amount, loan_type, term_months, status: "pending", created_at } }`
- Response 400: `{ error: "customer_name is required" }`

---

### Story 2: Xem danh sách hồ sơ vay
**As a** Loan Officer
**I want to** xem tất cả hồ sơ vay trong hệ thống
**So that** tôi có thể theo dõi tình trạng các hồ sơ đang xử lý

**Acceptance Criteria:**
- [ ] Given loans exist, When GET /loans, Then return 200 with array of all loans
- [ ] Given no loans exist, When GET /loans, Then return 200 with empty array

**Technical Notes:**
- Endpoint: GET /loans
- Response 200: `{ data: [...loans] }`

---

### Story 3: Duyệt hoặc từ chối hồ sơ
**As a** Branch Manager
**I want to** cập nhật trạng thái hồ sơ vay (approve/reject)
**So that** khách hàng biết kết quả xét duyệt

**Acceptance Criteria:**
- [ ] Given a pending loan, When PATCH /loans/:id with status "approved", Then return 200 with updated loan
- [ ] Given a pending loan, When PATCH /loans/:id with status "rejected", Then return 200 with updated loan
- [ ] Given invalid status, When PATCH /loans/:id, Then return 400 with error
- [ ] Given non-existent ID, When PATCH /loans/:id, Then return 404

**Technical Notes:**
- Endpoint: PATCH /loans/:id
- Request body: `{ status: "approved" | "rejected" }`
- Response 200: `{ data: { ...loan, status: "approved", updated_at } }`
- Response 400: `{ error: "status must be 'approved' or 'rejected'" }`
- Response 404: `{ error: "loan not found" }`

## Priority Order
1. Story 1 — Foundation: cần có data trước khi làm gì khác
2. Story 2 — Visibility: xem được danh sách mới biết có gì
3. Story 3 — Action: chức năng chính của manager
