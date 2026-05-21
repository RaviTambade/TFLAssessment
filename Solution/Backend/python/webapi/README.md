# Product REST API

A simple REST API for managing products using Django and Django REST Framework. Data is stored in a JSON file.

## Setup

1. Ensure Python is installed.
2. Create a virtual environment and activate it.
3. Install dependencies: `pip install django djangorestframework`
4. Run migrations: `python manage.py migrate` (though not necessary since no database)
5. Run the server: `python manage.py runserver`

## API Endpoints

- GET /api/products/ - List all products
- POST /api/products/ - Create a new product
- GET /api/products/<id>/ - Get a specific product
- PUT /api/products/<id>/ - Update a product
- DELETE /api/products/<id>/ - Delete a product

## Data Structure

Products are stored in `products.json` with the following fields:
- id: integer
- name: string
- description: string
- price: float
- quantity: integer

## Architecture

- **Entities**: Product class
- **Repositories**: Data access layer for JSON file
- **Services**: Business logic layer
- **Controllers**: API views (Django REST Framework)