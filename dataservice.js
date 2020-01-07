const categoriesJson = require('./my-app-react/src/data/categories.json');
const productsJson = require('./my-app-react/src/data/products.json');

let combinedProductMap = new Map();
let productMap = new Map();
let categoryMap = new Map();

let getProducts = () => {
    for (let product of productsJson.products) {
        productMap.set(product.id, product);
    }
};

let getCategories = () => {
    for (let category of categoriesJson.categories) {
        categoryMap.set(category.id, category.categoryName)
    }
};

// Delete Product IDs
let deleteProductIDs = () => {
    delete productsJson.products.id
};

let combineProductsWithCategories = () => {
    getProducts();
    getCategories();

    for (let product of productsJson.products) {
        for(let category of categoriesJson.categories) {
            if(product.categoryId === category.id) {
                product.categoryName = category.categoryName
            }
        }
        combinedProductMap.set(product.id, product);
    }
    
};

exports.getCombinedProductMap = () => {
    deleteProductIDs();
    if(combinedProductMap.size === 0) {
        combineProductsWithCategories()
    }
    return combinedProductMap
};