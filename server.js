let dataService = require('./dataservice.js');

const express = require('express');
const app = express();

app.get('/info', (req, res) => {
    let info = [
        {"serverName": "localhost5001"},
        {"sampleName": "chinemerem-react"},
        {"serverVersion": "1.0.0"}
    ];
    res.json(info)
});

app.get('/products/all', (req, res) => {
    let productsMap = dataService.getCombinedProductMap();
    let allProducts = [];
    productsMap.forEach(value => {
       allProducts.push(value)
    });
    res.send(allProducts)
});

app.get('/products/:id', (req, res) => {
    let urlProductID = req.params.id.toUpperCase();
    let productsMap = dataService.getCombinedProductMap();
    
    res.send(productsMap.get(urlProductID))
});

app.get('/category/:id', (req, res) => {
    let urlCategoryID = req.params.id;
    let combinedProductMap = dataService.getCombinedProductMap();
    let allProducts = [];
    combinedProductMap.forEach(((value, key, map) =>{
        if (value.categoryId === urlCategoryID) {
            allProducts.push(value)
        }
    }));
    
    res.json(allProducts)
});

const port = 5000;
app.listen(port, () => console.log(`SERVER started on port ${port}`));