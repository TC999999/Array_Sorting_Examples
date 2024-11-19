let { bubbleSort } = require("./bubble");

describe("bubble sorting", function () {
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

  test("bubbleSort(): first array sorted", function () {
    expect(bubbleSort(arr1)).toEqual([0, 0, 1, 3, 6, 6, 6, 6, 7, 9]);
  });

  test("bubbleSort(): second array sorted", function () {
    expect(bubbleSort(arr2)).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("bubbleSort(): third array sorted", function () {
    expect(bubbleSort(arr3)).toEqual([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ]);
  });
});
