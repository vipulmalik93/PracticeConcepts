// Example4:
function test3() {
    var a = 10;
    if (true) {
      var b = 20; // both var, no conflict
      console.log(b); // 20
    }
    console.log(a); // 10
  }

//  works fine
