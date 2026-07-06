# Tái Cấu Trúc Kiến Trúc (Architecture Refactoring) cho AI-Assisted SPA

Bối cảnh: Hiện tại, toàn bộ giao diện SPA đang bị dồn vào một file `index.html` khổng lồ. Mặc dù chạy rất mượt cho người dùng (tránh chớp màn hình), nhưng lại tạo ra **"Điểm mù Context" (Context Window limits)** rất lớn cho các AI Assistant (LLM) trong quá trình bảo trì code, dẫn đến tỷ lệ Halucination (bịa code, sửa nhầm dòng) cao.

Mục tiêu: Đạt được sự cân bằng giữa **Trải nghiệm mượt mà của người dùng (SPA)** và **Môi trường code module hóa cho AI**.

## Các Thao Tác Cơ Bản (Sẽ thực thi ngay)
1. Tạo thư mục `my_web/05_Backup/`.
2. Di chuyển các file tĩnh `Contact.html` và `Resume.html` đang thừa thãi ở ngoài root vào thư mục dự phòng này để tránh AI đọc nhầm.

## Đề Xuất Giải Pháp Kiến Trúc (Cần bạn phản hồi)

Tôi đề xuất 2 mô hình sau để giải quyết bài toán "Tách file cho AI dễ hiểu nhưng vẫn gộp thành SPA để chạy mượt". 

### Option 1: Mô Hình Fetch API (Client-Side Routing)
Tách các `<section>` trong `index.html` thành các file độc lập (`components/contact.html`, `components/resume.html`). File `index.html` chỉ chứa bộ khung (Header, Footer). File `spa.js` sẽ dùng `fetch()` để tự động gọi nội dung của các file component đó và đắp vào trang khi người dùng bấm nút.

- **Ưu điểm:** Tách file vật lý thật 100%. AI (như tôi) chỉ cần mở đúng file `contact.html` (chỉ khoảng 50 dòng) để sửa. Tránh hoàn toàn Halucination.
- **Nhược điểm:** Trình duyệt bảo mật rất nghiêm ngặt, lệnh `fetch()` sẽ báo lỗi CORS nếu bạn chỉ click đúp mở file `index.html` (giao thức `file:///`). Bạn **bắt buộc** phải dùng Extension "Live Server" trên VSCode (hoặc 1 local server tương tự) để chạy web trên máy tính.

### Option 2: Mô Hình "Mini-Compiler" (Khuyên dùng cho Agentic Coding)
Chúng ta thiết lập một thư mục `src/` chứa các file mảnh (`contact.html`, `resume.html`, `home.html`, `style.css`). 
File `index.html` ngoài root sẽ là file **chỉ đọc (Read-only)**, cấm AI và người đụng vào.
Tôi sẽ viết một Script siêu nhỏ (ví dụ `build.js` chạy bằng Node.js hoặc Python). 
Mỗi khi tôi hoặc bạn sửa một tính năng trong file mảnh (`src/contact.html`), thao tác cuối cùng là chạy lệnh `node build.js`. Hệ thống sẽ tự động bưng các file mảnh này, ghép lại thành file `index.html` nguyên khối SPA.

- **Ưu điểm:** Khắc phục nhược điểm của Option 1 (Chạy được file `index.html` bằng cách click đúp bình thường, không lo CORS). Trải nghiệm SPA vẫn mượt mà tuyệt đối. AI vẫn được làm việc trên các file cực ngắn.
- **Nhược điểm:** Có thêm 1 bước "Build" (Gõ dòng lệnh). Nhưng bạn không cần lo, vì các AI (như tôi) hoàn toàn có thể tự động gõ lệnh này sau khi code xong.

---

## 🙋‍♂️ Open Questions cho Bạn (Vui lòng chọn)

1. Bạn có thường xuyên chạy web bằng Extension "Live Server" của VSCode không? Nếu có, **Option 1** là nhẹ nhàng nhất.
2. Nếu bạn muốn web có thể chạy ở bất cứ đâu (kể cả click đúp file) và sẵn sàng để AI tự chạy lệnh gộp file, hãy chọn **Option 2**.

Hãy cho tôi biết lựa chọn của bạn (Option 1 hay Option 2) để tôi lên chi tiết kỹ thuật và thực thi!
