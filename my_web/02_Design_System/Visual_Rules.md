---
title: Quy Tắc Thiết Kế (Design System)
tags: [design, css, rules]
---

# 🎨 Quy Tắc Thiết Kế (Design System)

## A. Bố cục tổng thể (Layout)

| Vùng | Giá trị cứng |
|---|---|
| Sidebar (`#header`) | `width: 35%`, `position: fixed`, neo trái |
| Nội dung chính (`#main`) | `margin-left: 35%`, `width: calc(100% - 35%)` |
| `max-width` của `#main` | `none` — KHÔNG giới hạn, để trải full màn hình |
| Padding `#main` | `padding: 2em 4em 4em 4em` — chuẩn chung 3 trang |

> [!danger] Quy tắc bắt buộc
> Không đặt `max-width` lên `#main`. Lý do: trang trông bị hụt, phần phải trống trải. Đã từng xảy ra và phải sửa.

---

## B. Ảnh đại diện (Avatar)

**Vấn đề gốc:** Ảnh gốc là JPEG hình chữ nhật. Nếu chỉ dùng `border-radius: 100%` → hình bầu dục (quả trứng).

**Công thức CSS chuẩn:**
```css
.image.avatar {
    border-radius: 100%;
    overflow: hidden;      /* BẮT BUỘC: clip ảnh vào khung tròn */
    aspect-ratio: 1/1;     /* BẮT BUỘC: ép khung thành hình vuông */
}
.image.avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;         /* crop tự động vào tâm */
    object-position: center 15%; /* đẩy tiêu điểm lên phần khuôn mặt */
    transform: scale(2.2);     /* phóng to cận mặt */
}
```

> [!warning] Nếu muốn thay giá trị scale
> Giảm xuống dưới 1.5 → thấy cả người. Tăng lên trên 2.5 → chỉ thấy một phần mặt. Hiện tại 2.2 là cân bằng tốt nhất cho ảnh `me.JPEG`.

---

## C. Hiệu ứng chuyển cảnh (Curtain Reveal)

**Vấn đề gốc:** Dùng `opacity` để ẩn/hiện → hai lớp đè nhau → ám chữ (ghosting).

**Giải pháp: Kéo Rèm (Curtain)**
- `#home-landing` là một lớp `fixed`, phủ toàn màn hình (`z-index: 10000`).
- Mặc định: tấm rèm đã bay lên ngoài màn hình (`transform: translateY(-100vh)`).
- Khi ở Home (`body.is-home`): tấm rèm trượt xuống che toàn trang (`translateY(0)`).
- Khi nhấn nút: xóa class `is-home` → tấm rèm bay ngược lên trời.
- Hai lớp nội dung **không bao giờ đè nhau** → không ghost.

```css
#home-landing {
    transform: translateY(-100vh); /* mặc định: ẩn lên trên */
    transition: transform 0.8s cubic-bezier(0.77, 0, 0.175, 1);
}
body.is-home #home-landing {
    transform: translateY(0); /* hiển thị khi ở Home */
}
```

---

## D. Apple Hero (Màn hình chờ)

| Thuộc tính | Giá trị | Ghi chú |
|---|---|---|
| Font family | `-apple-system, BlinkMacSystemFont, "Segoe UI"` | Stack Apple native |
| Title font-size | `5em` | Chữ siêu to, trọng tâm Apple style |
| Subtitle color | `#a1a1a6` | Apple gray chính thống |
| Nút CTA | `border-radius: 50px` (Pill shape) | Liquid Glass với `backdrop-filter: blur(20px)` |
| Nền | Sao chép y hệt nền Strata gốc (`bg.jpg` + `overlay.png`) | Tránh nền đen khi rèm đang đóng |

---

## E. Hiển thị PDF (Resume)

| Vấn đề | Giải pháp |
|---|---|
| Viền đen 2 bên khi zoom cố định | Dùng `#view=FitH` thay vì `#zoom=120` |
| PDF quá rộng trên màn hình lớn | Bọc iframe trong `div` có `max-width: 980px` |

```html
<div style="max-width: 980px; margin: 0 auto; overflow: hidden;">
    <iframe src="file.pdf#view=FitH" width="100%" height="1150px" style="border:none; display:block;"></iframe>
</div>
```

---

## F. Chống giật lề khi chuyển trang (Scrollbar Shift)

**Vấn đề:** Trang có ít nội dung (Contact) không có scrollbar → viewport tự rộng thêm ~15px → Sidebar bị dịch phải.

**Giải pháp:** Luôn ép scrollbar xuất hiện:
```css
/* trong assets/css/main.css */
html {
    overflow-y: scroll; /* BẮT BUỘC — không xóa */
}
```
