function recursiveFibonacci(n) {
  if (n < 2) {
    return n;
  }

  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
}

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(2)); // 1
console.log(recursiveFibonacci(6)); // 8


// O(n) - iterative approach
// O(2^n) - recursive approach (current)