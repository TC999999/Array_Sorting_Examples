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
