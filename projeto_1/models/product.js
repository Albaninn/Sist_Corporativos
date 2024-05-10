// ./models/product.js
const Sequelize = require('sequelize');

module.exports = (sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: Sequelize.STRING,
            allowNull: false
        },
        descricao: {
            type: Sequelize.TEXT,
            allowNull: true
        },
        precoDeCompra: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        precoDeVenda: {
            type: Sequelize.FLOAT,
            allowNull: false
        },
        estoque: {
            type: Sequelize.INTEGER,
            defaultValue: 0
        }
    });
    return Product;
};
