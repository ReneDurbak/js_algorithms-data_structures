function recursive_binary_search(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  if (leftIndex > rightIndex) {
    return -1;
  }

  if (arr[middleIndex] === target) {
    return middleIndex;
  }

  if (arr[middleIndex] < target) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}

console.log(recursive_binary_search([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursive_binary_search([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursive_binary_search([-5, 2, 4, 6, 10], 20)); // -1

// Big-O = O(logn)
