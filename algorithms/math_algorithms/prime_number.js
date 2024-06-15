function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }

//   for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//       return false;
//     }
//   }

//Big-O = O(n)



  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(5)); // true
console.log(isPrimeNumber(1)); // false
console.log(isPrimeNumber(4)); // false

//Big-O = O(sqrt(n))


