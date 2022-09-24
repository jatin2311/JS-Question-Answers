// const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];

// - Explain the difference between forEach, map, filter, and reduce.
// for each basically takes call back function and run  that function into every elemment of an array
let arr1 = ["jatin", "jj", "Govind"];
arr1.forEach((e, i) => {
  console.log(`${e} at index ${i}`);
});
// Map is also similar as for each it takes call back function and run in all elemets but it returns new array.
let arr2 = [1, 2, 3, 4, 5];
let arr3 = arr2.map((e) => e * e);
console.log(arr3);
// filter gives call back every element and return filterd array but it is diffrent from for each because foreach
// loop over an array and executes the call back but filter runs the callback and check the returning value if false
// then the elements remains in old array if true then it returns in new array.
let arr4 = [1, 4, 6, 0, 8, 9, 3, 7, 6];
let arr5 = arr4.filter((e) => e % 2 == 0);
console.log(arr5);
// reduce is a method in araay which is used to sort the array in single value
let arr6 = [1, 3, 2, 4, 7, 0, 2, 7, 8, 4];
let sum = arr6.reduce((acc, curr) => acc + curr);
console.log(sum);

// - Define a callback function before you use it in forEach, map, filter or reduce.
// lets take map which i used above in line number - (19-22)
// what call back means is a function passed as an argument in another function.
// so here we taken an array
let newArr = [1, 3, 6, 4, 8, 0];
// what map do is it itrate in array and modify the array elements also return a new array.
let newarr2 = newArr.map((e) => e * e); // here we create newarr2 to store all the new values  and itrate the task in
// each element - it goes to all elemnt perform the task and return the new array .
console.log(newarr2); // here we get output
// output expected // [1,9,36,16,64,0]

// - Use forEach to console.log each name in the names array.
let arrayname = ["Jatin", "Hitesh Sir", "Anurag Sir", "Tony"];
arrayname.forEach((e) => console.log(e));

// - Use forEach to console.log each country in the countries array.
let country = [
  "India",
  "Japan",
  "France",
  "Canada",
  "Switzerland",
  "Parague",
  "Uk",
  "USA",
];
country.forEach((e) => console.log(e));

// - Use forEach to console.log each number in the numbers array.
let arrNum = [2, 3, 4, 5, 7, 8, 5, 3, 2, 45, 0, 987, 6543, 37654, 45];
arrNum.forEach((e) => console.log(e));

// - Use map to create a new array by changing each country to uppercase in the countries array.
let newCountry = country.map((e) => e.toUpperCase());
console.log(newCountry);

// - Use map to create an array of countries length from countries array.
let newCountryLength = country.map((e) => e.length);
console.log(newCountryLength);

// - Use map to create a new array by changing each number to square in the numbers array
let newSqrNum = arrNum.map((e) => e * e);
console.log(newSqrNum);

// - Use map to change to each name to uppercase in the names array
let newUpperNames = arrayname.map((e) => e.toUpperCase());
console.log(newUpperNames);

// - Use map to map the products array to its corresponding prices.
let productsArr = [299, 399, 200, 500, 100];
let newProductsArr = productsArr.map((e) => e + 100);
console.log(newProductsArr);

// - Use filter to filter out countries containing land.
let newCountryl = [
  "Newzeland",
  "Switzerland",
  "UK",
  "USA",
  "Greenland",
  "France",
  "Ethiopia",
  "Russia",
];
let newCountryLand = newCountryl.filter((e) => {
  if (e.includes("land")) {
    return e;
  }
});
console.log(newCountryLand);

// - Use filter to filter out countries having six character.
let countrySixChar = newCountryl.filter((e) => e.length == 6);
console.log(countrySixChar);

// - Use filter to filter out countries containing six letters and more in the country array.
let countrySixletter = newCountryl.filter((e) => e.length > 6);
console.log(countrySixletter);

// - Use filter to filter out country start with 'E';
let countryStartE = newCountryl.filter((e) => e.startsWith("E"));
console.log(countryStartE);

// - Use filter to filter out only prices with values.
let product = [
  {
    pId: "ab21x6",
    pType: "Mobile",
    pName: "Iphone -14",
    pPrice: "79999",
  },
];
product.filter((e) => console.log(`${e.pPrice}`));

// - Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists([...x]) {
  let newNum = [...x];
  let orgnum = String(newNum);
  return orgnum;
}
console.log(getStringLists([2, 3, 4, 5, 6, 7, 8, 9]));

// - Use reduce to sum all the numbers in the numbers array.
let arNum = [1, 2, 3, 7, 5, 43, 4, 567, 654, 3, 4567];
let sumar = arNum.reduce((acc, curr) => acc + curr);
console.log(sumar);

// - Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
let countryS = [
  "Estonia",
  "Finland",
  "Sweden",
  "Denmark",
  "Norway",
  "and IceLand ",
];
let newCountrys = countryS.reduce((acc, curr) => `${acc}  , ${curr}`);
console.log(`${newCountrys} are european countries`);

// - Explain the difference between some and every

// ______some method checks any one of elements of array satisfies the given condition , if any element is true the
// condition then it returns true .
let someArray = [2, 4, 5, 6, 8, 9, 87, 6543, 56, 7, 8, 9, 0];
let value = someArray.some((e) => e % 2 == 0);
console.log(value);
// But in every each element of an array must have to satisfy the condition then it returns true , if any elements
// false then it returns false for whole arrayname.
let everyArray = [2, 4, 5, 6, 8, 9, 87, 6543, 56, 7, 8, 9, 0];
let value2 = everyArray.every((e) => e % 2 == 0);
console.log(value2);

// - Use some to check if some names' length greater than seven in names array
let someNames = ["Jatin", "Anubhav", "Srinivasan", "jj"];
let someNamess = someNames.some((e) => e.length > 7);
console.log(someNamess);

// - Use every to check if all the countries contain the word land
let landWord = newCountryl.every((e) => e.includes("land"));
console.log(landWord);

// - Explain the difference between find and findIndex.
// find method execute call back function iteration through elements of array the very first elements which passes the condition it will
// return that .
let findArr = [1, 9, 3, 4, 5, 6, 7, 8, 89, 0];
let values = findArr.find((e) => e % 2 == 0);
console.log(values);
// findindex methods executes call back function through elements od array it will return the index of the element passed the condition
//if no elements pass the condition it returns -1 as falsy value.
let findIndexArr = [1, 9, 3, 4, 5, 6, 7, 8, 89, 0];
let values2 = findIndexArr.findIndex((e) => e % 2 == 0);
console.log(values2);

// - Use find to find the first country containing only six letters in the countries array
let findCountry = newCountryl.find((e) => e.length == 6);
console.log(findCountry);

// - Use findIndex to find the position of the first country containing only six letters in the countries array
let findIndexCountry = newCountryl.findIndex((e) => e.length == 6);
console.log(findIndexCountry);

// - Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
let findIndexCountry2 = newCountryl.findIndex((e) => e == "Norway");
console.log(findIndexCountry2);

// - Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
let findIndexCountry3 = newCountryl.findIndex((e) => e == "Russia");
console.log(findIndexCountry3);
