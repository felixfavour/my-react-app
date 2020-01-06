let categories = require('./my-app-react/src/data/categories.json')
let products = require('./my-app-react/src/data/products.json')
let dataService = require('./dataservice.js')

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
    let productsMap = dataService.getProducts()
    let productsArray = []

    let getValues = (value, key, productsMap) => {productsArray.push(value)}

    productsMap.forEach(getValues)

    res.json(productsArray)
})

app.get('/products/:id', (req, res) => {
    let urlProductID = req.params.id
    let productsMap = dataService.getProducts()
    
    res.json(productsMap.get(urlProductID))
})

app.get('/category/:id', (req, res) => {
    let urlCategoryID = req.params.id
    let combinedProductMap = dataService.getCombinedProductMap()
    
    res.json(combinedProductMap.get(urlCategoryID))
})

const port = 5000
app.listen(port, () => console.log(`SERVER started on port ${port}`));