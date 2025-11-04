
function foo() {
    var a = b = 0;
    a++;
    return a;
  }
  console.log(foo())
  
  console.log("type of a:",typeof a, );
  console.log("type of b:", typeof b);

























//   OUTPUT:
        // 1
        // type of a: undefined
        // type of b: number