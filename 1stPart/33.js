// 3. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2.
//Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old
//  or older.Check if a person is underweight, normal, overweight or obese based the information given below.
// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

let height = 174; // in cm
let h = height / 100; // converted in m
let weight = 120; // in kg
let age = 21;

if (age >= 20) {
  let bmi = weight / (h * h);
  console.log(bmi.toFixed(1));
  if (bmi < 18.5) {
    console.log("You are UnderWeight");
  } else if (bmi < 24.9) {
    console.log("Noral weight");
  } else if (bmi < 29.9) {
    console.log("Overweight");
  } else if (bmi > 30) {
    console.log("Obese");
  }
} else {
  console.log(" is only for who is 20 years or older");
}
