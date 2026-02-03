# 🚲 BikeMarket – Nền tảng mua bán xe đạp cũ có kiểm định

## 📌 Giới thiệu
**BikeMarket** là nền tảng trung gian giúp kết nối **người mua – người bán xe đạp cũ**, có hỗ trợ **kiểm định chất lượng xe**, **đặt cọc – giao dịch an toàn** và **đánh giá uy tín người bán**.

Mục tiêu của hệ thống:
- Minh bạch thông tin xe đạp cũ
- Giảm rủi ro trong mua bán
- Tăng độ tin cậy thông qua kiểm định & đánh giá

---

## 👥 Các vai trò trong hệ thống

### 🧑‍💼 Seller (Người bán)
**Chức năng chính:**
- Đăng tin bán xe:
  - Upload hình ảnh, video
  - Mô tả chi tiết xe (loại xe, hãng, kích thước khung, tình trạng, giá…)
- Quản lý tin đăng:
  - Chỉnh sửa thông tin
  - Ẩn tin
  - Xóa tin
- Nhận và trả lời tin nhắn từ người mua
- Quản lý đơn đặt mua / đơn đặt cọc
- Xem đánh giá và điểm uy tín từ người mua

---

### 🧑 Buyer (Người mua)
**Chức năng chính:**
- Đăng ký / đăng nhập tài khoản
- Tìm kiếm và lọc xe theo:
  - Loại xe
  - Khoảng giá
  - Hãng xe
  - Kích thước khung
  - Tình trạng xe
- Xem chi tiết xe:
  - Hình ảnh, video
  - Mô tả chi tiết
  - Lịch sử sử dụng (nếu có)
  - Trạng thái kiểm định
- Nhắn tin / chat với người bán
- Đặt mua / đặt cọc xe
- Đánh giá người bán sau khi giao dịch hoàn tất
- Lưu xe yêu thích (Wishlist)

---

### 🧑‍🔧 Inspector (Người kiểm định)
**Chức năng chính:**
- Kiểm tra tình trạng xe:
  - Khung xe
  - Hệ thống phanh
  - Hệ thống truyền động
- Gắn nhãn **“Xe đã kiểm định”**
- Upload báo cáo kiểm định chi tiết
- Hỗ trợ giải quyết tranh chấp giữa người mua và người bán

---

### 🛠 Admin (Quản trị viên)
**Chức năng chính:**
- Quản lý người dùng:
  - Buyer
  - Seller
  - Inspector
- Kiểm duyệt tin đăng bán xe
- Xử lý báo cáo vi phạm và tranh chấp
- Quản lý danh mục xe, thương hiệu
- Quản lý giao dịch và phí dịch vụ
- Thống kê và báo cáo hệ thống

---

## ⭐ Tính năng mở rộng (Future Scope)
- 🤖 Chatbot chăm sóc khách hàng
- 🚚 Kết nối đơn vị logistics (vận chuyển xe)
- 💳 Thanh toán online (VNPay, Momo, Stripe…)

---

## 🧱 Công nghệ sử dụng (dự kiến)

### Frontend
- React (Vite)
- Tailwind CSS
- React Router
- Axios

### Backend
- Node.js / Spring Boot
- RESTful API
- JWT Authentication

### Database
- MySQL / PostgreSQL

---
BikeMarket
├── frontend
│ ├── src
│ └── public
├── backend
│ ├── src
│ └── resources
├── docs
└── README.md

## 📂 Cấu trúc thư mục (tham khảo)

---

## 🎯 Mục tiêu dự án
- Áp dụng kiến thức lập trình Web Fullstack
- Xây dựng hệ thống nhiều vai trò (Role-based Access)
- Mô phỏng quy trình mua bán xe đạp cũ trong thực tế
- Dễ dàng mở rộng và tích hợp dịch vụ bên thứ ba

---

## 📌 Ghi chú
Dự án được xây dựng phục vụ **mục đích học tập và nghiên cứu**, có thể mở rộng thành sản phẩm thực tế trong tương lai.

