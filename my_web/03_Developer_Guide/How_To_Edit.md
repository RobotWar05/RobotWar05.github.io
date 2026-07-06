---
title: HÆ°á»›ng Dáº«n ThÃªm & Sá»­a Dá»± Ãn Má»›i
tags: [guide, edit, tutorial]
---

# 
à¥ ï¸ Quy TrÃ¬nh ThÃªm Sá»­a Dá»± Ãn

## BÆ¿á»›c 1: ThÃªm HTML vÃ o mÃ n hÃ¬nh chÃ­nh
Má»Ÿ file `index.html` strong, tÃ¬m khu vá»±c id `two` (Recent Work). ThÃªm khá»‘i `<article class="proj-card">` nhÆ° sau:

```html
<article class="proj-card">
    <img src="pictures/Path_to_thumbnail.jpg" alt="" />
    <div class="proj-body">
        <h3>TÃªn Dá»± Ãn Cá»§a Báº¡n</h3>
        <p class="proj-date">2026</p>
        <div class="proj-tags"><span>C++</span><span>Python</span></div>
        <p class="proj-desc">MÃ´ táº£ ngáº¯n gá»n hiá»ƒn thá»‹ ngay trÃªn lÆ°á»›i...</p>
        <p class="proj-details" style="display:none;">
            Chi tiáº¿t quÃ¡ trÃ¬nh lÃ m, hiá»ƒn thá»‹ trong popup Modal...
        </p>
    </div>
</article>
```

## BÆ°á»›c 2: Náº¡p Media vÃ o há»‡ thá»‘ng Modal
KÃ©o xuá»‘ng cuá»‘i trang `index.html`/ thÃªm Ä‘oáº¡n biáº¿n `const projectMedia = { ... }`. Khai bÃ¡o dá»± Ã¡n má»›i vÃ o Ä‘Ã³.

> [!important] Quy táº¯c Key
> Key trong Object pháº£i lÃ  má»™t pháº§n hoáº­c toÃ n bá» chuá»—i náº±m trong thÄ» `<h3>` cá»§a dá»° Ã¡n Ä‘á»ƒ JS tá»± Ä‘á»™ng quÃ©t trÃ¹ng khá»›p.

```javascript
"TÃªn Du TÃºn": {
    thumb: "pictures/folder/thumb.jpg", // áº¡nh náº¡p tá»± Ä‘á»™ng ra ngoÃ i trang chÃ­nh
    media: [ // CÃ¡c media hiá»ƒn thá»‹ trong cá»™t trÃ¡i cá»§a Modal
        {type: 'img', src: 'pictures/folder/1.jpg'},
        {type: 'img', src: 'pictures/folder/2.png'},
        {type: 'video', src: 'pictures/folder/vid.mp4'}
    ]
}
```

## LÆ°u Ã½ vá» Tráº¡ng thÃ¡i "Coming Soon"
Náº¿u báº¡n táº¡o tháº» HTML cho dá»± Ã¡n mÃ  chÆ°a náº¡p mÃ³ vÃ o `projectMedia` (hoáº­c náº¡p mÃ  máº£ng `media` rá»—ng), há»‡ thá»‘ng JS sáº½ thÃ´ng minh tá»± Ä‘á»™ng xuáº¥t ra má»™t mÃ n hÃ¬nh Coming Soon trong Modal Ä‘á» ngÆ°á»i xem biáº¿t lÃ  dá»± Ã¡n nÃ y Ä‘ang Ä‘Æ°á»£c cáº­p nháº­t.
## Kiến trúc Single Page Application (SPA)
Hiện tại dự án đã chuyển sang mô hình SPA gốc (Vanilla JS) không cần Framework:
- Toàn bộ nội dung nằm ở index.html.
- Các trang được chia thành từng <section> (ví dụ: <!-- HOME VIEW -->, <!-- RESUME VIEW -->).
- Bạn có thể chỉnh sửa trực tiếp từng <section> trong file index.html. 
- Nếu muốn xem một trang bị ẩn để code, hãy tìm thẻ <section style="display:none;"> và tạm thời xóa chữ display:none; đi.

