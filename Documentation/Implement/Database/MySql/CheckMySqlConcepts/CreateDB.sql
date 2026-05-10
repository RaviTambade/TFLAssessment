drop database if exists checkMySqlConcepts;
create database checkMySqlConcepts;

use checkMySqlConcepts;

create table products(
			productId int primary key auto_increment,
            title varchar(100),
            unitPrice double,
            stockInQuantity int 
            CONSTRAINT Add_More_Then_0_Quantity CHECK(stockInQuantity > 0)
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
-- We cannot use triggers with Transaction

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
-- Index is used by search engine only

-- Joins ---------------------------------------------------------------------------------
CREATE TABLE members (
    member_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (member_id)
);

CREATE TABLE committees (
    committee_id INT AUTO_INCREMENT,
    name VARCHAR(100),
    PRIMARY KEY (committee_id)
);

INSERT INTO members(name)
VALUES('John'),('Jane'),('Mary'),('David'),('Amelia');

INSERT INTO committees(name)
VALUES('John'),('Mary'),('Amelia'),('Joe');

SELECT * FROM members;
SELECT * FROM committees;

-- Inner join clause to find members who are also the committee members
SELECT m.member_id, m.name, c.committee_id, c.name 
FROM members m
INNER JOIN committees c on m.name=c.name;

-- Using claus
SELECT m.member_id, m.name as member, c.committee_id, c.name as committee
FROM members m
INNER JOIN committees c USING(name);

-- Left Join
SELECT m.member_id,m.name AS Member,c.committee_id, c.name AS Committee
from members m
LEFT JOIN committees c USING(name);

-- Left Join with where clause
SELECT m.member_id,m.name AS Member,c.committee_id, c.name AS Committee
from members m
LEFT JOIN committees c USING(name)
WHERE c.committee_id IS NULL; -- (Find rows in the left table that do not have corresponding rows in the right table)
							  -- (Find members who are not present in committee table)
-- Right Join
SELECT m.member_id,m.name AS Member,c.committee_id, c.name AS Committee
from members m
RIGHT JOIN committees c USING(name);

-- Right Join with WHERE clause
SELECT m.member_id,m.name AS Member,c.committee_id, c.name AS Committee
from members m
RIGHT JOIN committees c USING(name)
where m.member_id IS NULL; -- (Find rows in the right table that do not have corresponding rows in the left table) 
                           -- (Find the committee members who are not in the members table)

-- Cross Join
SELECT m.member_id,m.name AS Member,c.committee_id, c.name AS Committee
from members m
CROSS JOIN committees c;  -- (Will give m*c number of rows)












