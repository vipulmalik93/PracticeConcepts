function a() {
    let x = 50;
    function b() {
      let x = 25;
      console.log(x);
    }
    return b;
  }
  let func = a();
  func();


























//   OUTPUT: 25