// Example1:
function test() {
    var a = 10;
    if (true) {
      let a = 20; // ✅ This works because it’s a new block scope
      console.log(a); // 20
    }
    console.log(a); // 10
  }
  test();


// ---------------








  

















// OUTPUT: 
    // 20
    // 10