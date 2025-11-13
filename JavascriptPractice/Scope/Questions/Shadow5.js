function test() {
    console.log(x);
    var x = 2;
    function x() {}
    console.log(x);
  }
  test();



























//   OUTPUT:
// [Function: x]
// 2