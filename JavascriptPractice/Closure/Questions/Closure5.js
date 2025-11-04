function x() {
    for (var i = 0; i < 3; i++) {
      (function (i) {
        setTimeout(() => console.log(i), i * 1000);
  })(i); }
  } x();


























//   OUTPUT:
// 0
// 1
// 2