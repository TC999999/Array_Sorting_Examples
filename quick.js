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

// let arr = [4, 2, 5, 3, 6];
// let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
// let arr2 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];

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

// let arr3 = [4, 20, 12, 10, 7, 9];
