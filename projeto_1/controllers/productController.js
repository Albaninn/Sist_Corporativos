// ./controllers/productController.js

class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    async createProduct(req, res) {
        try {
            const product = await this.productService.createProduct(req.body);
            res.status(201).json(product);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getAllProducts(req, res) {
        try {
            const products = await this.productService.getAllProducts();
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async getProductById(req, res) {
        try {
            const product = await this.productService.getProductById(req.params.id);
            if (product) {
                res.status(200).json(product);
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }

    async updateProduct(req, res) {
        try {
            const updated = await this.productService.updateProduct(req.params.id, req.body);
            res.status(200).json({ message: 'Product updated successfully' });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            const deleted = await this.productService.deleteProduct(req.params.id);
            if (deleted) {
                res.status(200).json({ message: 'Product deleted successfully' });
            } else {
                res.status(404).json({ error: 'Product not found' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = ProductController;