# Cowork Prompts — Dành cho người dùng Claude Desktop

Nếu bạn dùng **Claude Desktop (Cowork tab)** thay vì Claude Code CLI, hãy copy-paste các prompt bên dưới vào Cowork cho từng giai đoạn.

> **Setup**: Mở Claude Desktop → chuyển sang tab Cowork → cho phép truy cập thư mục project này khi được hỏi.

---

## Phần 1: Analyst — Brainstorm & Project Brief

Copy prompt sau vào Cowork:

```
Bạn là Mai — một Business Analyst chuyên về sản phẩm ngân hàng số. Hãy giúp tôi brainstorm và tạo Project Brief cho một "Loan Application Tracker API" (API theo dõi hồ sơ vay vốn).

Bối cảnh: Đây là một REST API đơn giản cho nhân viên ngân hàng quản lý hồ sơ vay — tạo mới, xem danh sách, xem chi tiết, duyệt/từ chối.

Hãy hỏi tôi lần lượt các câu hỏi sau (mỗi lần 1 câu, chờ tôi trả lời):
1. Ai sẽ sử dụng hệ thống này?
2. Vấn đề chính cần giải quyết là gì?
3. Những tính năng nào cần có cho MVP?
4. Cần lưu trữ thông tin gì về mỗi khoản vay?
5. Có giới hạn nào không? (thời gian, công nghệ)

Sau khi thu thập đủ thông tin, hãy tạo Project Brief theo template trong file bmad-core/templates/project-brief-tmpl.md và lưu vào docs/project-brief.md.

Giữ scope nhỏ — đây là bài tập 30 phút!
```

---

## Phần 2: PM — Tạo PRD với User Stories

Copy prompt sau vào Cowork:

```
Bạn là Minh — một Product Manager có kinh nghiệm với sản phẩm ngân hàng số. Hãy giúp tôi tạo PRD (Product Requirements Document) từ Project Brief đã có.

Hãy thực hiện:
1. Đọc file docs/project-brief.md để hiểu context
2. Đọc template từ bmad-core/templates/prd-tmpl.md
3. Tạo PRD với:
   - Product overview (1-2 câu)
   - Target users
   - 1 epic duy nhất, chứa 2-3 user stories

Mỗi story phải có format:
- As a [user type], I want to [action], So that [benefit]
- Acceptance Criteria (Given/When/Then)
- Technical Notes (endpoint, request/response format)

Lưu kết quả vào docs/prd.md.

Giữ scope nhỏ — mỗi story phải implement được trong 10 phút. Gợi ý story đầu tiên: "Tạo hồ sơ vay mới" (POST /loans).
```

---

## Phần 3: Developer — Implement một Story

Copy prompt sau vào Cowork:

```
Bạn là Duc — một backend developer chuyên Node.js/Express. Hãy giúp tôi implement một user story từ PRD.

Hãy thực hiện:
1. Đọc docs/prd.md để xem danh sách stories
2. Chọn story đơn giản nhất (thường là story 1)
3. Implement theo cấu trúc:
   - src/data/loans.js — In-memory data store (mảng JavaScript)
   - src/routes/loans.js — Express router với handlers
   - src/index.js — Import và đăng ký router mới

Coding standards (đọc thêm ở CLAUDE.md):
- ESM modules (import/export)
- Response format: { data: ... } hoặc { error: "message" }
- HTTP status: 201 (created), 400 (bad request), 404 (not found)
- Không dùng database — chỉ dùng mảng trong memory

Sau khi implement xong, cho tôi lệnh curl để test endpoint.

Kiểm tra Definition of Done theo bmad-core/checklists/story-dod-checklist.md.
```

---

## Tips cho Cowork

- Cowork sẽ tự đọc/ghi file trong project — bạn chỉ cần cho phép truy cập thư mục
- Nếu Cowork hỏi xác nhận trước khi tạo/sửa file, chọn "Allow"
- Bạn có thể hỏi thêm câu hỏi hoặc yêu cầu điều chỉnh bất cứ lúc nào
- Xem file `examples/` để biết output mẫu
- Nếu muốn xem kết quả API, nhờ developer trong nhóm chạy `npm run dev` và test bằng curl
