// Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer

let userMonth = prompt("");
let newUserMonth = userMonth.toLocaleLowerCase();
let autumn = ["september", "october", "november"];
let winter = ["december", "january", "february"];
let spring = ["march", "april", "may"];
let summer = ["june", "july", "august"];

if (autumn.includes(newUserMonth)) {
  alert("The Season is Autumn");
} else if (winter.includes(newUserMonth)) {
  alert("The Season is Winter");
} else if (spring.includes(newUserMonth)) {
  alert("The Season is Spring");
} else if (summer.includes(newUserMonth)) {
  alert("The Season is Summer");
}
