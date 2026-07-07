---
title: Hướng Dẫn Thêm và Sửa Dự Án
tags: [guide, edit, tutorial]
---

# Hướng Dẫn Thêm và Sửa Dự Án

## 1. Bản cần sửa

Chỉ ưu tiên sửa bản chính:

```text
E:\CV\RobotWar05.github.io
```

`RobotWar05-Premium-App` hiện là bản phụ/archive. Không lấy bản Premium làm chuẩn nếu hai project khác nhau.

## 2. Chạy local server

Vì dự án dùng Fetch API để load `components/*.html`, không mở trực tiếp `index.html` bằng `file:///`.

Chạy local server:

```powershell
cd E:\CV\RobotWar05.github.io
py -3 -m http.server 8105
```

Mở:

```text
http://127.0.0.1:8105/
```

## 3. Sửa nội dung project

Mở:

```text
components/home.html
```

Mỗi project nằm trong `.proj-card`.

Mẫu đúng:

```html
<div class="proj-card">
  <div class="proj-img-carousel">
    <img src="pictures/ProjectFolder/1.jpg" alt="Project name" />
  </div>
  <div class="proj-body">
    <h3>Project Name <span class="desktop-text">Project Scope</span> <span class="yr">2026</span></h3>
    <p>Short professional summary.</p>
    <ul>
      <li>Specific hardware/firmware/control detail.</li>
      <li>Specific integration or debug result.</li>
    </ul>
    <div class="proj-tags">
      <span class="proj-tag">ESP32</span>
      <span class="proj-tag">Control</span>
    </div>
  </div>
</div>
```

Quy tắc title:

- Text đầu trong `<h3>` là title chính.
- `.desktop-text` là scope, không bắt đầu bằng dấu `-`.
- `.yr` là thời gian.
- Không nhét toàn bộ title dài vào một dòng.

## 4. Sửa ảnh/media popup

Mở:

```text
index.html
```

Tìm:

```javascript
const projectMedia = {
```

Thêm hoặc sửa media:

```javascript
"Project Name": {
  thumb: "pictures/ProjectFolder/thumb.jpg",
  media: [
    { type: "img", src: "pictures/ProjectFolder/1.jpg" },
    { type: "video", src: "pictures/ProjectFolder/demo.mp4" }
  ],
  github: "https://example.com",
  youtube: "https://youtube.com/example"
}
```

Key `"Project Name"` phải match một phần title trong `<h3>`.

## 5. Sửa popup layout

Mở:

```text
assets/css/portfolio.css
```

Các selector quan trọng:

```css
.modal-project-header
.modal-project-title
.modal-title-main
.modal-title-scope
.modal-project-date
.modal-visuals
.carousel-track
.carousel-slide
```

Không sửa popup bằng cách thêm `<br/>` vào HTML title. Cách đúng là sửa cấu trúc title/scope/date hoặc CSS của modal header.

## 6. Sửa sidebar/avatar

Mở:

```text
assets/css/portfolio.css
```

Các selector quan trọng:

```css
#header .header-profile
#header .header-profile .image.avatar
#header .profile-summary
#header .profile-role
#header .profile-degree
#header .profile-school
```

Lưu ý:

- Desktop hiện đẩy cụm profile lên bằng `transform: translateY(-2.4rem)`.
- Mobile phải có `transform: none !important`.
- Không tăng avatar để sửa vị trí. Sửa offset/layout trước.

## 7. Sửa intro ROBOTWAR05 và home landing

Mở:

```text
assets/css/home-overlay.css
```

Các selector quan trọng:

```css
#home-landing
.home-avatar-wrapper
.home-title
.home-subtitle
#intro-preloader
.glitch-wrapper
.glitch-text
```

Intro phải:

- Có nền cùng tone với home.
- Hiển thị đầy đủ chữ `ROBOTWAR05`.
- Fade out trước khi người dùng vào home.

## 8. Sửa SPA routing

Mở:

```text
assets/js/spa.js
```

Chỉ sửa file này khi cần đổi luồng load page hoặc mapping link sang component. Không đặt `projectMedia` vào `spa.js` nếu chưa refactor có chủ ý.

## 9. Checklist sau khi sửa

Chạy browser test hoặc kiểm thủ công:

- Trang load không lỗi.
- `components/home.html` fetch được.
- Intro biến mất đúng.
- Popup mở/đóng được.
- Popup AI in Action không bị `AI in Action -` rơi dòng.
- Popup ESP32 Robot không bị vỡ title.
- Ảnh modal căn giữa.
- Mobile không bị avatar/header kéo lên quá cao.
- Console không có `pageerror`.
- Network không có `404`.
