//makes an array of zeroes with a length equal to the inputted base
function makeCountArr(base) {
  let countArr = [];
  for (let i = 0; i <= base; i++) {
    countArr.push(0);
  }
  return countArr;
}

// First, makes an the counting array of zeros with a
// length of the maximum number of the array.
// Next, counts the number of times each number in the inputted
// array appears and replace the value at the respective index
// with the counted appearances.
// Next, replace each value in the count array with the sum of its
// previous value and its own value until the last value is equal
// to the length of the original array.
// Finally, insert each value of the original array into a new array
// based on the value of its index in the counting array and
// return a sorted array
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
