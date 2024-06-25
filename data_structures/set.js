const set = new Set([1, 2, 3]);
set.add(4);
set.add(2); // ignored because it's duplicate value
set.delete(3);

console.log(set.has(4));
console.log(set.size);
console.log("-------");
// set.clear()

for (const item of set) {
  console.log(item);
}
