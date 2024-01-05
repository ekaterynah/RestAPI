'use strict'

const products = require('../data/products.json');
const path = require('path')
const uuid= require('uuid');
const uuid4 = uuid.v4();

const { addToDataFile } = require('../addToDataFile');

function findAllProducts(){
    return new Promise((resolve, reject) => {
        resolve(products)
    });
}

function findProductById(id){
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id);
        resolve(product)
    });
}

function createNewProduct(product){
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuid4, ...product};

        products.push(newProduct);

        const filePath = path.join(__dirname, '../data', 'products.json');
        addToDataFile(filePath, products);
        resolve(newProduct)
    });
}

module.exports = {
    findAllProducts,
    findProductById,
    createNewProduct
}