---
title: Lá»‹ch Sá»­ PhiÃªn Báº£n
tags: [changelog]
---

# ðŸ“œ Lá»‹ch Sá»­ PhiÃªn Báº£n

## v3.0 — Native Single Page Application (SPA) & Cleanup
- **Native SPA Architecture:** Gộp hoàn toàn Resume.html và Contact.html vào chung index.html (chỉ dùng thẻ <section> ẩn/hiện bằng Javascript spa.js), triệt tiêu 100% hiện tượng chớp trắng màn hình khi chuyển trang mà không cần dùng đến React hay PJAX.
- **Bảo toàn CSS Gốc:** Loại bỏ các thẻ <div> bọc ngoài, giữ nguyên cấu trúc #main > section để tái sử dụng toàn bộ mã CSS mạnh mẽ của Strata (khoảng cách, đường viền).
- **Design System Fixes:** Đồng bộ nút bấm Đen/Trắng (High Contrast) trên toàn bộ trang. Chỉnh kích thước icon thành hình vuông tinh tế, sửa các lỗi mã hóa Font (encoding).
- **Dọn dẹp hệ thống:** Loại bỏ hoàn toàn các thư mục/file rác không còn tác dụng sau khi đã quy về 1 trang duy nhất.

## v2.0 â€” TÃ¡i cáº¥u trÃºc Component + Knowledge Base
- **Jekyll Component:** TÃ¡ch Sidebar, Footer, Head, Scripts, Home Overlay thÃ nh 5 file riÃªng trong `_includes/`. 3 trang HTML chá»‰ cÃ²n chá»©a ná»™i dung thuáº§n tÃºy.
- **Obsidian Vault:** Táº¡o há»‡ thá»‘ng tÃ i liá»‡u `my_web/` vá»›i 4 nhÃ³m: Architecture, Design System, Developer Guide, Changelog.
- **README.md:** Táº¡o file hÆ°á»›ng dáº«n táº¡i thÆ° má»¥c gá»‘c cho ngÆ°á»i Ä‘áº¿n sau.

## v1.2 â€” Sá»­a lá»—i giao diá»‡n (Edge Cases)

| Lá»—i | NguyÃªn nhÃ¢n | CÃ¡ch sá»­a |
|---|---|---|
| áº¢nh bá»‹ báº§u dá»¥c | áº¢nh JPEG hÃ¬nh chá»¯ nháº­t + `border-radius: 100%` khÃ´ng Ä‘á»§ | ThÃªm `aspect-ratio: 1/1` + `overflow: hidden` |
| Sidebar dá»‹ch pháº£i khi sang Contact | Trang Ã­t ná»™i dung â†’ scrollbar biáº¿n máº¥t â†’ viewport rá»™ng thÃªm 15px | `html { overflow-y: scroll; }` |
| PDF cÃ³ 2 viá»n Ä‘en 2 bÃªn | DÃ¹ng `#zoom=120` cá»‘ Ä‘á»‹nh â†’ khÃ´ng phÃ¹ há»£p má»i mÃ n hÃ¬nh | Äá»•i sang `#view=FitH` + bá»c `max-width: 980px` |
| Chá»¯ Sidebar bá»‹ nhá» hÆ¡n Resume | CÃ³ `font-size: 0.85em` inline trÃªn `<span>` | XÃ³a tháº» `<span>` inline, Ä‘á»“ng bá»™ HTML y há»‡t Resume |
| Pháº§n pháº£i bá»‹ co láº¡i | `main.css` cÃ³ `max-width: 50em` trÃªn `#main` | Override: `max-width: none` |

## v1.1 â€” Apple Hero & Curtain Reveal
- **Apple Hero Landing:** Thiáº¿t káº¿ láº¡i mÃ n hÃ¬nh chá»: chá»¯ to 5em, subtitle Apple gray `#a1a1a6`, nÃºt Pill Liquid Glass vá»›i `backdrop-filter: blur`.
- **Curtain Reveal:** Bá» hiá»‡u á»©ng `opacity` (gÃ¢y Ã¡m chá»¯/ghosting). DÃ¹ng `translateY(-100vh)` â€” táº¥m rÃ¨m bay lÃªn/xuá»‘ng, hai lá»›p ná»™i dung khÃ´ng bao giá» chá»“ng nhau.

## v1.0 â€” Khá»Ÿi táº¡o Portfolio
- Chuyá»ƒn Ä‘á»•i template Strata (html5up.net) thÃ nh Portfolio cÃ¡ nhÃ¢n vá» Embedded & Automation Robotics.
- ThÃªm 6 project, thÃªm trang Resume (PDF), thÃªm trang Contact.

