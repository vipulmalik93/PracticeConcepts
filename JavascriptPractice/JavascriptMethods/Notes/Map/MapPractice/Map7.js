// Transform nested array values

const numbers = [
    [1, 2],
    [3, 4],
    [5, 6]
  ];

//   output should be:
// Return a new array where each inner array’s values are doubled:
// [[2, 4], [6, 8], [10, 12]]

const result = numbers?.map((item) => item?.map((elem) => elem *2))

console.log("result--->", result);







// OUTPUT:
// result---> [ [ 2, 4 ], [ 6, 8 ], [ 10, 12 ] ]

  