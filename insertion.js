// continously goes towards the right side of the array, and if
// the current value is less than the value to its left, the values
// are swapped. This continues until the array is sorted and returns
// the sorted array
function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let curr = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (curr < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = curr;
      } else {
        break;
      }
    }
  }
  return arr;
}

module.exports = { insertionSort };
