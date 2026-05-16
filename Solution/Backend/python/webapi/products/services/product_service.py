from ..entities.product import Product


class ProductService:
    def __init__(self, repository):
        self.repository = repository

    def get_all_products(self):
        return self.repository.get_all()

    def get_product_by_id(self, id):
        return self.repository.get_by_id(id)

    def create_product(self, product_data):
        product = Product.from_dict(product_data)
        return self.repository.create(product)

    def update_product(self, id, product_data):
        product = Product.from_dict(product_data)
        return self.repository.update(id, product)

    def delete_product(self, id):
        self.repository.delete(id)
