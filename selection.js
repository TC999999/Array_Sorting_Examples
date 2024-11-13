function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let initialMin = arr[i];
    let currentMin = arr[i];
    let currentMinIdx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (currentMin > arr[j]) {
        currentMin = arr[j];
        currentMinIdx = j;
      }
    }
    if (initialMin != currentMin) {
      arr[i] = currentMin;
      arr[currentMinIdx] = initialMin;
    }
  }
  return arr;
}

module.exports = { selectionSort };

// let arr = [4, 20, 12, 10, 7, 9];
// let nums = [
//   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
//   32,
// ];
