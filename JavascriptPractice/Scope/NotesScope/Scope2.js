
//   Example2:
function test1() {
    let a = 10;
    if (true) {
      var a = 20; 
      console.log(a); // ?
    }
    console.log(a); // ?
  }
  test1();
//   it won't work because var a is not block scope and the above one is like this means a got declared above inside function test1.
// it got error at memory creation phase...
// function test1() {
//      var a;
//     let a = 10;
//     if (true) {
//       a = 20; 
//       console.log(a); // ?
//     }
//     console.log(a); // ?
//   }

// Uncaught SyntaxError: Identifier 'a' has already been declared
