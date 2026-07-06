---
title: Knowledge Base - Portfolio
tags: [moc, root]
---

# Portfolio - Knowledge Base

Vault này là tài liệu kỹ thuật toàn diện cho ứng dụng Premium Portfolio của tôi. Kiến trúc hiện tại sử dụng Fetch API để load component động.

## Bản đồ tài liệu

| Thư mục | Nội dung |
|---|---|
| [[01_Architecture/Component_Structure]] | Kiến trúc Single-Page Component, Logic sinh Modal động bằng Javascript |
| [[02_Design_System/Visual_Rules]] | Quy tắc CSS cứng, Split Layout Modal, Button, và ảnh |
| [[03_Developer_Guide/How_To_Edit]] | Quy trình nạp dự án mới vào projectMedia và cách chỉnh sửa HTML Components |
| [[04_Changelog/Version_History]] | Lịch sử các bản cập nhật giao diện và tái cấu trúc |

## Cấu trúc thư mục gốc hiện tại

```text
RobotWar05-Premium-App/
├── index.html          <- Single-Page App bộ khung (chứa `#main` rỗng)
├── components/         <- Các module HTML (home.html, resume.html, contact.html)
├── assets/             <- CSS (main.css, portfolio.css), JS (spa.js), Font
├── pictures/           <- Ảnh (backgrounds, avatar, project images/videos)
├── my_web/             <- Vault Obsidian này (Knowledge Base)
└── README.md           <- Điểm vào cho developer mới
```
