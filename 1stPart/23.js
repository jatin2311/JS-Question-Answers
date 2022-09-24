// Write a program which tells the number of days in a month.

let monthName = "february";
let year = 2020;
let newMonthName = monthName.toLowerCase();
const daysInMonth1 = [
  "january",
  "march",
  "may",
  "july",
  "august",
  "october",
  "december",
];
const daysInMonth2 = ["april", "june", "september", "november"];
const daysInMonth3 = ["february"];
if (year % 4 != 0) {
  if (daysInMonth1.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 31 Days`);
  } else if (daysInMonth2.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 30 Days`);
  } else if (daysInMonth3.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 28 Days`);
  } else {
    console.log("Invalid Month");
  }
} else if (year % 4 == 0) {
  if (daysInMonth1.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 31 Days`);
  } else if (daysInMonth2.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 30 Days`);
  } else if (daysInMonth3.includes(newMonthName)) {
    console.log(`${newMonthName} : Month Contains 29 Days`);
  } else {
    console.log("Invalid Month");
  }
}
