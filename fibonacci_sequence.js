function fibonacci_sequence(n) {
  const arr = [0, 1];

  for (let i = 2; i < n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }

  return arr;
}

console.log(fibonacci_sequence(2));
console.log(fibonacci_sequence(4));
console.log(fibonacci_sequence(7));
