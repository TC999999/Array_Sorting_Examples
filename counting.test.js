let { makeCountArr, countingSort } = require("./counting");

describe("count sorting", function () {
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

  test("makeCountArr() returns an array of zeroes with the inputted length", function () {
    expect(makeCountArr(10)).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test("countingSort(): first array sorted", function () {
    expect(countingSort(arr1)).toEqual([0, 0, 1, 3, 6, 6, 6, 6, 7, 9]);
  });

  test("countingSort(): second array sorted", function () {
    expect(countingSort(arr2)).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("countingSort(): third array sorted", function () {
    expect(countingSort(arr3)).toEqual([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ]);
  });
});
