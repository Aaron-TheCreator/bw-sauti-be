const products = [
  {
    sub_category_id: 1 ,
    product_name: "Salmon"
  },
  {
    sub_category_id: 1 ,
    product_name: "Red Snapper"
  },
  {
    sub_category_id: 1 ,
    product_name: "Shrimp"
  },
  {
    sub_category_id: 2 ,
    product_name: "Chicken Breast"
  },
  {
    sub_category_id: 2 ,
    product_name: "Chicken Wings & Legs"
  },
  {
    sub_category_id: 2 ,
    product_name: "Sliced Turkey"
  },
  {
    sub_category_id: 3 ,
    product_name: "Rib-Eye Steak"
  },
  {
    sub_category_id: 3 ,
    product_name: "Goat"
  },
  {
    sub_category_id: 5,
    product_name: "Lettuce"
  },
  {
    sub_category_id: 5 ,
    product_name: "Kale"
  },
  {
    sub_category_id: 5 ,
    product_name: "Collard Greens"
  },
  {
    sub_category_id: 5 ,
    product_name: "Swiss Chard"
  },
  {
    sub_category_id: 6 ,
    product_name: "Red Potato"
  },
  {
    sub_category_id: 6 ,
    product_name: "Carrot"
  },
  {
    sub_category_id: 6 ,
    product_name: "Onions"
  },
  {
    sub_category_id: 7,
    product_name: "Celery"
  },
  {
    sub_category_id: 7,
    product_name: "Asparagus"
  },
  {
    sub_category_id: 9 ,
    product_name: "Lemon"
  },
  {
    sub_category_id: 9 ,
    product_name: "Lime"
  },
  {
    sub_category_id: 9 ,
    product_name: "Grapefruit"
  },
  {
    sub_category_id: 10,
    product_name: "Peach"
  },
  {
    sub_category_id: 10,
    product_name: "Nectarine"
  },
  {
    sub_category_id: 11 ,
    product_name: "Plantain"
  },
  {
    sub_category_id: 11,
    product_name: "Sweet Banana"
  },
  {
    sub_category_id: 12,
    product_name: "Mango"
  },
  {
    sub_category_id: 12 ,
    product_name: "Coconut"
  },
  {
    sub_category_id: 12,
    product_name: "Lychee"
  },
  {
    sub_category_id: 12 ,
    product_name: "Dragonfruit"
  },
  {
    sub_category_id: 14 ,
    product_name: "Jasmine Rice"
  },
  {
    sub_category_id: 14 ,
    product_name: "Brown Rice"
  },
  {
    sub_category_id: 15,
    product_name: "Flour"
  },
  {
    sub_category_id: 15,
    product_name: "Whole-Wheat Bread"
  },
  {
    sub_category_id: 16 ,
    product_name: "Tortillas"
  },
  {
    sub_category_id: 18 ,
    product_name: "Almonds"
  },
  {
    sub_category_id: 18,
    product_name: "Cashews"
  },
  {
    sub_category_id: 19 ,
    product_name: "Toasted Peanuts"
  },
  {
    sub_category_id: 20 ,
    product_name: "Salted Peanuts"
  },
  {
    sub_category_id: 20 ,
    product_name: "Salted Cashews"
  },
  {
    sub_category_id: 21,
    product_name: "Pinto Beans"
  },
  {
    sub_category_id: 21,
    product_name: "Lima Beans"
  },
  {
    sub_category_id: 21 ,
    product_name: "Kidney Beans"
  },
  {
    sub_category_id: 22 ,
    product_name: "Refried Pinto Beans"
  },
  {
    sub_category_id: 22,
    product_name: "Refried Black Beans"
  }
];
exports.seed = function(knex) {
  return knex('products').insert(products)
};
