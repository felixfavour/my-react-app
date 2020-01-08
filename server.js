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
    res.send(productsMap);
});

app.get('/products/:id', (req, res) => {
    let urlProductID = req.params.id;
    let productsMap = dataService.getCombinedProductMap();
    
    res.send(productsMap.get(urlProductID));
});

app.get('/category/:id', (req, res) => {
    let urlCategoryID = req.params.id;
    let combinedProductMap = dataService.getCombinedProductMap();
    const productsBasedOnCategory = new Map();
    combinedProductMap.forEach(((value, key, map) => {
        if (value.categoryId === urlCategoryID) {
            productsBasedOnCategory.set(key, value);
        }
    }));
    
    res.send(productsBasedOnCategory);
});

const port = 5000;
app.listen(port, () => console.log(`SERVER started on port ${port}`));