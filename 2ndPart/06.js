const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ["Finland", "Sweden", "Norway"];

// - create an empty set
let c = new Set();
// console.log(c);

// - Create a set containing 0 to 10 using loop
let m = [];
for (let i = 0; i <= 10; i++) {
  m.push(i);
}
let d = new Set(m);
console.log(d);

// - Remove an element from a set
d.delete(10);
console.log(d);

// - Clear a set
d.clear();
console.log(d);

// - Create a set of 5 string elements from array
let newArr = ["Jatin", "Shivam", "Gaurav", "Bhuvan", "JJ"];
let g = new Set(newArr);
console.log(g);

// - Create a map of countries and number of characters of a country
let newmap = new Map();
countries.forEach((e) => {
  newmap.set(e, e.length);
});

console.log(newmap);
