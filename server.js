const dataService = require('./dataservice.js');
const fromEntries = require('object.fromentries');

const express = require('express');
const app = express();

app.get('/info', (req, res) => {
    const info = [
        {"serverName": "chinemerem-react"},
        {"serverVersion": "1.0.0"}
    ];
    res.json(info)
});

app.get('/products/all', (req, res) => {
    const productsMap = dataService.getCombinedProductMap();
    res.send( fromEntries(productsMap));
});

app.get('/products/:id', (req, res) => {
    const urlProductID = req.params.id;
    const productsMap = dataService.getCombinedProductMap();
    
    res.send(productsMap.get(urlProductID));
});

app.get('/category/:id', (req, res) => {
    const urlCategoryID = req.params.id;
    const combinedProductMap = dataService.getCombinedProductMap();
    const productsBasedOnCategory = new Map();

    combinedProductMap.forEach(((value, key) => {
        if (value.categoryId === urlCategoryID) {
            productsBasedOnCategory.set(key, value);
        }
    }));
    
    res.send(fromEntries(productsBasedOnCategory));
});

const port = 5000;
app.listen(port, () => console.log(`SERVER started on port ${port}`));