'use strict'

const Product = require('../models/productModel');

async function getAllProducts(req, res){
    try{
        const products = await Product.findAllProducts();

        sendJSONResponse(res, 200, products);
    }
    catch (error) {
        console.log(error);
    }
}

async function getProduct(req, res, id){
    try{
        const product = await Product.findProductById(id);

        if(!product){
            sendJSONResponse(res, 404, {message: 'The product not found'});
        }
        else {
            sendJSONResponse(res, 200, product);
        }
    }
    catch (error) {
        console.log(error);
    }
}

function sendJSONResponse(res, statusCode, data) {
    res.statusCode = statusCode;
    res.setHeader('Content-Type', 'application/json');
    res.write(JSON.stringify(data));
    res.end();
}

module.exports = {
    getAllProducts,
    getProduct
}