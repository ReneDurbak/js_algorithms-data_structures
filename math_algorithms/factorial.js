function factorial(n) {
  if(n < 0) return 'Please provide positive integer'
  let sum = 1;

  for (let i = 2; i <= n; i++) {
    sum = sum * i;
  }

  return sum;
}

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(5)); // 120

//Big-O = O(n)
