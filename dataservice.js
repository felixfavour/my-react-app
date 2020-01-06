let categoriesObject = require('./my-app-react/src/data/categories.json') 
let productsObject = require('./my-app-react/src/data/products.json')

let combinedProductMap = new Map();
let productMap = new Map()
let categoryMap = new Map()

exports.getProducts = () => {
    for (productIndex in productsObject.products) {
        let product = productsObject.products[productIndex]
        productMap.set(product.id, product)
    }
    return productMap
}

exports.getCategories = () => {
    for (categoryIndex in categoriesObject.categories) {
        let category = categoriesObject[categoryIndex]
        categoryMap.set(category.id, category.categoryName)
    }
    return categoryMap
}

let combineProductsWithCategories = () => {
    let catKeys = categoryMap.keys()
    let productEntries = productMap.values()
    
    for (index in categoriesObject.categories) {
        let categoryKey = catKeys.next().value
        let productsArray = []
        for(i=1; i < categoryMap.size; i++) {
            let productValue = productEntries.next().value
            productsArray.push(productValue)

            if(productsArray.length == 3) {
                combinedProductMap.set(categoryKey, productsArray)
            }
        }
    }
}

exports.getCombinedProductMap = () => {
    if(combinedProductMap.size === 0) {
        combineProductsWithCategories()
    }
    return combinedProductMap
}