class ProductService {
    constructor() {
        this.apiBaseUrl = 'http://localhost:5124/products'; 
    }

    // Fetch all products
    async getAllProducts() {
        const response = await fetch(this.apiBaseUrl);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    // Fetch a single product by ID
    async getProductById(id) {
        const response = await fetch(`${this.apiBaseUrl}/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    // Create a new product
    async createProduct(product) {
        const response = await fetch(this.apiBaseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    // Update an existing product
    async updateProduct(id, product) {
        const response = await fetch(`${this.apiBaseUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }

    // Delete a product
    async deleteProduct(id) {
        const response = await fetch(`${this.apiBaseUrl}/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
}

export default new ProductService();