const quickSort = require("./quickSort.js");

test("All Number Sorting", () => {
    expect(quickSort([2,10,-10,4,3,0,-3,4],0,7)).toStrictEqual([-10,-3,0,2,3,4,4,10]);
});

test("Negetive Sorting", () => {
    expect(quickSort([-10,-5,-7,0,-2,-1],0,5)).toStrictEqual([-10,-7,-5,-2,-1,0]);
});

test("Positive Sorting", () => {
    expect(quickSort([10,5,7,0,2,1],0,5)).toStrictEqual([0,1,2,5,7,10]);
});

test("Float Sorting", () => {
    expect(quickSort([10.5,-5.4,5.3,-2.1,0.8,2,1.9],0,6)).toStrictEqual([-5.4,-2.1,0.8,1.9,2,5.3,10.5]);
});

test("Empty Array", () => {
    expect(quickSort([])).toStrictEqual([]);
});