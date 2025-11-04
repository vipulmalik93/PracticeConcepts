function outer() {
    let a = 10;
    function inner() {
      console.log(a);
        a++; 
    }
    return inner;
  }
  const fn = outer();
  fn();
  fn();
  outer()();


























//   OUTPUT:

// 10
// 11
// 10