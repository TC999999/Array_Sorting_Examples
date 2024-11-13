function bubbleSort(arr) {
  let count = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    let j = 0;
    let swapped = false;
    while (j < i) {
      if (arr[j] > arr[j + 1]) {
        let hold = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = hold;
        swapped = true;
      }
      j++;
      count++;
    }
    if (!swapped) break;
  }
  return arr;
}

module.exports = { bubbleSort };
