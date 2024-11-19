let { merge, mergeSort } = require("./merge");

describe("merge sorting", function () {
  let arr1;
  let arr2;
  let arr3;

  beforeAll(function () {
    arr1 = [6, 3, 0, 6, 9, 6, 0, 6, 1, 7];
    arr2 = [4, 2, 2, 8, 3, 3, 1];
    arr3 = [
      4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67,
      4342, 32,
    ];
  });

  test("merge() merges and sorts two sorted arrays", function () {
    expect(merge([1, 3, 5, 7], [2, 4, 6, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
    expect(merge([2, 4, 6, 8], [1, 3, 4, 5])).toEqual([1, 2, 3, 4, 4, 5, 6, 8]);
  });

  test("mergeSort(): first array sorted", function () {
    expect(mergeSort(arr1)).toEqual([0, 0, 1, 3, 6, 6, 6, 6, 7, 9]);
  });

  test("mergeSort(): second array sorted", function () {
    expect(mergeSort(arr2)).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("mergeSort(): third array sorted", function () {
    expect(mergeSort(arr3)).toEqual([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ]);
  });
});
