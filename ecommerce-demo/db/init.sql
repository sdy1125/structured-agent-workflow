CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price NUMERIC(12, 0) NOT NULL CHECK (price >= 0),
    image_url VARCHAR(500),
    category VARCHAR(100) NOT NULL,
    description TEXT
);

INSERT INTO products (name, price, image_url, category, description) VALUES
    ('Ao thun cotton co tron', 199000, 'https://placehold.co/600x600?text=Ao+thun', 'Thoi trang', 'Ao thun cotton mem, de mac hang ngay.'),
    ('Quan jean slim fit', 459000, 'https://placehold.co/600x600?text=Quan+jean', 'Thoi trang', 'Quan jean phom slim fit co gian nhe.'),
    ('Giay sneaker trang', 699000, 'https://placehold.co/600x600?text=Sneaker', 'Giay dep', 'Giay sneaker de cao su em chan.'),
    ('Balo laptop 15 inch', 549000, 'https://placehold.co/600x600?text=Balo', 'Phu kien', 'Balo co ngan chong soc cho laptop 15 inch.'),
    ('Binh giu nhiet 500ml', 289000, 'https://placehold.co/600x600?text=Binh+giu+nhiet', 'Gia dung', 'Binh thep khong gi giu nhiet nong va lanh.'),
    ('Tai nghe Bluetooth', 790000, 'https://placehold.co/600x600?text=Tai+nghe', 'Cong nghe', 'Tai nghe khong day ket noi Bluetooth on dinh.'),
    ('Ban phim co mini', 1250000, 'https://placehold.co/600x600?text=Ban+phim', 'Cong nghe', 'Ban phim co kich thuoc gon nhe.'),
    ('Den ban LED', 359000, 'https://placehold.co/600x600?text=Den+ban', 'Gia dung', 'Den ban co 3 muc dieu chinh do sang.'),
    ('Sach Lap trinh Java', 185000, 'https://placehold.co/600x600?text=Sach+Java', 'Sach', 'Sach nhap mon lap trinh Java cho nguoi moi.'),
    ('Chau cay de ban', 149000, 'https://placehold.co/600x600?text=Chau+cay', 'Nha cua', 'Chau cay nho trang tri goc lam viec.');
