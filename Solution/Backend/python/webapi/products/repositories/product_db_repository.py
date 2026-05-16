import pymysql
from django.conf import settings

from ..entities.product import Product


class MySQLConnectionFactory:
    @staticmethod
    def get_connection():
        config = settings.MYSQL_CONFIG
        return pymysql.connect(
            host=config["host"],
            port=config["port"],
            user=config["user"],
            password=config["password"],
            database=config["database"],
            charset=config.get("charset", "utf8mb4"),
            cursorclass=pymysql.cursors.DictCursor,
        )


class ProductDBRepository:
    def __init__(self):
        self._ensure_table_exists()

    def _execute(self, query, params=None, commit=False):
        connection = MySQLConnectionFactory.get_connection()
        try:
            with connection.cursor() as cursor:
                cursor.execute(query, params or ())
                if commit:
                    connection.commit()
                return cursor
        finally:
            connection.close()

    def _ensure_table_exists(self):
        self._execute(
            """
            CREATE TABLE IF NOT EXISTS products (
                id INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description TEXT,
                price DECIMAL(10, 2) NOT NULL,
                quantity INT NOT NULL
            ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
            """,
            commit=True,
        )

    def get_all(self):
        cursor = self._execute(
            "SELECT id, name, description, price, quantity FROM products ORDER BY id"
        )
        rows = cursor.fetchall()
        return [Product.from_dict(row) for row in rows]

    def get_by_id(self, id):
        cursor = self._execute(
            "SELECT id, name, description, price, quantity FROM products WHERE id = %s",
            (id,),
        )
        row = cursor.fetchone()
        return Product.from_dict(row) if row else None

    def create(self, product):
        cursor = self._execute(
            "INSERT INTO products (name, description, price, quantity) VALUES (%s, %s, %s, %s)",
            (product.name, product.description, product.price, product.quantity),
            commit=True,
        )
        product.id = cursor.lastrowid
        return product

    def update(self, id, product):
        self._execute(
            "UPDATE products SET name = %s, description = %s, price = %s, quantity = %s WHERE id = %s",
            (product.name, product.description, product.price, product.quantity, id),
            commit=True,
        )
        product.id = id
        return product

    def delete(self, id):
        self._execute(
            "DELETE FROM products WHERE id = %s",
            (id,),
            commit=True,
        )
