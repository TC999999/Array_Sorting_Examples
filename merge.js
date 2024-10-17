function merge(arr1, arr2) {
  let finalArr = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] >= arr2[j]) {
      finalArr.push(arr2[j]);
      j++;
    } else if (arr1[i] <= arr2[j]) {
      finalArr.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    finalArr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    finalArr.push(arr2[j]);
    j++;
  }
  return finalArr;
}

function mergeSort(arr) {
  if (arr.length > 1) {
    let len = arr.length;
    let half = Math.floor(len / 2);
    let left = arr.slice(0, half);
    let right = arr.slice(half);
    let newRight = mergeSort(right);
    let newLeft = mergeSort(left);
    let sorted = merge(newLeft, newRight);
    return sorted;
  } else {
    return arr;
  }
}

// // merge([1, 3, 4, 5], [2, 4, 6, 8]);
// // merge([2, 4, 6, 8], [1, 3, 4, 5]);

// let nums = [
//   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
//   32,
// ];
