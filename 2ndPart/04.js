// Create a function called likeProduct. This function will helps to like to the product if it is not liked and
// remove like if it was liked

let prdouct = [
  {
    id: "ab23x2",
    productType: "TV",
    productname: "Sony Bravia",
    productRating: [{}, {}, {}, {}, {}],
    likes: [
      { user: "aman", like: true },
      { user: "Jatin", like: true },
      { user: "Vishu", like: true },
      { user: "Vishu", like: true },
    ],
  },
  {
    id: "ab22x3",
    productType: "TV",
    productname: "One plus TV",
    productRating: [{}, {}, {}, {}, {}],
    likes: [
      { user: "aman", like: true },
      { user: "Jatin", like: true },
      { user: "Vishu", like: true },
    ],
  },
];
function likes(id) {
  let newUser = {
    user: "jj",
    like: true,
  };
  let obj;
  prdouct.forEach((e) => {
    if (e.id == id) {
      obj = e;
    }
  });
  obj.likes.forEach((e) => {
    if (e.user == newUser.user) {
      e.like = false;
    } else {
    }
  });
  obj.likes.push(newUser);
}

likes("ab23x2");
console.log(prdouct[0].likes);
