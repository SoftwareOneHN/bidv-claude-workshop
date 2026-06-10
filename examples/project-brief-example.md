# Project Brief: Loan Application Tracker API

## Project Name
Loan Application Tracker API (Hệ thống theo dõi hồ sơ vay)

## Business Objective
Xây dựng REST API cho phép nhân viên tín dụng tạo, theo dõi và quản lý hồ sơ vay vốn — thay thế quy trình giấy tờ thủ công hiện tại.

## Problem Statement
Nhân viên tín dụng đang quản lý hồ sơ vay bằng Excel và giấy tờ. Khó theo dõi trạng thái, dễ thất lạc, không có lịch sử thay đổi. Khách hàng phải gọi điện hỏi tiến độ.

## Target Users
- **Nhân viên tín dụng (Loan Officer)**: Người tạo và xử lý hồ sơ vay hàng ngày
- **Quản lý chi nhánh (Branch Manager)**: Người duyệt/từ chối hồ sơ, xem tổng quan

## Key Features (MVP)
1. Tạo hồ sơ vay mới (POST)
2. Xem danh sách hồ sơ (GET list)
3. Xem chi tiết một hồ sơ (GET by ID)
4. Cập nhật trạng thái: duyệt/từ chối (PATCH status)

## Out of Scope (không làm trong MVP)
- Authentication / phân quyền
- Upload tài liệu đính kèm
- Notification / email thông báo
- Báo cáo thống kê
- Kết nối core banking

## Success Metrics
- **API response time**: < 200ms cho mọi endpoint
- **Completeness**: 4 endpoints CRUD hoạt động đúng

## Constraints
- **Time**: 30 phút (workshop exercise)
- **Tech**: Node.js + Express, in-memory storage (không dùng database)
- **Business**: Đơn giản hóa quy trình — không cần tuân thủ đầy đủ quy định thực tế

## Initial Thoughts
- Loan có các trạng thái: pending → approved / rejected
- Cần validate: amount > 0, customer_name bắt buộc
- ID dùng số tự tăng cho đơn giản
