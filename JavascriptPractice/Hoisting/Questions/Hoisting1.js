function foo() {
    console.log(a);
    var a = 2;
    function a() {}
    console.log(a);
  }
  foo();










































//   OUTPUT:

// ƒ a() {}
//  2







































//   OUTPUT:

// ƒ a() {}
//  2