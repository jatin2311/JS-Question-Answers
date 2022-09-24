// The products array has three elements and each of them has six properties. a. Create a function called rateProduct
//  which rates the product b. Create a function called averageRating which calculate the average rating of a product

let products = [
  {
    id: "ab12x3",
    productType: "TV",
    productName: "OnePlus _ Tv ",
    ProductPrice: "34999",
    productRating: [{ rated: 5 }, { rated: 5 }, { rated: 4 }],
  },
  {
    id: "ba213x",
    productType: "Mobile",
    productName: "Iphone-14 Pro ",
    ProductPrice: "129999",
    productRating: [{ rated: 5 }, { rated: 4 }, { rated: 4 }],
  },
  {
    id: "xy82c2",
    productType: "Tablet",
    productName: "I-Pad Pro 13-inch ",
    ProductPrice: "79999",
    productRating: [{ rated: 5 }, { rated: 5 }, { rated: 4 }, { rated: 5 }],
  },
];
function rateProduct(id, x) {
  let rating = { rated: x };
  let product = false;
  products.forEach((e) => {
    if (e._id == id) {
      product = true;
      for (const e of products.productRating) {
        e.push(rating);
      }
    }
  });
}
rateProduct("xy82c2", 5);
// console.log(products);

function averageRating(pid) {
  let value;
  products.forEach((e) => {
    if (e.id == pid) {
      value = e;
    }
  });
  let average = 0;
  value.productRating.forEach((e) => {
    average += e.rated;
  });
  average = average / value.productRating.length;
  console.log(average.toFixed(1));
}
averageRating("xy82c2");
