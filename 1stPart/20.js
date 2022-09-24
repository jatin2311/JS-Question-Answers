// Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

let studentPercentage = 90;
if (studentPercentage >= 80) {
  console.log("A Grade");
} else if (studentPercentage >= 70) {
  console.log("B Grade");
} else if (studentPercentage >= 60) {
  console.log("C Grade");
} else if (studentPercentage >= 50) {
  console.log("D Grade");
} else if (studentPercentage >= 0) {
  console.log("F Grade");
}
