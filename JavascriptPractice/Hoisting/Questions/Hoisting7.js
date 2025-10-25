function foo() {
    console.log("a1:", a);
    a();
    var a = 2;
    function a() {
        console.log("a2:", a);
    }
    console.log("a3:", a);
    a();
  }
  foo();



















//   OUTPUT:

// a1: ƒ a() {
//     console.log("a2:", a);
// }
//  a2: ƒ a() {
//     console.log("a2:", a);
// }
//  a3: 2
//  Uncaught TypeError: a is not a function
