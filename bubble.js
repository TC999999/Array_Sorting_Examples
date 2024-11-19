// sorts an array of numbers by continuosuly swapping values
// from the start of the array with values that are less than
// it to the right; of the array. If no values are swapped,
// the sorting is done
function bubbleSort(arr) {
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
    }
    if (!swapped) break;
  }
  return arr;
}

module.exports = { bubbleSort };
