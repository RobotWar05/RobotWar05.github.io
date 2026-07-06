---
title: Hướng Dẫn Thêm Mới & Sửa Đổi
tags: [guide, development]
---

# 🛠️ Hướng Dẫn Thêm Mới & Sửa Đổi

## 1. Sửa thông tin Sidebar (tên, ảnh, chuyên ngành)

→ Mở `_includes/header.html`. Thay đổi ở đây áp dụng **cho tất cả trang cùng lúc**.

Không sửa trực tiếp trong `index.html`, `Resume.html` hay `Contact.html`.

---

## 2. Sửa link footer (GitHub, LinkedIn, Email)

→ Mở `_includes/footer.html`.

---

## 3. Thêm Project mới vào trang chủ

→ Mở `index.html`, tìm section `<!-- Two -->`, thêm một `<article>` theo template:

```html
<article class="col-6 col-12-xsmall work-item">
    <a href="LINK_DEMO" class="image fit thumb">
        <img src="LINK_ANH" alt="" />
    </a>
    <h3 style="font-family:verdana;"><font color="black"><u>TÊN DỰ ÁN</u></font></h3>
    <p><font color="black">Mô tả ngắn gọn 1 câu.<br/>
    <ul>
        <li><p>Bullet 1</p></li>
        <li><p>Bullet 2</p></li>
    </ul></font></p>
    <code><font color="Red">Tech1</font></code>
    <code><font color="Red">Tech2</font></code>
</article>
```

> [!tip] Giới hạn: mỗi hàng 2 project (`col-6`). Thêm nhiều hơn 6 project → trang dài, nên cân nhắc giữ ~6 nổi bật nhất.

---

## 4. Tạo trang HTML mới

1. Tạo file `TenTrang.html` ở **thư mục gốc** (cùng cấp với `index.html`).
2. Dán Frontmatter vào dòng đầu:

```yaml
---
layout: default
title: "Nguyen Viet Hoang Luong: Tên Trang"
---
```

3. Viết nội dung HTML bên dưới (KHÔNG cần `<html>`, `<head>`, `<body>`).
4. Nếu cần CSS riêng cho trang, thêm `extra_head` vào Frontmatter:

```yaml
extra_head: |
  <style>
    .custom-class { color: red; }
  </style>
```

---

## 5. Thay ảnh đại diện

1. Đặt file ảnh mới vào thư mục `images/`.
2. Sửa tên file tại **2 chỗ** trong `_includes/header.html` và `_includes/home_overlay.html`.
3. Điều chỉnh `object-position` trong `assets/css/main.css` nếu tiêu điểm mặt bị lệch.

---

## 6. Thêm CSS toàn cục

→ Mở `assets/css/main.css`. Thêm vào cuối file, dưới comment `/* Custom Overrides */`.

> [!danger] Không xóa các rule sau trong main.css
> - `html { overflow-y: scroll; }` → xóa sẽ gây giật lề khi chuyển trang
> - `.image.avatar { aspect-ratio: 1/1; overflow: hidden; }` → xóa sẽ ảnh bị méo oval
> - `#main { max-width: none; }` → xóa sẽ nội dung bên phải co lại
