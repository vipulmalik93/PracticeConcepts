let a = 5;
function outer() {
  let a = 10;
  return function inner() {
    console.log(a);
  };
}
const fn = outer();
fn();