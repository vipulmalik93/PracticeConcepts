function outer() {
    let count = 0;
    return function inner() {
          if (count < 3) {
              console.log(++count);
               inner(); 
              }
          }; 
      }
  const fn = outer();
  fn();