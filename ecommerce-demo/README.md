# E-commerce Demo

Ứng dụng bán hàng mẫu gồm Vue 3, Spring Boot 3 và PostgreSQL 16. Dự án minh họa luồng đọc sản phẩm từ database, phân trang và quản lý giỏ hàng tại trình duyệt.

## Chức năng

- Danh sách sản phẩm lấy từ PostgreSQL, phân trang 8 sản phẩm mỗi trang.
- Giao diện responsive: 2 cột trên mobile, 3 cột trên tablet và 4 cột trên desktop.
- Trạng thái loading, thông báo lỗi/thử lại và ảnh fallback.
- Giỏ hàng Pinia: thêm, tăng/giảm số lượng, xóa món và xóa toàn bộ.
- Badge tổng số lượng, tổng tiền VND và lưu giỏ trong `localStorage`.
- Backend health check, Product API dạng DTO và CORS cho `http://localhost:5173`.

Giỏ hàng chỉ lưu trong trình duyệt. Nút thanh toán chỉ hiển thị thông báo tính năng đang phát triển.

## Kiến trúc thư mục

```text
ecommerce-demo/
├── backend/                 Spring Boot, port 8080
│   └── src/main/java/...    controller, service, repository, DTO, CORS
├── frontend/                Vue 3 + Vite + Pinia + TailwindCSS, port 5173
│   └── src/                 pages, components, router, store, API client, util
├── db/init.sql              schema products và 10 sản phẩm mẫu
└── docker-compose.yml       PostgreSQL 16, port 5432
```

## Yêu cầu

- Docker Desktop có Docker Compose
- JDK 17 và Maven 3.9+
- Node.js 20+
- DBeaver nếu muốn xem database trực tiếp

Nếu Maven báo `JAVA_HOME environment variable is not defined correctly`, đặt JDK 17 cho terminal hiện tại (điều chỉnh đường dẫn theo máy):

```powershell
$env:JAVA_HOME = 'C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot'
```

## Khởi chạy

Mỗi phần nên chạy trong một terminal riêng.

### 1. Database

Tại thư mục `ecommerce-demo`:

```powershell
docker compose up -d
docker compose ps
```

Container `ecommerce-demo-postgres` cần có trạng thái `healthy`. `db/init.sql` tự chạy khi volume PostgreSQL được tạo lần đầu.

### 2. Backend

```powershell
cd backend
$env:JAVA_HOME = 'C:\Program Files\Eclipse Adoptium\jdk-17.0.17.10-hotspot'
mvn spring-boot:run
```

Backend chạy tại `http://localhost:8080`. Kiểm tra kết nối:

```powershell
Invoke-RestMethod http://localhost:8080/api/health
Invoke-RestMethod 'http://localhost:8080/api/products?page=0&size=8'
```

Các biến môi trường tùy chọn:

- `ECOMMERCE_DB_URL` — mặc định `jdbc:postgresql://localhost:5432/ecommerce_db`
- `ECOMMERCE_DB_USERNAME` — mặc định `postgres`
- `ECOMMERCE_DB_PASSWORD` — mặc định `postgres`
- `ECOMMERCE_SERVER_PORT` — mặc định `8080`

### 3. Frontend

```powershell
cd frontend
npm install
npm run dev
```

Mở `http://localhost:5173`. File `.env` đặt `VITE_API_URL=/api`; Vite proxy các request này sang backend tại port 8080. Sau khi đổi biến môi trường Vite, cần khởi động lại `npm run dev`.

## Kết nối DBeaver

| Trường | Giá trị |
| --- | --- |
| Driver | PostgreSQL |
| Host | `localhost` |
| Port | `5432` |
| Database | `ecommerce_db` |
| Username | `postgres` |
| Password | `postgres` |

Kiểm tra dữ liệu:

```sql
SELECT * FROM products ORDER BY id;
SELECT count(*) FROM products;
```

Kết quả mặc định có 10 sản phẩm.

## Kiểm tra nhanh

```powershell
curl.exe http://localhost:8080/api/health
curl.exe "http://localhost:8080/api/products?page=0&size=8"
curl.exe -i -H "Origin: http://localhost:5173" http://localhost:8080/api/products
```

Trên giao diện, thử thêm sản phẩm, mở `/cart`, thay đổi số lượng rồi tải lại trang để kiểm tra `localStorage`.

## Xử lý lỗi port trên Windows

Nếu backend báo `Port 8080 is already in use`:

```powershell
netstat -ano | findstr :8080
```

Nếu backend kết nối nhầm PostgreSQL local thay vì Docker, kiểm tra port 5432:

```powershell
netstat -ano | findstr :5432
```

Dừng dịch vụ đang xung đột bằng PowerShell chạy với quyền Administrator; không đổi các port chuẩn của dự án.

## Dừng hệ thống

Dừng backend/frontend bằng `Ctrl+C`. Dừng database nhưng giữ dữ liệu:

```powershell
docker compose down
```

Chỉ dùng lệnh sau khi chủ động muốn xóa toàn bộ dữ liệu development và tạo lại từ `init.sql`:

```powershell
docker compose down -v
docker compose up -d
```
