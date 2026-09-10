# PLAN & THEO DOI TIEN DO

## Kien truc thu muc
ecommerce-demo/
  docker-compose.yml, db/init.sql
  backend/   (Spring Boot, port 8080)
  frontend/  (Vue 3 + Vite, port 5173)

## Bang task
| Task | Noi dung                     | Prompt file                | Uoc luong | Status |
|------|------------------------------|----------------------------|-----------|--------|
| 1    | Setup infra: Docker + DB + 2 skeleton | prompts/task01-setup-infra.xml    | 60-90' | [x] DONE |
| 2    | Backend API products (entity, GET, phan trang) | prompts/task02-backend-api.xml | 60-90' | [x] DONE |
| 3    | Frontend: trang danh sach san pham | prompts/task03-frontend-product-list.xml | 60-90' | [x] DONE |
| 4    | CORS + Gio hang (Pinia + localStorage) | prompts/task04-cart-and-cors.xml | 60-90' | [x] DONE |
| 5    | Polish + test tong hop     | prompts/task05-polish-final-test.xml | 30-60' | [x] DONE |

Status: [ ] TODO  [~] DOING  [x] DONE  [!] BLOCKED (ghi ly do)

## Nhat ky (ghi moi lan lam xong 1 task)
- Task 1 - ngay 2026-09-09: Hoan tat PostgreSQL Docker, Spring Boot health check va Vue/Vite/Tailwind skeleton; da test DB, API va Vite proxy.
- Task 2 - ngay 2026-09-09: Hoan tat Product API doc du lieu, phan trang, DTO va xu ly loi 404/500; da test voi PostgreSQL Docker.
- Task 3 - ngay 2026-09-09: Hoan tat danh sach san pham Vue, phan trang, loading/error va image fallback; da test API qua Vite proxy.
- Task 4 - ngay 2026-09-09: Hoan tat CORS backend va gio hang Pinia/localStorage; da test CORS, actions/getters, persistence va cac route frontend.
- Task 5 - ngay 2026-09-09: Hoan thien empty state, Header va responsive; cap nhat README; kiem thu hoi quy Task 1-4 va build production deu PASS.
- Task 2 - ngay ... : ...
