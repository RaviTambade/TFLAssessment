drop database if exists checkMySqlConcepts;
create database checkMySqlConcepts;

use checkMySqlConcepts;

create table products(
			productId int primary key auto_increment,
            title varchar(100),
            unitPrice double,
            stockInQuantity int 
            CONSTRAINT Add_More_Then_5_Quantity CHECK(stockInQuantity > 5)
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
             
             
-- Trigger---------------------------------------------------------------------------------------
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


-- Views -----------------------------------------------------------------------------------------------
DROP VIEW IF EXISTS v_product_tax;
create view v_product_tax as 
select products.productId, products.title, taxes.tax 
from products, taxes 
where products.productId = taxes.prdId;

SELECT * FROM v_product_tax;

DROP VIEW IF EXISTS v_orderDetails;
create view v_orderDetails as 
select productId, title, tax, orderDate, quantity
from products p
inner join taxes t
on p.productId = t.prdId
inner join orders o
on t.prdId = o.oProductId;

SELECT * FROM v_orderDetails;

-- Index -------------------------------------------------------------------------------
CREATE INDEX index_products 
ON products (unitPrice);

show index from products;







