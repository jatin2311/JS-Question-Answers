// Use the Date object to do the following activities

let date = new Date();

//  What is the year today?
console.log(date.getFullYear());

//  What is the month today as a number?
console.log(date.getMonth());

// What is the date today?
console.log(date.getDate());

//  What is the day today as a number?
console.log(date.getDay());

//  What is the hours now?
console.log(date.getHours());

//  What is the minutes now?
console.log(date.getMinutes());

//  Find out the numbers of seconds elapsed from January 1, 1970 to now.
let newDate = new Date("1970, 01, 01");
let save = date.getTime() - newDate.getTime();
console.log(Math.round(save / 1000));
