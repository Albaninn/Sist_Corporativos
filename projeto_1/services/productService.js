// ./services/productService.js
const db = require('../models');

class ProductService {
    constructor(productModel) {
        this.Product = productModel;
    }

    async createProduct(data) {
        return await this.Product.create(data);
    }

    async updateProduct(id, data) {
        const product = await this.Product.findByPk(id);
        if (!product) {
            throw new Error('Produto não encontrado.');
        }
        return await product.update(data);
    }

    async getAllProducts() {
        return await this.Product.findAll();
    }

    async getProductById(id) {
        return await this.Product.findByPk(id);
    }

    async deleteProduct(id) {
        return await this.Product.destroy({ where: { id } });
    }
}

module.exports = ProductService;
