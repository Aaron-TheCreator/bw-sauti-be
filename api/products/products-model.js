const db = require('../../data/dbConfig.js');

function getAllProducts() {
    return db('products as p')
        .select('p.product_name as Name', 'c.name as Category', 'sc.name as Sub Category')
        .join('sub_categories as sc', 'p.sub_category_id', 'sc.sub_id')
        .join('categories as c', 'sc.cat_id', 'c.cat_id');
}



module.exports = {
    getAllProducts,
}