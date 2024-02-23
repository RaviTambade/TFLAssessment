create database checkMySqlConcepts;

use checkMySqlConcepts;

create table products(
			productId int primary key auto_increment,
            title varchar(100),
            unitPrice double,
            stockInQuantity int
);

create table bills(
			billId int primary key auto_increment,
            billDate date,
            totalAmount double
);

create table taxes(
             taxId int primary key auto_increment,
			 prdId int,
             tax double,
             constraint fk_products_taxes_productId foreign key (prdId) references products(productId)
             );