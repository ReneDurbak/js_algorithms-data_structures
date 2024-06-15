function merge_sort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);
  //   console.log(`This is left array in merge_sort:${leftArr}`);
  //   console.log(`This is right array in merge_sort:${rightArr}`);

  return merge(merge_sort(leftArr), merge_sort(rightArr));
}


function merge(leftArr, rightArr) {
  const sortedArr = [];

  // console.log(`This is left array in merge:${leftArr}`)
  // console.log(`This is right array in merge:${rightArr}`)

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  //   console.log(`This is what merge returns: ${[...sortedArr, ...leftArr, ...rightArr]}`)

  return [...sortedArr, ...leftArr, ...rightArr];
}

const arr = [8, 20, -2, -2, -6];
console.log(merge_sort(arr)); // [-6, -2, 4, 8, 20]

// Big-O = O(nlogn)
