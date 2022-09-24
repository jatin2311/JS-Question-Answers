const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// a. Create a function called signUp which allows user to add to the collection. If user exists,
// inform the user that he has already an account.

function signUp() {
  let newUser = {
    _id: "ba21dx",
    username: "Simon",
    email: "simon@xyz.com",
    password: "123123",
    createdAt: "18/09/2022 9:00 AM",
    isLoggedIn: false,
    // _id: "ab12ex",
    // username: "Alex",
    // email: "alex@alex.com",
    // password: "123123",
    // createdAt: "08/01/2020 9:00 AM",
    // isLoggedIn: false,
  };
  let userRegis = false;
  users.forEach((e) => {
    if (e._id == newUser._id) {
      userRegis = true;
      console.log("User already registerd");
    }
  });
  if (userRegis == false) {
    users.push(newUser);
  }
}
signUp();
// console.log(users);

// b. Create a function called signIn which allows user to sign in to the application

function signIn() {
  let userDetails = { user_id: "ba21dx", password: "123123" };
  let userSignIn = false;
  users.forEach((e) => {
    if (e._id == userDetails.user_id && e.password == userDetails.password) {
      userSignIn = true;
      console.log("Sign In Successfull");
    }
  });
  if (userSignIn == false) {
    console.log("User id or password is incorrect");
  }
}
signIn();
