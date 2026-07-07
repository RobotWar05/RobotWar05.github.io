---
title: Kiến Trúc Component và Popup
tags: [architecture, spa, fetch, modal]
---

# Kiến Trúc Component và Popup

## 1. Kiến trúc tổng thể

Dự án là static portfolio chạy bằng HTML/CSS/Vanilla JS. Không dùng React, không dùng build step. Kiến trúc hiện tại là SPA nhẹ:

```text
index.html
  ├── sidebar/header/footer cố định
  ├── home landing overlay
  ├── intro preloader ROBOTWAR05
  ├── project modal container
  └── script điều khiển modal

assets/js/spa.js
  └── fetch components/*.html vào #main

components/home.html
  └── About + Projects Timeline
```

## 2. Luồng load trang

```text
Browser mở index.html
        │
        ▼
CSS/JS nền được load
        │
        ▼
Intro #intro-preloader hiển thị ROBOTWAR05 rồi fade out
        │
        ▼
Home landing #home-landing hiển thị khi body có class is-home
        │
        ▼
assets/js/spa.js fetch components/home.html
        │
        ▼
Nội dung được bơm vào #main
        │
        ▼
window.initHomeScripts() gắn popup cho từng .proj-card
```

## 3. Luồng điều hướng SPA

`assets/js/spa.js` chặn click trên các link nội bộ:

| Link | Component được fetch |
|---|---|
| `index.html` | `components/home.html` |
| `Resume.html` | `components/resume.html` |
| `Contact.html` | `components/contact.html` |

Sau khi fetch:

1. Nội dung được đưa vào `#main`.
2. Body được cập nhật class dạng `home-active`, `resume-active`, `contact-active`.
3. Nếu là Home, gọi lại `window.initHomeScripts()`.

## 4. Kiến trúc project popup

Popup nằm trong `index.html`:

```html
<div id="project-modal" class="modal-overlay">
  <div class="modal-container">
    <span class="modal-close">&times;</span>
    <div class="modal-content" id="modal-content-area"></div>
  </div>
</div>
```

JS lấy danh sách `.proj-card`, gắn overlay `View`, rồi mở modal khi người dùng click ảnh.

## 5. Quy tắc tách title trong modal

Lỗi cũ: modal lấy nguyên `card.querySelector('.proj-body').innerHTML`, khiến `<h3>` của card bị bê thẳng vào modal. Các title dài như `AI in Action - VinUniversity` hoặc `ESP32 Robot Webserver & ESP32-CAM` dễ xuống dòng xấu.

Thiết kế hiện tại:

```text
.proj-body h3
  ├── text node đầu: modalTitle
  ├── .desktop-text: modalScope
  └── .yr: modalDate
```

Modal render lại header riêng:

```html
<header class="modal-project-header">
  <h3 class="modal-project-title">
    <span class="modal-title-main">AI in Action</span>
    <span class="modal-title-scope">VinUniversity</span>
  </h3>
  <div class="modal-project-date">May - Aug 2026</div>
</header>
```

Kết quả: title không còn xuống dòng ngẫu nhiên. Dòng chính, scope và date có vai trò riêng.

## 6. Project media

`projectMedia` hiện nằm trong `index.html`, không nằm trong `spa.js`.

```javascript
const projectMedia = {
  "PickPilot": {
    thumb: "pictures/PickPilot/1_arm.JPEG",
    media: [
      { type: "img", src: "pictures/PickPilot/1_arm.JPEG" }
    ],
    github: "https://c2-app-054.homielab.com/",
    youtube: "https://www.youtube.com/watch?v=GM59NCCEHl4"
  }
};
```

Key của object phải là một phần của text trong `<h3>` để JS match được card.

## 7. Bản phụ Premium App

`RobotWar05-Premium-App` đã được chỉnh tương tự trong quá trình sửa, nhưng từ thời điểm chốt này không còn là bản chính. Khi cần phát triển tiếp, lấy `RobotWar05.github.io` làm source of truth.
