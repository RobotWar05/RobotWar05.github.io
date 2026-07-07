---
title: Lịch Sử Phiên Bản
tags: [changelog, stable]
---

# Lịch Sử Phiên Bản

## 2026-07-07 - Chốt bản ổn định GitHub IO

Trạng thái:

- Bản chính: `RobotWar05.github.io`.
- Bản phụ: `RobotWar05-Premium-App`, dùng làm tham chiếu/archive.
- Không xóa bản phụ để tránh mất dữ liệu ngoài ý muốn.

### Popup project

- Sửa lỗi popup lấy nguyên `<h3>` từ card làm title.
- Tách modal header thành:
  - `.modal-title-main`
  - `.modal-title-scope`
  - `.modal-project-date`
- Sửa lỗi title xuống dòng xấu như `AI in Action - / VinUniversity`.
- Popup hiện tại hiển thị có chủ ý:
  - `AI in Action` + `VinUniversity`
  - `ESP32 Robot` + `Webserver & ESP32-CAM`
  - `ESP32 HMI` + `Sensor Nodes`

### Nội dung project

- Đổi `ESP32 HMI & Sensor Experiments` thành `ESP32 HMI & Sensor Nodes`.
- Đổi wording của ESP32 robot thành chuyên nghiệp hơn:
  - `ESP32 Robot`
  - `Webserver & ESP32-CAM`
- Chỉnh nội dung AI in Action theo hướng training/project-based, tránh tự nhận quá mức.
- Chỉnh câu PIC từ `sensor experiments` sang `sensor interfacing`.

### Sidebar và avatar

- Đổi phần giới thiệu sidebar từ nhiều `<br/>` sang `.profile-summary` có class rõ ràng.
- Thêm khoảng cách giữa các mục học vấn/chuyên môn.
- Đẩy cụm avatar/profile desktop lên bằng `transform: translateY(-2.4rem)`.
- Reset mobile bằng `transform: none !important`.
- Icon footer desktop được fixed gần đáy sidebar.

### Intro ROBOTWAR05

- Thêm/chuẩn hóa intro preloader `ROBOTWAR05`.
- Nền intro dùng cùng tone với home background.
- Chữ có hiệu ứng 3D dày bằng nhiều lớp `text-shadow`.
- Chữ hiện đầy đủ rồi fade out.
- Có fallback `prefers-reduced-motion`.

### Ảnh và carousel

- Chuẩn hóa `.proj-img-carousel`.
- Modal image/video dùng `object-fit: contain` và căn giữa.
- Sửa đường dẫn overlay CSS từ path sai sang `assets/css/images/overlay.png`.
- Sửa đường dẫn ảnh joystick có ký tự tiếng Việt trong ESP-NOW.

### Verification đã chạy

Kiểm bằng Chromium/Playwright qua local server:

```powershell
py -3 -m http.server 8105
```

Viewport đã kiểm:

- Desktop `1365x768`.
- Mobile `390x844`.

Kết quả:

- Không có `pageerror`.
- Không có response `404`.
- Intro fade xong: `opacity: 0`, `visibility: hidden`.
- Popup AI/ESP32/HMI mở đúng, title/date tách đúng.
- Avatar desktop đã cao hơn; mobile không bị kéo lên âm.

## 2026-07-06 - SPA component hóa

- `index.html` giữ khung chính, modal container và script nền.
- `components/home.html`, `components/resume.html`, `components/contact.html` chứa nội dung từng view.
- `assets/js/spa.js` dùng Fetch API để load component vào `#main`.
- Cần chạy qua local server, không mở bằng `file:///`.

## 2026-07-05 - Knowledge Base

- Tạo thư mục `my_web/` để ghi lại kiến trúc, design rules, hướng dẫn sửa và changelog.
- Mục tiêu: giảm sửa theo cảm tính, tăng khả năng bảo trì khi dùng AI assistant.

## Trước 2026-07-05 - Nền Strata ban đầu

- Dựa trên theme Strata của HTML5 UP.
- Có sidebar cố định, main content bên phải, ảnh nền mạch điện.
- Được tùy biến thành portfolio Embedded Systems / Automation / Robotics.
