drop database if exists checkMySqlConcepts;
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
             
create table orders(
             orderId int primary key auto_increment,
             oProductId int,
             orderDate date,
             quantity int,
             constraint fk_products_orders_productId foreign key (oProductId) references products(productId)
             );             
             
             
-- call trigger on inserinto order table---------------------------------------------------------------------------------------
DROP TRIGGER IF EXISTS update_billAmount_trigger;
DELIMITER //
CREATE TRIGGER update_billAmount_trigger
AFTER Insert 
ON orders
FOR EACH ROW
BEGIN
	IF new.oProductId and new.quantity then
	   call spTaxableBill(new.oProductId,new.quantity);
    END IF;
END //
DELIMITER ;
