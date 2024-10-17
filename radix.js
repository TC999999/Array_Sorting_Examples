function getDigit(num, pos = 0) {
  let numStr = num.toString();
  if (numStr[numStr.length - 1 - pos]) {
    return parseFloat(numStr[numStr.length - 1 - pos]);
  } else {
    return 0;
  }
}

function findPlace(arr) {
  let place = 0;
  for (let num of arr) {
    if (num.toString().length > place) {
      place = num.toString().length;
    }
  }
  return place - 1;
}

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

let rsArr = [902, 4, 7, 408, 29, 9637, 1556, 3556, 8157, 4386, 86, 593];
