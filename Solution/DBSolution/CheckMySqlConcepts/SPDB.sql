


DROP PROCEDURE IF EXISTS spGenerateBill;
DELIMITER $$
CREATE PROCEDURE spGenerateBill (IN proId INT, IN quantity INT)
BEGIN
DECLARE  price DOUBLE DEFAULT 0;
DECLARE billAmount DOUBLE DEFAULT 0;
DECLARE currentStock INT DEFAULT 0;
DECLARE totalStock INT DEFAULT 0;
DECLARE presentDate Date default current_date();

select unitPrice,stockInQuantity INTO price,totalStock from products where productId = proId;
SET billAmount = price * quantity; 
SET currentStock = totalStock-quantity; 
update products set stockInQuantity = currentStock where productId = proId;
insert into bills (billDate,totalAmount) values(presentDate, billAmount);
END$$
DELIMITER ;

 call spGenerateBill(3,5);
 
DROP PROCEDURE IF EXISTS spTaxableBill;
DELIMITER $$
CREATE PROCEDURE spTaxableBill (IN proId INT, IN quantity INT)
BEGIN
DECLARE  price DOUBLE DEFAULT 0;
DECLARE billAmount DOUBLE DEFAULT 0;
DECLARE currentStock INT DEFAULT 0;
DECLARE totalStock INT DEFAULT 0;
DECLARE prdTax DOUBLE DEFAULT 0;
DECLARE taxBillAmount DOUBLE DEFAULT 0;
DECLARE presentDate Date default current_date();

-- select unitPrice,stockInQuantity INTO price,totalStock from products where products.productId = proId;
-- SELECT tax INTO prdTax from taxes where prdId =proId;
select unitPrice,stockInQuantity,tax INTO price,totalStock,prdTax from products,taxes where products.productId = proId and taxes.prdId=proId;
SET billAmount = price * quantity;
SET taxBillAmount = billAmount + (billAmount*prdTax); 
SET currentStock = totalStock-quantity; 
update products set stockInQuantity = currentStock where productId = proId;
insert into bills (billDate,totalAmount) values(presentDate, taxBillAmount);
END$$
DELIMITER ;

 call spTaxableBill(5,50);