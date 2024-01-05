'use strict'

const products = require('../data/products.json');

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

module.exports = {
    findAllProducts,
    findProductById
}