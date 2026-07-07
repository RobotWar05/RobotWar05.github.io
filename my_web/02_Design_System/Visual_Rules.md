---
title: Quy Tắc Thiết Kế
tags: [design, css, rules]
---

# Quy Tắc Thiết Kế

## 1. Hướng thiết kế

Portfolio này phục vụ người xem kỹ thuật: embedded systems, robotics, automation, control. Giao diện cần nghiêm túc, rõ cấu trúc, không dùng hiệu ứng trang trí quá tay.

Ưu tiên:

- Dễ scan project.
- Project đầu phải nổi bật hơn project phụ.
- Từ ngữ chuyên nghiệp, tránh cụm yếu như `Sensor Experiments`.
- Popup phải đọc được ngay: title, scope, date, nội dung, tags.

## 2. Layout tổng thể

| Vùng | Quy tắc |
|---|---|
| Sidebar `#header` | Desktop fixed bên trái, width theo Strata gốc |
| Main `#main` | Nội dung chính bên phải |
| Footer icon | Desktop fixed gần đáy sidebar |
| Mobile | Header gọn, avatar 65px, chỉ hiển thị name + role |

Không sửa `main.css` nếu chưa có lý do rõ. Phần override chính nằm trong `assets/css/portfolio.css`.

## 3. Sidebar profile

Markup trong `index.html`:

```html
<h1 class="profile-summary">
  <strong>Nguyen Viet Hoang Luong</strong>
  <span class="profile-role">Embedded Systems</span>
  <span class="profile-degree">B.E. in Control Engineering &amp; Automation</span>
  <span class="profile-school">Hanoi University of Mining and Geology</span>
  <span class="profile-degree">AI in Action Engineering</span>
  <span class="profile-school">VinUniversity</span>
</h1>
```

Quy tắc:

- Không dùng nhiều `<br/>` để căn khoảng cách.
- Dùng các span có class để CSS kiểm soát spacing.
- Desktop: avatar và text là cụm grid, được đẩy lên nhẹ bằng `transform: translateY(-2.4rem)`.
- Mobile: bắt buộc reset `transform: none !important`.

## 4. Avatar

Avatar dùng ảnh `pictures/me.JPEG`.

Quy tắc crop:

```css
.home-avatar {
  object-fit: cover;
  object-position: center 15%;
  transform: scale(2.2);
}
```

Với sidebar:

- Desktop avatar khoảng 100px theo Strata gốc.
- Mobile avatar 65px.
- Không tăng kích thước để sửa vị trí; nếu lệch, sửa layout/offset.

## 5. Intro ROBOTWAR05

Intro nằm trong `index.html`:

```html
<div id="intro-preloader">
  <div class="glitch-wrapper">
    <div class="glitch-text" data-text="ROBOTWAR05">ROBOTWAR05</div>
  </div>
</div>
```

CSS nằm trong `assets/css/home-overlay.css`.

Quy tắc:

- Nền intro dùng cùng texture và ảnh nền với home để không lệch tone.
- Chữ phải hiện đầy đủ trước khi fade out.
- Chữ dùng text-shadow nhiều lớp để tạo cảm giác 3D dày.
- Có `prefers-reduced-motion` để tắt animation khi người dùng giảm motion.

## 6. Home landing

`#home-landing` là màn chào chính. Khi body có `is-home`, landing phủ toàn màn hình. Khi click `Explore Projects`, class `is-home` bị remove.

Không dùng opacity chồng lớp cho main content vì dễ tạo ghosting. Dùng curtain transition `translateY`.

## 7. Project cards

Nội dung project nằm trong `components/home.html`.

Quy tắc title:

```html
<h3>
  ESP32 Robot
  <span class="desktop-text">Webserver &amp; ESP32-CAM</span>
  <span class="yr">Aug 2025</span>
</h3>
```

- Text node đầu là title chính.
- `.desktop-text` là scope/subtitle, không nên bắt đầu bằng dấu `-`.
- `.yr` là thời gian.
- Trên mobile, `.desktop-text` bị ẩn ở card để card gọn hơn.

## 8. Project wording

Không dùng các cụm làm project yếu đi:

| Tránh | Dùng |
|---|---|
| `Sensor Experiments` | `Sensor Nodes` |
| `nghịch/test` | `prototype`, `validated`, `tested on hardware` |
| `AI Engineer` nếu chưa đúng vai trò | `Applied AI Engineering training` |
| Claim độ chính xác chưa đo | Mô tả giới hạn thật của hệ thống |

Project ưu tiên ở đầu:

1. PickPilot - 3DoF Suction Robotic Arm.
2. Ball-and-Beam PID Balancing System.
3. ESP32 Robot Webserver & ESP32-CAM.
4. ESP-NOW Car & Custom Joystick.
5. ESP32 HMI & Sensor Nodes.

## 9. Popup modal

CSS chính trong `assets/css/portfolio.css`:

- `.modal-project-header`
- `.modal-project-title`
- `.modal-title-main`
- `.modal-title-scope`
- `.modal-project-date`

Quy tắc:

- Không render lại nguyên `<h3>` từ card.
- Date phải là dòng riêng.
- Scope phải là dòng riêng hoặc block riêng.
- Không để dấu `-` đứng cuối dòng.
- Ảnh/video trong modal dùng `object-fit: contain` và căn giữa.

## 10. Timeline

Timeline dùng biến CSS:

```css
.timeline {
  --timeline-line-left: 20px;
  --timeline-line-width: 4px;
  --timeline-line-center-offset: 2px;
  --timeline-content-left: 70px;
}
```

Không dùng phép chia CSS kiểu `var(--x) / 2` nếu không chắc browser hỗ trợ. Dùng biến offset rõ ràng.

## 11. Verification giao diện

Sau khi sửa giao diện, cần kiểm:

- Desktop `1365x768`.
- Mobile `390x844`.
- Popup ít nhất: `AI in Action`, `ESP32 Robot`, `ESP32 HMI`.
- Intro `ROBOTWAR05` fade out đúng.
- Không có `pageerror`.
- Không có response `404`.
