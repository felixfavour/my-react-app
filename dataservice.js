

const combinedProductMap = new Map();
const productMap = new Map();
const categoryMap = new Map();

// function to load products JSON and convert it to a map.
let getProducts = () => {
    const productsJson = require('./my-app-react/src/data/products.json');
    if (productMap.size === 0) {
        for (let product of productsJson.products) {
            productMap.set(product.id, product);
        }
    }
};

// function to load categories JSON and convert it to a map.
let getCategories = () => {
    const categoriesJson = require('./my-app-react/src/data/categories.json');
    if (categoryMap.size === 0) {
        for (let category of categoriesJson.categories) {
            categoryMap.set(category.id, category.categoryName)
        }
    }
};

// Function to combine both products and categories in a collectable and renderable format
let combineProductsWithCategories = () => {
    getProducts();
    getCategories();

    for (let product of productMap.products) {
        for(let category of categoryMap.categories) {
            if(product.categoryId === category.id) {
                product.categoryName = category.categoryName
            }
        }
        combinedProductMap.set(product.id, product);
    }
};
// Function to return the result of above function
exports.getCombinedProductMap = () => {
    if (combinedProductMap.size === 0) {
        combineProductsWithCategories()
    }
    return combinedProductMap;
};