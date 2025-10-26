let a = 5;
function first() {
  function second() {
    console.log(a);
  }
  let a = 10;
  second();
}
first();


let abc = 5;
function second() {
  function second() {
    console.log(abc);
  }
  second();
  let abc = 10;
 
}
second();


























// OUTPUT:

// 10

// Uncaught ReferenceError: Cannot access 'abc' before initialization
   