// Example4:
function test3() {
    var a = 10;
    if (true) {
      var a = 20; // both var, no conflict
      console.log(a); 
    }
    console.log(a); 
  }

  test3()

//  works fine



























// OUTPUT:
    // 20
    // 20