'use strict'

const url = require('url');
const http = require('http');
const {getAllProducts, getProduct, createProduct} = require("./controllers/productController");

const server = http.createServer((req, res)=>{
    if(req.method === 'GET') {
        if (req.url === '/api/products') {
            return getAllProducts(req, res);
        }
        const regularExpression = /\/api\/products\/([0-4]+)/;
        const match = req.url.match(regularExpression);

        if (match) {
            const id = req.url.split('/')[3];
            return getProduct(req, res, id);
        }
    }
    else if(req.method === 'POST'){
        if (req.url === '/api/products'){
            return createProduct(req, res);
        }
    }

    return handleNotFound(res);
})

const handleNotFound = (res) => {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.write('The product not found');
    res.end();
}

const PORT = process.env.PORT || 5500;

server.listen(PORT, ()=>{`The server starting on port ${PORT}`})