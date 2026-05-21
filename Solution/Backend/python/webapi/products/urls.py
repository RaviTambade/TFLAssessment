from django.urls import path
from .controllers.product_controller import ProductListCreateView, ProductDetailView

urlpatterns = [
    path("products/", ProductListCreateView.as_view(), name="product-list-create"),
    path("products/<int:pk>/", ProductDetailView.as_view(), name="product-detail"),
]
