---
title: Strata Theme CSS Quirks & Layout Troubleshooting
tags: [guide, css, strata, layout, troubleshooting]
---

# 🐛 Strata Theme CSS Quirks

Khi làm việc với HTML5 UP Strata theme, có một số vấn đề về layout (đặc biệt là căn lề) cần cực kỳ lưu ý để tránh việc debug sai hướng và mất bối cảnh (context).

## 1. Lỗi thò thụt (Misalignment) của thẻ `<p>`

**Triệu chứng:**
Khi bạn tạo một khối HTML tùy chỉnh (như một lưới Grid chứa các cột, mỗi cột có `<h4>` làm tiêu đề và `<p>` làm nội dung), bạn sẽ thấy chữ của thẻ `<p>` thường xuyên bị đẩy lệch sang phải so với thẻ `<h4>`, dù đã dùng `text-align: left`.

**Nguyên nhân gốc rễ (Root Cause):**
File `main.css` của Strata là một hệ thống hơn 3000 dòng code. Trong đó:
- Thẻ `<p>` mặc định bị ép `margin: 0 0 2em 0;`.
- Tùy vào độ phân giải hoặc khối cha, các phần tử bị Strata lén thêm `padding-left` hoặc ép `text-align: center`.
- Hệ quả: Nếu chỉ dùng `text-align: left !important` hoặc `align-items: flex-start` cho thẻ bọc ngoài, trình duyệt sẽ đẩy "cái khung" của thẻ `<p>` về bên trái, nhưng phần chữ thực tế vẫn bị đẩy lệch vào trong do các giá trị margin/padding thừa kế từ `main.css`.

**Giải pháp dứt điểm (Defensive CSS):**
Luôn phải thực hiện **Hard Reset** (xóa sổ triệt để) các thuộc tính rác trước khi căn lề.

```css
/* 1. Bọc Flexbox dọc để khóa cứng tọa độ trục X */
.my-custom-container {
    display: flex; 
    flex-direction: column; 
    align-items: flex-start; /* Ép mọi phần tử con bám chặt lề trái */
}

/* 2. Ghi đè tuyệt đối các thuộc tính ẩn của Strata */
.my-custom-container p, 
.my-custom-container h4 {
    margin: 0 !important;  /* Bắt buộc phải có !important */
    padding: 0 !important; /* Bắt buộc phải có !important */
    text-align: left !important;
}
```

## 2. Bẫy CSS Grid kết hợp `white-space: nowrap`

**Triệu chứng:**
Khi dùng CSS Grid để chia cột đều nhau `grid-template-columns: repeat(4, 1fr);`, nếu bạn ngăn chữ rớt dòng bằng `white-space: nowrap`, các cột lập tức bị to nhỏ không đều nhau làm phá vỡ tỷ lệ đối xứng của giao diện.

**Nguyên nhân:**
Thuộc tính `1fr` trong Grid cho phép cột co nhỏ lại nhưng không nhỏ hơn `min-content`. Khi nội dung bị cấm rớt dòng (`nowrap`), `min-content` của phần nội dung đó dài ra, khiến Grid tự động nới rộng cột đó và bóp méo các cột còn lại.

**Giải pháp:**
Sử dụng `minmax` để tạo ra một giới hạn dưới cố định, đảm bảo mọi cột đều chạm đáy cùng một lúc khi màn hình thu nhỏ.
```css
/* Đảm bảo 4 cột luôn bằng nhau và tối thiểu 250px */
grid-template-columns: repeat(4, minmax(250px, 1fr));
```

## 3. Bài học về Quy trình Debug (Methodology Lesson)

**Lỗi sai cực kỳ nguy hiểm:**
Khi thấy giao diện bị lệch, lập trình viên (hoặc AI) thường mắc bệnh "tự cao" và xu hướng "đoán bệnh" (ví dụ: tự đoán là do `text-align` hay lưới Grid) thay vì đi tìm bằng chứng cụ thể. Việc cắm đầu vào viết thêm CSS để vá víu (chữa triệu chứng) mà **chưa kiểm tra thật kỹ** mã nguồn gốc sẽ dẫn đến vòng lặp thử-sai mệt mỏi, làm phình to code và đẻ ra lỗi mới.

**Quy trình chuẩn mực (Best Practice):**
1. **Không bao giờ suy đoán (No Assumptions):** Bỏ ngay tư duy tự cao cho rằng mình đã nắm rõ cách hoạt động của template.
2. **Truy vết tận gốc (Inspect the Root Cause):** Luôn phải dùng lệnh tìm kiếm (grep/search) đọc trực tiếp file CSS gốc (như `main.css`) để xem chính xác dòng code nào của theme đang ép `padding`, `margin` hay `text-align` lên phần tử.
3. **Kiểm tra và thử nghiệm kỹ lưỡng:** Chỉ áp dụng bản vá khi đã nhìn thấy rõ nguyên nhân gốc rễ, và phải dọn dẹp (Hard Reset) sạch sẽ các thuộc tính rác trước khi ép layout mới. Tránh việc sửa xong không kiểm tra lại cẩn thận rồi vội vàng báo cáo.
