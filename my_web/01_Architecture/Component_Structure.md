---
title: Kiến Trúc Component (Fetch API)
tags: [architecture, spa, fetch]
---

# 🏗️ Kiến Trúc Component (SPA Fetch API)

## Nguyên lý hoạt động

Dự án sử dụng kiến trúc Single Page Application (SPA) nguyên bản bằng HTML, CSS, và Vanilla JS, nhưng chia nhỏ mã nguồn thành các module để chống phình to file.

## Luồng lắp ráp

Khi người dùng mở `index.html`, toàn bộ khung giao diện (Sidebar, Overlay) được load sẵn. Tuy nhiên, khối nội dung chính `#main` sẽ trống rỗng. File `spa.js` sử dụng Fetch API để kéo nội dung HTML tương ứng bơm vào `#main`.

```text
[Người dùng click link] -> spa.js chặn sự kiện chuyển trang (e.preventDefault)
        │
        ▼
[Fetch API] -> Kéo file `components/<tên-trang>.html`
        │
        ▼
[$('#main').html(html)] -> Bơm nội dung vào thẻ `#main`
        │
        ▼
[Cập nhật CSS/JS] -> Đổi class trên <body> và khởi chạy lại các script hiển thị hình ảnh
```

## Vai trò từng file

| File | Nội dung |
|---|---|
| `index.html` | Bộ khung HTML tĩnh, chứa Sidebar `#header`, Overlay `#home-landing` và container rỗng `#main`. Chứa các link CSS và JS. |
| `components/home.html` | Chứa nội dung chính "About Me" và "Projects Timeline". |
| `components/resume.html` | Chứa iframe hiển thị file PDF Resume. |
| `components/contact.html` | Chứa giao diện liên hệ với các form và nút bấm. |
| `assets/js/spa.js` | Trái tim của kiến trúc. Lắng nghe mọi cú click `<a>`, tự động tìm file tương ứng trong `components/` để fetch. |
| `assets/css/portfolio.css` | Chứa các quy tắc CSS đè (override) lên theme Strata mặc định, xử lý các nút bấm, padding, và Timeline. |
