// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

// let PrimeNumbers = function () {
//   let from;
//   for (from = 0; from >= 100; from++) {
//     if (from % 2 == 0) {
//       break;
//     } else if (from % 2 == 0) {
//       break;
//     } else if (from % 3 == 0) {
//       break;
//     } else if (from % 4 == 0) {
//       break;
//     } else if (from % 5 == 0) {
//       break;
//     } else if (from % 6 == 0) {
//       break;
//     } else if (from % 7 == 0) {
//       break;
//     } else if (from % 8 == 0) {
//       break;
//     } else if (from % 9 == 0) {
//       break;
//     } else if (from % 10 == 0) {
//       break;
//     } else if (from % 11 == 0) {
//       break;
//     } else if (from % 12 == 0) {
//       break;
//     } else {
//       return from;
//     }
//   }
// };
// console.log(PrimeNumbers());

// function getPrimes(max) {
//   var sieve = [],
//     primes = [];
//   for (let i = 2; i <= max; ++i) {
//     if (!sieve[i]) {
//       // i has not been marked -- it is prime
//       primes.push(i);
//       for (let j = i << 1; j <= max; j += i) {
//         sieve[j] = true;
//       }
//     }
//   }
//   return primes;
// }
// console.log(getPrimes(100));
