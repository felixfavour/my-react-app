let categories = require('./my-app-react/src/data/categories.json')
let products = require('./my-app-react/src/data/products.json')

const express = require('express')
const app = express()

app.get('/info', (req, res) => {
    info = [
        {"serverName": "localhost5000"},
        {"sampleName": "chinemerem-react"},
        {"serverVersion": "1.0.0"}
    ]
    res.json(info)
})

app.get('/products/all', (req, res) => {
    res.json(products)
})

app.get('/products/:id', (req, res) => {
    let urlProductID = req.params.id
    let productsLocal = products.products

    for (productID in productsLocal) {
        let product = productsLocal[productID];
        if(urlProductID == product.id) {
            res.json(product)
        }
    }

})

app.get('/category/:id', (req, res) => {
    let urlCategoryID = req.params.id
    let productsLocal = products.products
    let arrayOfProducts = []

    for (productID in productsLocal) {
        let product = productsLocal[productID];
        if(urlCategoryID == product.categoryId) {
            arrayOfProducts.push(product)
        }
    }
    
    res.json(arrayOfProducts)
})

const port = 5000
app.listen(port, () => console.log(`SERVER started on port ${port}`));