//  Create a closure which has one inner function

function name() {
  let firstName = "Jatin";
  function lastName() {
    console.log(firstName);
  }
  lastName();
}
name();

// Create a closure which has three inner functions
function num() {
  let a = 10;
  function values() {
    let b = 20;
    function sum() {
      console.log(a + b);
    }
    sum();
  }
  values();
}
num();
