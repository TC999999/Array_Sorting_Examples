function insertionSort(arr) {
  for (let i = 1; i <= arr.length - 1; i++) {
    let curr = arr[i];
    // console.log("curr position", curr);
    for (let j = i - 1; j >= 0; j--) {
      //   console.log(arr);
      //   console.log(curr);
      //   console.log(arr[j]);
      if (curr < arr[j]) {
        arr[j + 1] = arr[j];
        arr[j] = curr;
      } else {
        // arr[j] = curr;
        break;
      }

      //   console.log(arr[j]);
    }
  }
  return arr;
}
