# FRS – E-commerce Fullstack Demo (Vue 3 + Spring Boot + PostgreSQL/Docker)

## 1. Muc tieu
Xay dung web ban hang don gian, day du Fullstack, chay duoc tren Docker.
Muc dich: hoc/huong dan quy trinh lam viec voi AI Agent theo prompt.xml.

## 2. Cong nghe
- Frontend: Vue 3 + Vite + Pinia + TailwindCSS
- Backend: Spring Boot 3.x (Java 17), Spring Web, Spring Data JPA
- Database: PostgreSQL 16 (Docker, quan tri bang DBeaver)
- DevOps: Docker + docker-compose

## 3. Pham vi TRONG (In scope)
- Xem danh sach san pham (tu database, co phan trang don gian)
- Them/xoa/sua so luong gio hang (frontend Pinia + localStorage)
- API REST: GET /api/products, GET /api/products/{id}
- docker-compose: PostgreSQL + init du lieu mau

## 4. Pham vi NGOAI (Out of scope)
- Dang nhap / phan quyen / JWT
- Thanh toan, don hang, kho hang, backend gio hang
- Deploy production, test tu dong (chi test tay qua testPlan)

## 5. Use cases chinh
1. Khach mo trang chu -> xem danh sach san pham (phan trang)
2. Khach bam "Them vao gio" -> gio cap nhat, hien so luong tren icon gio
3. Khach mo trang gio hang -> sua so luong / xoa -> tong tien cap nhat dung
4. F5 trang -> gio hang van con (localStorage)

## 6. Tieu chi chap nhan cap project
- [ ] docker compose up -d chay PostgreSQL, ket noi duoc bang DBeaver
- [ ] GET /api/products tra JSON dung, co phan trang
- [ ] Vue hien thi danh sach san pham tu API (khong mock)
- [ ] Gio hang dung tong tien, cong sau khi F5
- [ ] Khong loi CORS khi frontend goi backend

## 7. Rang buoc ky thuat
- Khong dung thu vien UI ngoai (chi Tailwind)
- API tra JSON chuan, xu ly loi co ban (404, 500)
- Moi task 30-90 phut, co prompt.xml rieng
