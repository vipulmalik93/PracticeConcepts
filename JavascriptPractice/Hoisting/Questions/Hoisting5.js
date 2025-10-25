console.log("foo1:", foo);
var foo = 10;
console.log("foo2:", foo)

function foo() {
    var xyz = 20;
  }
  console.log("foo3:", foo);
//   console.log("foo4:", foo());






//   OUTPUT:

// foo1: ƒ foo() {
//     var xyz = 20;
//   }
//  foo2: 10
//  foo3: 10
//  Uncaught TypeError: foo is not a function
   



