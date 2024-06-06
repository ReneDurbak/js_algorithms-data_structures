//-----------------------
// my approach
//-----------------------

// function linear_search(arr, target) {
//   return arr.includes(target) ? arr.indexOf(target) : -1;
// }

// Big-O = O(n)

function linear_search(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
}

// Big-O = O(n)

console.log(linear_search([0, 1, 6], 6)); //2
console.log(linear_search([10, 20, 30], 40)); //-1
console.log(linear_search([4, 8, 12, 16, 20], 20)); //4
