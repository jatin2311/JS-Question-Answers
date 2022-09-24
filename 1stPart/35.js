// 35. Write a functions which checks if all items are unique in the array.

let arry = ["jatin", "google", "jatin", "facebook"];
for (let i = 0; i < arry.length; i++) {
  for (let j = i + 1; j < arry.length; j++) {
    if (arry[i] == arry[j]) {
      console.log("Match found");
    }
  }
}
