---
title: Lịch Sử Phiên Bản
tags: [changelog, stable]
---

# Lịch Sử Phiên Bản

## 2026-07-16 - Tinh chỉnh Giao diện & Hiệu suất

- Đổi cấu trúc HTML để đồng bộ chiều cao và bỏ việc tự động thêm dấu `...` (ellipsis) khi chữ dài.
- Tinh gọn nội dung hiển thị ở các ô Project (PickPilot, ESP32 Robot, vv.) để hiển thị gọn trong 1-2 dòng.
- Sửa lưới hiển thị `Education` trên điện thoại (từ 1 cột chiếm toàn màn hình thành 2 cột `grid-template-columns: repeat(2, 1fr)`).
- Tối ưu hiệu suất: Thêm thuộc tính `loading="lazy"` cho toàn bộ 33 bức ảnh để chống nghẽn mạng lúc tải trang.
- Đã sửa lỗi JS ghi đè ảnh gốc của PickPilot (Cập nhật từ JPEG sang `1_arm.jpg` và `2_arm.jpg`).
- Cập nhật link YouTube mới cho dự án PickPilot.
- Thiết kế một bản kế hoạch tích hợp CMS/Backend cho tương lai (`implementation_plan.md`).


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

## 2026-07-07 (Update 2) - Bugfixes & Theming

- **Sửa lỗi nút Home**: Không bị kẹt ở trang đen overlay (bỏ gán class is-home khi bấm).
- **Sửa lỗi Intro (F5)**: Bỏ class is-home khỏi các subpage (Resume, Contact) để F5 không bị chạy lại intro.
- **Sửa lỗi Ám màu khi đổi theme**: Tắt 	ransition trên ody và #main để tránh hiệu ứng chuyển màu chậm không đồng đều.
- **Sửa lỗi giao diện Theme Light (Nền Trắng)**: Các thẻ h2, link contact, thẻ project tự động đổi sang màu tối (#111, #333) thay vì bị hòa lẫn vào nền trắng.
- **Cập nhật Theme Dark**: Nền thành #000000 (đen tuyền) thay vì xám đậm.
- **Xóa viền ngang thừa**: Bỏ order-top ở section Projects cho mọi kích thước màn hình (lúc trước bị giới hạn ở desktop).

## 2026-07-07 (Update 3) - Fix Home Button & Intro

- **Nút Home**: Thêm class 
o-spa để ép trình duyệt load lại hoàn toàn index.html khi bấm nút Home, giúp trang hiển thị lại màn hình Intro (ROBOTWAR05) như người dùng yêu cầu thay vì chỉ cuộn lên đầu trang.
- **Intro (F5)**: Xóa logic lưu sessionStorage trong index.html để màn hình Intro luôn xuất hiện khi F5 tại trang chủ. (Kết hợp với update trước: F5 ở Resume/Contact sẽ không có Intro).

## 2026-07-08 - Pixar Intro Animation

- **Cập nhật hiệu ứng Intro**: Sửa đổi CSS animation của màn hình intro.
  - Các chữ cái (ROBOTWAR05) mọc lên từ từ (scale từ 0 lên 1) tại các vị trí phân tán, sau đó từ từ di chuyển về vị trí đúng.
  - Thêm hiệu ứng nhún nhảy (Pixar Lamp / Luxo Jr.): Chữ \R\ đầu tiên sẽ nhảy chồm lên chữ \O\ bên cạnh, làm chữ \O\ bị bẹp xuống, sau đó chữ \R\ nảy lại về vị trí cũ và chữ \O\ nảy lên phục hồi hình dáng.
