import json
import os
from ..entities.product import Product


class ProductRepository:
    def __init__(self):
        self.file_path = os.path.join(
            os.path.dirname(__file__), "..", "..", "products.json"
        )

    def _read_data(self):
        if not os.path.exists(self.file_path):
            return []
        with open(self.file_path, "r") as f:
            return json.load(f)

    def _write_data(self, data):
        with open(self.file_path, "w") as f:
            json.dump(data, f, indent=4)

    def get_all(self):
        data = self._read_data()
        return [Product.from_dict(item) for item in data]

    def get_by_id(self, id):
        data = self._read_data()
        for item in data:
            if item["id"] == id:
                return Product.from_dict(item)
        return None

    def create(self, product):
        data = self._read_data()
        product.id = max([p["id"] for p in data] + [0]) + 1
        data.append(product.to_dict())
        self._write_data(data)
        return product

    def update(self, id, product):
        data = self._read_data()
        for i, item in enumerate(data):
            if item["id"] == id:
                product.id = id
                data[i] = product.to_dict()
                self._write_data(data)
                return product
        return None

    def delete(self, id):
        data = self._read_data()
        data = [item for item in data if item["id"] != id]
        self._write_data(data)
