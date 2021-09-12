const mergeSort = require("./mergeSort.js");

test("All Number Sorting", () => {
    expect(mergeSort([2,10,-10,4,3,0,-3,4])).toStrictEqual([-10,-3,0,2,3,4,4,10]);
});

test("Negetive Sorting", () => {
    expect(mergeSort([-10,-5,-7,0,-2,-1])).toStrictEqual([-10,-7,-5,-2,-1,0]);
});

test("Positive Sorting", () => {
    expect(mergeSort([10,5,7,0,2,1])).toStrictEqual([0,1,2,5,7,10]);
});

test("Float Sorting", () => {
    expect(mergeSort([10.5,-5.4,5.3,-2.1,0.8,2,1.9])).toStrictEqual([-5.4,-2.1,0.8,1.9,2,5.3,10.5]);
});

test("Empty Array", () => {
    expect(mergeSort([])).toBeNull();
});