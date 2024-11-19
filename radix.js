// returns the digit at the specified index starting from the right
function getDigit(num, pos = 0) {
  let numStr = num.toString();
  if (numStr[numStr.length - 1 - pos]) {
    return parseFloat(numStr[numStr.length - 1 - pos]);
  } else {
    return 0;
  }
}

//returns the greatest number of digits that a number in an array has
function findPlace(arr) {
  let place = 0;
  for (let num of arr) {
    if (num.toString().length > place) {
      place = num.toString().length;
    }
  }
  return place - 1;
}

// Places each value of the array in to the bucket
// of a certain index based on the digit in its ones place, tens
// place, etc.. Removes the value from each bucket starting from
// the left and pushes them back into the original array.
// Loops for a number of times equal to the greatest number of
// digits a single number in the original array has
function radixSort(arr) {
  let loopNum = findPlace(arr);
  let buckets = [[], [], [], [], [], [], [], [], [], []];
  for (let i = 0; i <= loopNum; i++) {
    while (arr.length) {
      let num = arr.shift();
      let digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    for (let bucket of buckets) {
      while (bucket.length) {
        arr.push(bucket.shift());
      }
    }
  }
  return arr;
}

module.exports = { getDigit, findPlace, radixSort };
