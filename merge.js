// takes two arrays with sorted values and merges them together
// while also sorting the alrady sorted values
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

// recurseivly takes an unsorted array and breaks it apart and merges
// back together while also sorting them. Returns newly sorted array
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

module.exports = { merge, mergeSort };
