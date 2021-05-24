const db = require('../../data/dbConfig.js')

function getAllCategories() {
    return db('categories as c')
        .select('c.name as Category', 'c.cat_id as ID')
}

async function getById(id) {
    const data = await db('categories as c')
        .select('c.name as Category', 'sc.name as SubCategory', 'p.product_name as Product', 'p.product_id as ProductID')
        .join('sub_categories as sc', 'c.cat_id', 'sc.cat_id')
        .join('products as p', 'p.sub_category_id', 'sc.sub_id')
        .where('c.cat_id', id)

    const finalData = {Category: data[0].Category, products:[]}
    let i;
    for (i=0; i < data.length; i++) {
        finalData.products.push({"Sub-Category":data[i].SubCategory, "Product":data[i].Product, "Product-ID":data[i].ProductID})
    }
    
    
    return finalData;
}

module.exports = {
    getAllCategories,
    getById,
}