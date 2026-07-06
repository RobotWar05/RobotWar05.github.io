---
title: Knowledge Base – Portfolio
tags: [moc, root]
---

# 📚 Portfolio – Knowledge Base

Vault này là tài liệu kỹ thuật toàn diện cho [[https://robotwar05.github.io|robotwar05.github.io]].

## Bản đồ tài liệu

| Thư mục | Nội dung |
|---|---|
| [[01_Architecture/Component_Structure]] | Kiến trúc Jekyll, luồng lắp ráp component |
| [[02_Design_System/Visual_Rules]] | Quy tắc CSS cứng, layout, ảnh, hiệu ứng |
| [[03_Developer_Guide/How_To_Edit]] | Quy trình thêm Project, Page, sửa Sidebar |
| [[04_Changelog/Version_History]] | Lịch sử các bản cập nhật lớn |

## Cấu trúc thư mục gốc

```
RobotWar05.github.io/
├── _includes/          ← Component: header, footer, head, scripts, home_overlay
├── _layouts/           ← Layout: default.html (bộ khung bao toàn trang)
├── index.html          ← Trang Home + Projects (Jekyll Frontmatter)
├── Resume.html         ← Trang Resume PDF (Jekyll Frontmatter)
├── Contact.html        ← Trang Contact (Jekyll Frontmatter)
├── assets/             ← CSS, JS, Font, PDF
├── images/             ← Ảnh (bg.jpg, me.JPEG, project images)
├── my_web/             ← Vault Obsidian này
└── README.md           ← Điểm vào cho developer mới
```

> [!warning] Chú ý khi test local
> Jekyll cần build mới hiển thị được. Mở `index.html` trực tiếp bằng trình duyệt sẽ hiện trang trắng vì chưa xử lý Liquid template. Cách test: push lên GitHub hoặc chạy `jekyll serve` local.
