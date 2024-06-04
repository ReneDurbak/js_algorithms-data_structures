function fibonacci_sequence(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  if (n === 2) return [0, 1];

  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(fibonacci_sequence(2)); // [ 0, 1 ]
console.log(fibonacci_sequence(4)); // [ 0, 1, 1, 2 ]
console.log(fibonacci_sequence(7)); // [ 0, 1, 1, 2, 3, 5, 8]

//Big-O = O(n)