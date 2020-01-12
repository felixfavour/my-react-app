

const combinedProductMap = new Map();
const productMap = new Map();
const categoryMap = new Map();

// function to load products JSON and convert it to a map.
const getProducts = () => {
    if (!productMap.size) {
        const productsJson = require('./my-app-react/src/data/products.json');
        for (const product of productsJson.products) {
            productMap.set(product.id, product);
        }
    }
};

// function to load categories JSON and convert it to a map.
const getCategories = () => {
    if (!categoryMap.size) {
        const categoriesJson = require('./my-app-react/src/data/categories.json');
        for (const category of categoriesJson.categories) {
            categoryMap.set(category.id, category)
        }
    }
};

// Function to combine both products and categories in a collectable and renderable format
const combineProductsWithCategories = () => {
    getProducts();
    getCategories();

    for (const product of productMap.values()) {
        for(const category of categoryMap.values()) {
            if(product.categoryId  === category.id) {
                product.categoryName = category.categoryName
            }
        }
        combinedProductMap.set(product.id, product);
    }
};
// Function to return the result of above function
exports.getCombinedProductMap = () => {
    if (!combinedProductMap.size) {
        combineProductsWithCategories()
    } return combinedProductMap;
};