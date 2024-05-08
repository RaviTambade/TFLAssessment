select * from products;
select * from bills;
select * from taxes;
select * from orders;
select * from taxes,products where products.productId = taxes.prdId;
select unitPrice,stockInQuantity,tax from products,taxes where productId = 5;
select unitPrice,stockInQuantity,tax,productId,taxId from products,taxes where products.productId =taxes.prdId;
SELECT unitPrice,stockInQuantity from products where productId =5;
select tax from taxes where prdId =5;
SELECT products.unitPrice,products.stockInQuantity,taxes.tax from products,taxes where products.productId= 5 && taxes.prdId=5;
delete from products where productId=10;
delete from bills where billId=13;
delete from taxes where taxId=10;
delete from orders where orderId=4;








