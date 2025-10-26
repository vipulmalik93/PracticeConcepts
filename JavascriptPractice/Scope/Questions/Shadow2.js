var a = 10;
function outer() {
  var b = 20;
  function inner() {
    console.log(a, b);
  }
  return inner;
}
var func = outer();
var b = 50;
func();

























// OUTPUT:
//   10 20