# Implementation Plan - Trạng Thái Đã Chốt

Ngày cập nhật: `2026-07-07`

## 1. Quyết định hiện tại

Bản chính cần bảo trì:

```text
E:\CV\RobotWar05.github.io
```

Bản phụ:

```text
E:\CV\RobotWar05-Premium-App
```

`RobotWar05-Premium-App` không bị xóa, nhưng không còn là source of truth. Nếu cần sửa portfolio tiếp, sửa bản GitHub IO trước.

## 2. Kiến trúc đã chọn

Đã chọn mô hình Fetch API:

```text
index.html
  └── assets/js/spa.js
        └── fetch components/*.html
```

Lý do:

- Không cần build step.
- Phù hợp GitHub Pages/static hosting.
- Dễ sửa từng component.
- AI assistant có thể đọc đúng file nhỏ thay vì toàn bộ giao diện trong một file lớn.

Nhược điểm:

- Không mở trực tiếp bằng `file:///`.
- Phải chạy local server khi test.

## 3. File ownership

| File | Vai trò |
|---|---|
| `index.html` | Khung trang, sidebar, footer, home overlay, modal container, `projectMedia`, modal JS |
| `components/home.html` | About + Projects Timeline |
| `components/resume.html` | Resume PDF |
| `components/contact.html` | Contact |
| `assets/js/spa.js` | Điều hướng SPA và fetch component |
| `assets/css/home-overlay.css` | Home landing + intro ROBOTWAR05 |
| `assets/css/portfolio.css` | Override layout, timeline, cards, modal, sidebar, footer |
| `assets/css/main.css` | Theme Strata gốc và một số override nền tảng |
| `pictures/` | Toàn bộ media portfolio |
| `my_web/` | Tài liệu kỹ thuật |

## 4. Các việc đã hoàn thành

- Popup không còn lấy nguyên `<h3>` của card.
- Modal tách title/scope/date.
- `Sensor Experiments` đổi thành `Sensor Nodes`.
- Nội dung project đầu được viết chuyên nghiệp hơn.
- Ảnh modal căn giữa.
- Timeline year marker đã căn với line.
- Sidebar profile chuyển sang markup có class rõ.
- Avatar desktop được đẩy lên cao hơn.
- Mobile reset transform để không vỡ header.
- Footer icon desktop fixed gần đáy sidebar.
- Intro `ROBOTWAR05` có nền đồng bộ home và hiệu ứng 3D/fade.
- Premium App được đồng bộ một số sửa, nhưng không còn là bản chính.

## 5. Verification đã chạy

Local server:

```powershell
cd E:\CV\RobotWar05.github.io
py -3 -m http.server 8105
```

Kiểm bằng Chromium/Playwright:

- Desktop `1365x768`.
- Mobile `390x844`.
- Popup: AI in Action, ESP32 Robot, ESP32 HMI.
- Intro fade.
- Avatar desktop/mobile.
- Network 404.
- Page error.

Kết quả gần nhất:

- Không có `pageerror`.
- Không có response lỗi `404`.
- Popup title/date đúng.
- Intro ẩn đúng sau animation.
- Avatar desktop cao hơn; mobile không bị kéo âm.

## 6. Việc nên làm sau

- Dọn các file phụ không còn dùng nếu chắc chắn: `replace.ps1`, `script.py`.
- Cập nhật `README.md` nếu muốn tài liệu public cũng phản ánh kiến trúc hiện tại.
- Nếu tiếp tục phát triển, chỉ sửa `RobotWar05.github.io` trước, sau đó mới cân nhắc có cần sync sang Premium App không.
