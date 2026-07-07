---
title: Knowledge Base - RobotWar05.github.io
tags: [moc, root, stable]
---

# RobotWar05.github.io - Knowledge Base

Vault này ghi lại kiến trúc, quy tắc giao diện, quy trình sửa và lịch sử ổn định của portfolio chính tại:

```text
E:\CV\RobotWar05.github.io
```

## Trạng thái hiện tại

| Hạng mục | Trạng thái |
|---|---|
| Bản chính | `RobotWar05.github.io` |
| Bản phụ | `RobotWar05-Premium-App` - chỉ dùng làm bản tham chiếu/archive, không ưu tiên bảo trì |
| Kiến trúc | Static SPA bằng HTML/CSS/Vanilla JS, load component bằng Fetch API |
| Trang chính | `index.html` + `components/home.html` |
| CSS chính | `assets/css/main.css`, `assets/css/home-overlay.css`, `assets/css/portfolio.css` |
| Media project | `pictures/` |
| Verification gần nhất | Chromium/Playwright qua local server, desktop và mobile |

## Bản đồ tài liệu

| Tài liệu | Nội dung |
|---|---|
| [[01_Architecture/Component_Structure]] | Kiến trúc SPA, luồng fetch component, popup project modal |
| [[02_Design_System/Visual_Rules]] | Quy tắc layout, sidebar, avatar, popup, intro, timeline, responsive |
| [[03_Developer_Guide/How_To_Edit]] | Cách sửa project, media, modal, avatar, intro, và chạy kiểm thử |
| [[03_Developer_Guide/Strata_CSS_Quirks]] | Các bẫy CSS của theme Strata và cách debug đúng |
| [[04_Changelog/Version_History]] | Lịch sử cập nhật giao diện, popup, intro, nội dung project |

## Cấu trúc thư mục chính

```text
RobotWar05.github.io/
├── index.html
│   ├── khung HTML chính
│   ├── sidebar/header/footer
│   ├── home landing overlay
│   ├── intro preloader ROBOTWAR05
│   └── JS project modal + projectMedia
├── components/
│   ├── home.html       <- About + Projects Timeline
│   ├── resume.html     <- Resume PDF view
│   └── contact.html    <- Contact page
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── home-overlay.css
│   │   └── portfolio.css
│   ├── js/
│   │   └── spa.js
│   └── docs/
├── pictures/
│   ├── home/
│   ├── PickPilot/
│   ├── BallAndBeam/
│   ├── HMI_Lvgl/
│   └── ...
└── my_web/
```

## Quy tắc vận hành

- Sửa nội dung project trong `components/home.html`.
- Sửa media popup trong `index.html`, biến `projectMedia`.
- Sửa layout/popup/timeline/sidebar trong `assets/css/portfolio.css`.
- Sửa home landing và intro `ROBOTWAR05` trong `assets/css/home-overlay.css`.
- Luôn chạy bằng local server, không mở trực tiếp `file:///`, vì SPA dùng Fetch API.
- Sau khi sửa giao diện, kiểm ít nhất 2 viewport: desktop `1365x768` và mobile `390x844`.

## Ghi chú chốt bản

Từ sau đợt sửa ngày `2026-07-07`, bản cần ưu tiên là `RobotWar05.github.io`. Nếu hai project lệch nhau, lấy bản GitHub IO làm chuẩn.
