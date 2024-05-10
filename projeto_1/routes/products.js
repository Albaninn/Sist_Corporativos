// ./routes/products.js
var express = require('express');
var router = express.Router();

const db = require('../models');
const ProductService = require('../services/productService');
const productService = new ProductService(db.Product);

const ProductController = require('../controllers/productController');
const productController = new ProductController(productService);

router.post('/', productController.createProduct);
router.get('/', productController.getAllProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;
