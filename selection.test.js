let { selectionSort } = require("./selection");

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

  test("first array sorted", function () {
    let sortArr1 = selectionSort(arr1);
    expect(sortArr1).toEqual([0, 0, 1, 3, 6, 6, 6, 6, 7, 9]);
  });

  test("second array sorted", function () {
    let sortArr2 = selectionSort(arr2);
    expect(sortArr2).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("third array sorted", function () {
    let sortArr3 = selectionSort(arr3);
    expect(sortArr3).toEqual([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ]);
  });
});
