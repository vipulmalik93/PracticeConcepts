function createBase(num) {
    return function (innerNum) {
      return num + innerNum;
    };
  }
  var addSix = createBase(6);
  console.log(addSix(10));
  console.log(addSix(21));


























//   OUTPUT:
        // 16 
        // 27