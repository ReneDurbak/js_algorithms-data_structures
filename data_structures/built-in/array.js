const arr = [1, 2, 3, "Idk"];
arr.push(4);
arr.unshift(0);
arr.pop();
arr.shift();

console.log(arr.join(" ")); // 1 2 3 Idk

// for (const item of arr) {
//   console.log(item);
// }

const numbers = [3, 6, 2, 9, 1];
const sum = numbers.reduce((p, c) => {
  return p + c;
}, 0);

console.log(sum); // 21

const people = [
  {
    name: "Dominic Frank",
  },
  {
    name: "Christopher Nolan",
  },
  {
    name: "Naruto Uzumaki",
  },
];

const output = people.reduce((p, c, i, a) => {
  const split = c.name.split(" ");
  let part = `${split[0][0]}${split[1][0]}`;

  if (i === a.length - 1) {
    part += ".";
  } else {
    part += ", ";
  }

  return p + part;
}, "");

console.log(output); // DF, CN, NU.

// ANOTHER METHODS
// map, filter, reduce, concat, slice and splice

// Array - Big-O time complexity

// Insert / remove from end - O(1)
// Insert / remove from beginning - O(n)
// Access - O(1)
// Search - O(n)
// Push / pop - O(1)
// Shift / unshift / concat / slice / splice - O(n)
// forEach / map / filter / reduce - O(n)