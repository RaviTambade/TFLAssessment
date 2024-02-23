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