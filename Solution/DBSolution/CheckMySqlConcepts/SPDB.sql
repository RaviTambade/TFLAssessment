


DROP PROCEDURE IF EXISTS spGenerateBill;
DELIMITER $$
CREATE PROCEDURE spGenerateBill (IN proId INT, IN quantity INT, OUT billAmount DOUBLE)
BEGIN
DECLARE  uPrice DOUBLE DEFAULT 0;
DECLARE totlePrice DOUBLE DEFAULT 0;
DECLARE updatedQuantity INT DEFAULT 0;
DECLARE totalStock INT DEFAULT 0;

select unitPrice,stockInQuantity INTO uPrice,totalStock from products where productId = proId;
SET totlePrice = uPrice * quantity; 
SET billAmount = totlePrice;
SET updatedQuantity = totalStock-quantity; 
update products set stockInQuantity = updatedQuantity where productId = proId;
insert into bills (billDate,totalAmount) values(current_date(), billAmount);
END$$
DELIMITER ;

 call spGenerateBill(1,10,@BillAmount);
 select @BillAmount;