---
title: Hướng Dẫn Thêm & Sửa Dự Án Mới
tags: [guide, edit, tutorial]
---

# 
ॠ️ Quy Trình Thêm Sửa Dự Án

## Bƿớc 1: Thêm HTML vào màn hình chính
Mở file `index.html` strong, tìm khu vực id `two` (Recent Work). Thêm khối `<article class="proj-card">` như sau:

```html
<article class="proj-card">
    <img src="pictures/Path_to_thumbnail.jpg" alt="" />
    <div class="proj-body">
        <h3>Tên Dự Án Của Bạn</h3>
        <p class="proj-date">2026</p>
        <div class="proj-tags"><span>C++</span><span>Python</span></div>
        <p class="proj-desc">Mô tả ngắn gọn hiển thị ngay trên lưới...</p>
        <p class="proj-details" style="display:none;">
            Chi tiết quá trình làm, hiển thị trong popup Modal...
        </p>
    </div>
</article>
```

## Bước 2: Nạp Media vào hệ thống Modal
Kéo xuống cuối trang `index.html`/ thêm đoạn biến `const projectMedia = { ... }`. Khai báo dự án mới vào đó.

> [!important] Quy tắc Key
> Key trong Object phải là một phần hoậc toàn bỏ chuỗi nằm trong thĻ `<h3>` của dỰ án để JS tự động quét trùng khớp.

```javascript
"Tên Du Tún": {
    thumb: "pictures/folder/thumb.jpg", // ạnh nạp tự động ra ngoài trang chính
    media: [ // Các media hiển thị trong cột trái của Modal
        {type: 'img', src: 'pictures/folder/1.jpg'},
        {type: 'img', src: 'pictures/folder/2.png'},
        {type: 'video', src: 'pictures/folder/vid.mp4'}
    ]
}
```

## Lưu ý về Trạng thái "Coming Soon"
Nếu bạn tạo thẻ HTML cho dự án mà chưa nạp mó vào `projectMedia` (hoậc nạp mà mảng `media` rỗng), hệ thống JS sẽ thông minh tự động xuất ra một màn hình Coming Soon trong Modal đề người xem biết là dự án này đang được cập nhật.