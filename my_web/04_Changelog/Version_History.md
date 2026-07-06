---
title: Lịch Sử Phiên Bản
tags: [changelog]
---

# 📜 Lịch Sử Phiên Bản

## v2.0 — Tái cấu trúc Component + Knowledge Base
- **Jekyll Component:** Tách Sidebar, Footer, Head, Scripts, Home Overlay thành 5 file riêng trong `_includes/`. 3 trang HTML chỉ còn chứa nội dung thuần túy.
- **Obsidian Vault:** Tạo hệ thống tài liệu `my_web/` với 4 nhóm: Architecture, Design System, Developer Guide, Changelog.
- **README.md:** Tạo file hướng dẫn tại thư mục gốc cho người đến sau.

## v1.2 — Sửa lỗi giao diện (Edge Cases)

| Lỗi | Nguyên nhân | Cách sửa |
|---|---|---|
| Ảnh bị bầu dục | Ảnh JPEG hình chữ nhật + `border-radius: 100%` không đủ | Thêm `aspect-ratio: 1/1` + `overflow: hidden` |
| Sidebar dịch phải khi sang Contact | Trang ít nội dung → scrollbar biến mất → viewport rộng thêm 15px | `html { overflow-y: scroll; }` |
| PDF có 2 viền đen 2 bên | Dùng `#zoom=120` cố định → không phù hợp mọi màn hình | Đổi sang `#view=FitH` + bọc `max-width: 980px` |
| Chữ Sidebar bị nhỏ hơn Resume | Có `font-size: 0.85em` inline trên `<span>` | Xóa thẻ `<span>` inline, đồng bộ HTML y hệt Resume |
| Phần phải bị co lại | `main.css` có `max-width: 50em` trên `#main` | Override: `max-width: none` |

## v1.1 — Apple Hero & Curtain Reveal
- **Apple Hero Landing:** Thiết kế lại màn hình chờ: chữ to 5em, subtitle Apple gray `#a1a1a6`, nút Pill Liquid Glass với `backdrop-filter: blur`.
- **Curtain Reveal:** Bỏ hiệu ứng `opacity` (gây ám chữ/ghosting). Dùng `translateY(-100vh)` — tấm rèm bay lên/xuống, hai lớp nội dung không bao giờ chồng nhau.

## v1.0 — Khởi tạo Portfolio
- Chuyển đổi template Strata (html5up.net) thành Portfolio cá nhân về Embedded & Automation Robotics.
- Thêm 6 project, thêm trang Resume (PDF), thêm trang Contact.
