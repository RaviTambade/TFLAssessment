INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Soup',20, 100);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('coffee',100,50);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('sugar',40, 70);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('milk powder',50, 50);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Tea',40, 150);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Book',120, 1000);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Pen',10, 200);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Notebook',30, 300);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Oil',200, 1000);
INSERT INTO products (title, unitPrice,stockInQuantity) VALUES ('Powder',110.17, 1000);

INSERT INTO taxes (prdId,tax) VALUES (1,0.1);
INSERT INTO taxes (prdId,tax) VALUES (2,0.2);
INSERT INTO taxes (prdId,tax) VALUES (3,0.3);
INSERT INTO taxes (prdId,tax) VALUES (4,0.25);
INSERT INTO taxes (prdId,tax) VALUES (5,0.15);
INSERT INTO taxes (prdId,tax) VALUES (6,0.08);
INSERT INTO taxes (prdId,tax) VALUES (7,0.09);
INSERT INTO taxes (prdId,tax) VALUES (8,0.1);
INSERT INTO taxes (prdId,tax) VALUES (9,0.12);
INSERT INTO taxes (prdId,tax) VALUES (10,0.23);

INSERT INTO orders (oProductId,orderDate,quantity) VALUES (1,"2024-02-23",10);
INSERT INTO orders (oProductId,orderDate,quantity) VALUES (10,"2024-02-23",100);


