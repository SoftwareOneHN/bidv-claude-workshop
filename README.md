# BIDV Claude Workshop - Bài Tập Thực Hành

## Giới thiệu

Bài tập thực hành sử dụng **Claude** với phương pháp **BMAD** (Breakthrough Method of Agile AI-Driven Development) để xây dựng một REST API theo dõi hồ sơ vay vốn.

Bạn sẽ trải nghiệm 3 giai đoạn của BMAD trong 30 phút:
1. **Phân tích** — Brainstorm ý tưởng, tạo Project Brief
2. **Lập kế hoạch** — Tạo PRD với user stories
3. **Triển khai** — Implement một story thành code

## Chọn công cụ

| Công cụ | Dành cho | Cách dùng |
|---------|----------|-----------|
| **Claude Code** (CLI) | Developer, tech-savvy | Dùng slash commands trong terminal |
| **Claude Cowork** (Desktop) | BA, QC, non-tech | Paste prompts vào Cowork tab |

> Cả hai đều làm cùng bài tập, chỉ khác cách tương tác với Claude.

---

## Cài đặt

### Path A: Claude Code (CLI)

```bash
git clone <repo-url>
cd bidv-claude-workshop
npm install
npm run dev
```

Kiểm tra: `http://localhost:3000/health` → `{"status":"ok","service":"loan-tracker-api"}`

### Path B: Claude Cowork (Desktop)

1. Mở **Claude Desktop** → chuyển sang tab **Cowork**
2. Khi được hỏi, cho phép truy cập thư mục project (đã clone sẵn bởi developer trong nhóm)
3. Mở file **`cowork-prompts.md`** để xem các prompt cần paste

> **Lưu ý:** Không cần chạy server cho phần 1-2 (brainstorm + planning). Chỉ cần server khi test API ở phần 3.

---

## Bài tập

### Phần 1: Phân tích & Brainstorm (~8 phút)

**Claude Code:**
```
/bmad-analyst
```

**Cowork:** Copy prompt "Phần 1" từ file `cowork-prompts.md`

---

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

**Claude Code:**
```
/bmad-pm
```

**Cowork:** Copy prompt "Phần 2" từ file `cowork-prompts.md`

---

Claude sẽ đóng vai Product Manager, giúp bạn:
- Đọc Project Brief vừa tạo
- Tạo **PRD** (Product Requirements Document) với 2-3 user stories
- Lưu tại `docs/prd.md`

**Lưu ý:** Giữ scope nhỏ — chỉ 1 epic, 2-3 stories. Đây là bài tập 30 phút!

### Phần 3: Triển khai (~14 phút)

**Claude Code:**
```
/bmad-dev
```

**Cowork:** Copy prompt "Phần 3" từ file `cowork-prompts.md`

---

Claude sẽ đóng vai Developer, giúp bạn:
- Chọn 1 story từ PRD để implement
- Viết code Express.js cho story đó
- Test API bằng curl hoặc Postman

**Gợi ý:** Chọn story đơn giản nhất (ví dụ: "Tạo hồ sơ vay mới" - POST endpoint).

---

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
- Dùng Claude Code CLI cho trải nghiệm tốt nhất

### Dành cho BA
- Phần 1-2 là sân chơi của bạn — challenge Claude với business requirements
- Hỏi: "Quy trình nghiệp vụ nào chưa được cover?"
- Dùng Cowork nếu không quen terminal

### Dành cho QC
- Ở phần 2, hỏi Claude về edge cases và acceptance criteria
- Ở phần 3, test API và tìm bugs
- Dùng Cowork hoặc Claude Code đều được

## Skills có sẵn (Claude Code)

Ngoài BMAD flow, repo này còn có các skills để thực hành:

| Skill | Lệnh | Mô tả |
|-------|-------|--------|
| Brainstorm | `/brainstorm [câu hỏi]` | Phân tích ý tưởng, đánh giá trade-offs |
| Plan | `/plan [task]` | Lập kế hoạch implementation |
| Code | `/code [task]` | Implement feature step-by-step |
| Test | `/test [endpoint]` | QA testing, tìm bugs, viết report |
| Scout | `/scout [keyword]` | Tìm hiểu cấu trúc codebase |
| Debug | `/debug [vấn đề]` | Tìm root cause, sửa bug |
| Fix | `/fix [issue]` | Fix nhanh một issue cụ thể |

**Ví dụ sử dụng:**
```
/brainstorm nên dùng database hay in-memory cho MVP?
/plan thêm endpoint GET /loans/:id
/code implement story 2 từ PRD
/test POST /loans endpoint
/debug POST /loans trả về 500
```

---

## Tham khảo

- `cowork-prompts.md` — Prompts cho Claude Cowork (Desktop)
- `.claude/skills/` — Skill definitions (brainstorm, plan, code, test, scout, debug, fix)
- `.claude/commands/bmad/` — BMAD agents (analyst, pm, dev)
- `examples/` — Output mẫu đã hoàn thành
- `bmad-core/templates/` — Format cho các document
- `CLAUDE.md` — Coding standards cho project

## Lệnh hữu ích

```bash
# Khởi động server
npm run dev

# Test API
curl http://localhost:3000/health
curl -X POST http://localhost:3000/loans -H "Content-Type: application/json" -d '{"amount": 500000000}'
```
