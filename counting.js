function makeCountArr(base) {
  let countArr = [];
  for (let i = 0; i <= base; i++) {
    countArr.push(0);
  }
  return countArr;
}

function countingSort(arr) {
  let max = Math.max(...arr);
  let countArr = makeCountArr(max);
  for (let num of arr) {
    countArr[num]++;
  }
  for (let i = 1; i < countArr.length; i++) {
    countArr[i] = countArr[i] + countArr[i - 1];
  }
  let finalArr = [];
  for (let num of arr) {
    finalArr[countArr[num] - 1] = num;
    countArr[num]--;
  }
  return finalArr;
}

// let csArr = [6, 3, 0, 6, 9, 6, 0, 6, 1, 7];
// let csArr2 = [4, 2, 2, 8, 3, 3, 1];
// let nums = [
//   4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342,
//   32,
// ];
