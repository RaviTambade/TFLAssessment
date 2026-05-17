from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from ..services.product_service import ProductService
from ..repositories.product_db_repository import ProductDBRepository


class ProductListCreateView(APIView):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        repository = ProductDBRepository()
        self.service = ProductService(repository)

    def get(self, request):
        products = self.service.get_all_products()
        data = [product.to_dict() for product in products]
        return Response(data)

    def post(self, request):
        product_data = request.data
        product = self.service.create_product(product_data)
        return Response(product.to_dict(), status=status.HTTP_201_CREATED)


class ProductDetailView(APIView):
    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        repository = ProductDBRepository()
        self.service = ProductService(repository)

    def get(self, request, pk):
        product = self.service.get_product_by_id(int(pk))
        if product:
            return Response(product.to_dict())
        return Response(status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        product_data = request.data
        product = self.service.update_product(int(pk), product_data)
        if product:
            return Response(product.to_dict())
        return Response(status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        self.service.delete_product(int(pk))
        return Response(status=status.HTTP_204_NO_CONTENT)