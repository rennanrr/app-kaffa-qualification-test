DROP DATABASE IF EXISTS KaffaShop;
CREATE DATABASE KaffaShop;
USE KaffaShop;

CREATE TABLE Brand (
brand_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
brand_name VARCHAR(254) NOT NULL,
brand_supplier VARCHAR(254) NOT NULL,
brand_created_at TIMESTAMP NOT NULL,
brand_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (brand_id)
);
insert into Brand values (0, "Samsung", "Samsung Factory", "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Brand values (0, "Apple", "Apple California", "2020-09-20 00:00:01", "2020-09-20 00:00:01");

CREATE TABLE Product (
product_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
product_name VARCHAR(254) NOT NULL,
product_description VARCHAR(254),
brand_id INT UNSIGNED NOT NULL,
product_price float NOT NULL,
product_created_at TIMESTAMP NOT NULL,
product_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (product_id),
foreign key (brand_id) references Brand (brand_id)
);
insert into Product values (0, "iPhone 11" , "Dual-camera system (Ultra Wide, Wide), up to 17 hours of video playback1, water resistant to a depth of 2 meters for up to 30 minutes2, 6.1” Liquid Retina HD display3", 2, 4499.00, "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Product values (0, "Galaxy S10" , "Quad HD+ Dynamic AMOLED, display Edge, In Screen Ultrasonic Fingerprint ; Facial Recognition, 10MP Selfie Camera, 12MP Super Speed Dual Pixel ; 16MP Ultra Wide ; 12MP 2x Zoom", 1, 2799.00, "2020-09-20 00:00:01", "2020-09-20 00:00:01"); 

CREATE TABLE Client (
client_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
client_name VARCHAR(100) NOT NULL,
client_email VARCHAR(254) NOT NULL,
client_cpf VARCHAR(11) NOT NULL,
client_password VARCHAR(254) NOT NULL,
client_birthday date NOT NULL,
client_created_at TIMESTAMP NOT NULL,
client_updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (client_id)
);
insert into Client values (0,"Rennan Ribas", "rennanrr@hotmail.com", "37112135885", "1234", "1995-03-15", "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Client values (0,"Pedro Dias", "pedrod12@hotmail.com", "37312435880", "1234", "1990-02-23", "2020-09-20 00:00:01", "2020-09-20 00:00:01");

CREATE TABLE Paymment (
paymment_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
paymment_name VARCHAR(100) NOT NULL,
paymment_created_at TIMESTAMP NOT NULL,
paymment_updatet_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (paymment_id)
);
insert into Paymment values (0, "Cash", "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Paymment values (0, "Debit Card", "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Paymment values (0, "Credit Card", "2020-09-20 00:00:01", "2020-09-20 00:00:01");

CREATE TABLE Orders (
order_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
client_id INT UNSIGNED NOT NULL,
paymment_id INT UNSIGNED NOT NULL,
order_installment TINYINT NOT NULL,
order_created_at TIMESTAMP NOT NULL,
order_updatet_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
PRIMARY KEY (order_id),
foreign key (client_id) references Client (client_id),
foreign key (paymment_id) references Paymment (paymment_id)
);
insert into Orders values (0, 2, 3, 3, "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Orders values (0, 1, 2, 0, "2020-09-20 00:00:01", "2020-09-20 00:00:01");

CREATE TABLE Order_Product(
order_id INT UNSIGNED NOT NULL,
product_id INT UNSIGNED NOT NULL,
product_qty INT NOT NULL,
product_price float NOT NULL,
product_off_price float,
order_product_created_at TIMESTAMP NOT NULL,
order_product_updatet_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
foreign key (order_id) references Orders (order_id),
foreign key (product_id) references Product (product_id)
);
insert into Order_Product values (1, 1, 1, 4049.10, 449.9, "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Order_Product values (1, 2, 1, 2799.00, 0, "2020-09-20 00:00:01", "2020-09-20 00:00:01");
insert into Order_Product values (2, 1, 1, 4049.10, 449.9, "2020-09-20 00:00:01", "2020-09-20 00:00:01");

select o.order_id, c.client_name, p.paymment_name, sum(op.product_qty) as total_order_items from orders as o inner join client as c on o.client_id = c.client_id inner
join paymment as p on o.paymment_id = p.paymment_id inner join order_product as op on o.order_id = op.order_id group by o.order_id;