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
