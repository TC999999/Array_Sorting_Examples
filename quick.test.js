let { pivot, quickSort } = require("./quick");

describe("quick sorting", function () {
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

  test("pivot", function () {
    let arr1 = [5, 4, 9, 10, 2, 20, 8, 7, 3];
    expect(pivot(arr1)).toEqual(3);
    expect(arr1).toEqual([3, 2, 4, 5, 9, 10, 20, 8, 7]);

    let arr2 = [4, 2, 5, 3, 6];
    expect(pivot(arr2)).toEqual(2);
    expect(arr2).toEqual([3, 2, 4, 5, 6]);

    let arr3 = [8, 4, 2, 5, 0, 10, 11, 12, 13, 16];
    expect(pivot(arr3)).toEqual(4);
    expect(arr3).toEqual([0, 5, 2, 4, 8, 10, 11, 12, 13, 16]);
  });

  test("quickSort(): first array sorted", function () {
    expect(quickSort(arr1)).toEqual([0, 0, 1, 3, 6, 6, 6, 6, 7, 9]);
  });

  test("quickSort(): second array sorted", function () {
    expect(quickSort(arr2)).toEqual([1, 2, 2, 3, 3, 4, 8]);
  });

  test("quickSort(): third array sorted", function () {
    expect(quickSort(arr3)).toEqual([
      2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453,
      546, 4342,
    ]);
  });
});
