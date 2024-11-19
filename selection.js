// continuously sets the value at each index as the minimum
// value; if any value to the right of the minimum is less
// than the minimum, those two values are swapped. Continues
// until the array is sorted. Returns the sorted array.
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
