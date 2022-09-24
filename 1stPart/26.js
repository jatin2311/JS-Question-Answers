// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'.
// If it does not exist add to the countries list.
let inputCountry = "Ethiopia";
let country = [
  "India",
  "USA",
  "Uk",
  "Switzerland",
  "Japan",
  "France",
  "Ethiopia",
];
if (country.includes(inputCountry)) {
  console.log(inputCountry.toUpperCase());
} else {
  country.push(inputCountry);
}
