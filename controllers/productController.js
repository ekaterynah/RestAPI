'use strict'

const Product = require('../models/productModel');
const { getPostData } = require('../getPostData')

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

async function createProduct(req, res){
    try{
        const body = await getPostData(req);
        const { type, title, desc, color, price } = JSON.parse(body);
        const product = { type, title, desc, color, price };

        const newProduct = await Product.createNewProduct(product);
        res.statusCode = 201;
        res.setHeader('Content-Type', 'application/json');

        return res.end(JSON.stringify(newProduct));

    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllProducts,
    getProduct,
    createProduct
}