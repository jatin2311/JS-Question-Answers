// The following is an array of 10 students ages:

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
ages.sort();
// min age
console.log(ages[0]);
//max age
console.log(ages[ages.length - 1]);

// Find the median age(one middle item or two middle items divided by two)
if (ages.length % 2 == 0) {
  let a = (ages[ages.length / 2] + ages[ages.length / 2 + 1]) / 2;
  console.log(a);
} else {
  ages[ages.length / 2];
}

// Find the average age(all items divided by number of items)
let sum = 0;
for (let i in ages) {
  sum = sum + ages[i];
}
let average = Math.round(sum / ages.length);
console.log(average);
// Find the range of the ages(max minus min)

let range = ages[ages.length - 1] - ages[0];
console.log(range);

// Compare the value of (min - average) and (max - average), use abs() method
let a = ages[0] - average;
let b = ages[ages.length - 1] - average;
console.log("min - average = ", Math.abs(a));
console.log("max - average = ", Math.abs(b));
