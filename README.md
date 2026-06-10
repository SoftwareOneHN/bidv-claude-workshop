# BIDV Claude Workshop - Bài Tập Thực Hành

## Giới thiệu

Bài tập thực hành sử dụng **Claude Code** với phương pháp **BMAD** (Breakthrough Method of Agile AI-Driven Development) để xây dựng một REST API theo dõi hồ sơ vay vốn.

Bạn sẽ trải nghiệm 3 giai đoạn của BMAD trong 30 phút:
1. **Phân tích** — Brainstorm ý tưởng, tạo Project Brief
2. **Lập kế hoạch** — Tạo PRD với user stories
3. **Triển khai** — Implement một story thành code

## Yêu cầu trước khi bắt đầu

- [Node.js](https://nodejs.org/) v18+
- [Claude Code](https://docs.anthropic.com/en/docs/claude-code) đã cài đặt và đăng nhập
- Terminal / VS Code

## Cài đặt

```bash
git clone <repo-url>
cd bidv-claude-workshop
npm install
npm run dev
```

Kiểm tra: truy cập `http://localhost:3000/health` → `{"status":"ok","service":"loan-tracker-api"}`

## Bài tập

### Phần 1: Phân tích & Brainstorm (~8 phút)

Mở Claude Code trong thư mục project và chạy:

```
/bmad-analyst
```

Claude sẽ đóng vai Analyst, giúp bạn:
- Brainstorm các tính năng cho Loan Application Tracker API
- Xác định mục tiêu kinh doanh
- Tạo **Project Brief** → lưu tại `docs/project-brief.md`

**Gợi ý brainstorm:**
- Ai là người dùng? (Nhân viên tín dụng, khách hàng, quản lý?)
- Quy trình duyệt hồ sơ vay như thế nào?
- Cần track thông tin gì? (Số tiền, lãi suất, tài sản đảm bảo?)
- MVP cần những gì? Có thể bỏ gì cho đơn giản?

### Phần 2: Lập kế hoạch (~8 phút)

```
/bmad-pm
```

Claude sẽ đóng vai Product Manager, giúp bạn:
- Đọc Project Brief vừa tạo
- Tạo **PRD** (Product Requirements Document) với 2-3 user stories
- Lưu tại `docs/prd.md`

**Lưu ý:** Giữ scope nhỏ — chỉ 1 epic, 2-3 stories. Đây là bài tập 30 phút!

### Phần 3: Triển khai (~14 phút)

```
/bmad-dev
```

Claude sẽ đóng vai Developer, giúp bạn:
- Chọn 1 story từ PRD để implement
- Viết code Express.js cho story đó
- Test API bằng curl hoặc Postman

**Gợi ý:** Chọn story đơn giản nhất (ví dụ: "Tạo hồ sơ vay mới" - POST endpoint).

## Kết quả mong đợi

Sau 30 phút, bạn sẽ có:
- `docs/project-brief.md` — Mô tả tổng quan dự án
- `docs/prd.md` — PRD với user stories
- Code mới trong `src/` — Implement 1 story
- API endpoint hoạt động được (test bằng curl)

## Tips theo vai trò

### Dành cho Developer
- Tập trung vào phần 3, nhưng đừng skip phần 1-2 — đó là cách BMAD giảm rework
- Hỏi Claude câu hỏi kỹ thuật: "Nên cấu trúc route như thế nào?"

### Dành cho BA
- Phần 1-2 là sân chơi của bạn — challenge Claude với business requirements
- Hỏi: "Quy trình nghiệp vụ nào chưa được cover?"

### Dành cho QC
- Ở phần 2, hỏi Claude về edge cases và acceptance criteria
- Ở phần 3, test API và tìm bugs

## Tham khảo

- Xem `examples/` để biết output mẫu
- Xem `bmad-core/templates/` để biết format document
- CLAUDE.md chứa coding standards cho project

## Lệnh hữu ích

```bash
# Khởi động server
npm run dev

# Test API
curl http://localhost:3000/health
curl -X POST http://localhost:3000/loans -H "Content-Type: application/json" -d '{"amount": 500000000}'
```
