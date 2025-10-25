var x = 100;
function foo(y = x) {
  var x = 200;
  console.log("y:", y);
}
foo();








let x1 = 10;
function foo1(y1 = x1) {
  let x1 = 20;
  console.log("y1:", y1);
}
foo1();





var x2 = 1;
function foo3(y2 = x2) {
  let x2 = 2;
  console.log("y2:",y2);
}
foo3();



function foo4(y = xyz) {
    let xyz = 20;
    console.log("y3:", y);
  }
  
  foo4();























//   OUTPUT:

// y: 100
// y1: 10
// y2: 1
// Uncaught ReferenceError: xyz is not defined
