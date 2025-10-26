let a = 1;
function foo() {
  console.log(a);
  if (true) {
    let a = 2;
  }
}
foo();



























// output: 
// 1