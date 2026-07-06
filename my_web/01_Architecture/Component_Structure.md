---
title: Kiến Trúc Component (Jekyll)
tags: [architecture, jekyll]
---

# 🏗️ Kiến Trúc Component (Jekyll)

## Nguyên lý hoạt động

GitHub Pages mặc định chạy Jekyll. Jekyll cho phép tách HTML thành các mảnh (include) và bộ khung (layout). Khi push code lên GitHub, Jekyll tự lắp ráp các mảnh thành trang HTML hoàn chỉnh.

## Luồng lắp ráp

```
[index.html / Resume.html / Contact.html]
         │  có Frontmatter: layout: default
         ▼
[_layouts/default.html]  ← bộ khung <html><body>
         │  chứa: {% include head.html %}
         │          {% include home_overlay.html %}  (chỉ trên index.html)
         │          {% include header.html %}
         │          {{ content }}  ← nội dung của trang cụ thể được bơm vào đây
         │          {% include footer.html %}
         │          {% include scripts.html %}
         ▼
[Trang HTML hoàn chỉnh được render ra browser]
```

## Vai trò từng file trong `_includes/`

| File | Nội dung |
|---|---|
| `head.html` | `<title>`, meta, `<link>` CSS, favicon |
| `header.html` | Toàn bộ sidebar trái: avatar, tên, chuyên ngành |
| `footer.html` | Các icon liên kết: GitHub, LinkedIn, Email |
| `scripts.html` | Nhúng jQuery + JS logic chuyển cảnh Home/Portfolio |
| `home_overlay.html` | Màn hình Apple Hero (CSS + HTML của `#home-landing`) |

## Frontmatter bắt buộc

Mỗi trang HTML phải có khối này ở dòng đầu tiên:

```yaml
---
layout: default
title: "Tiêu đề trang"
---
```

Nếu trang cần thêm CSS riêng (như Contact.html), dùng biến `extra_head`:

```yaml
---
layout: default
title: "..."
extra_head: |
  <style>
    .my-class { ... }
  </style>
---
```

> [!danger] Không xóa Frontmatter `---`
> Nếu xóa hoặc sai cú pháp YAML, Jekyll sẽ không áp layout → trang hiển thị không có CSS, không có Sidebar.
