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

module.exports = { makeCountArr, countingSort };
