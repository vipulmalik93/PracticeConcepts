function test5 () {
    let a = 10;
    function inner() {
      var a = 20; // ✅ Different function scope
      console.log(a);
    }
    inner();
    console.log(a);
  }
  test5();

//   works fine


























// OUTPUT:
    // 20
    // 10