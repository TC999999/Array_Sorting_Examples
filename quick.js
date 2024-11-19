// pivots all values in the array that are less than the leftmost
// value to the left side of the array. Returns the number of
// values that were moved to the left side.
function pivot(arr) {
  let pIndex = arr[0];
  let count = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (pIndex > arr[i]) {
      count++;
      let hold = arr[i];
      arr.splice(i, 1);
      arr.unshift(hold);
    }
  }
  return count;
}

// continously pivots the array and slices the right and left sides
// of the pivot value (the first value of the array). Recursively
// pivots those sliced arrays until we get a final sorted array.
// Returns the sorted array
function quickSort(arr) {
  if (arr.length > 1) {
    let pivVal = arr[0];
    let pivTotal = pivot(arr);
    let left = arr.slice(0, pivTotal);
    let newLeft = quickSort(left);
    let right = arr.slice(pivTotal + 1);
    let newRight = quickSort(right);
    return [...newLeft, pivVal, ...newRight];
  } else {
    return arr;
  }
}

module.exports = { pivot, quickSort };
