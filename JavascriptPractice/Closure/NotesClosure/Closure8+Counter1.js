
function counter () {
      var count = 0;
      return function incrementCounter () {
        var countersDummy1 = 1000;
        let countersDummy2 = 2000;
        if(countersDummy2 === 2000) {
          var counterInsideIf1 = 3000;
          let counterInsideIf2 = 4000;

          console.log("hi")
        } else {
          var counterInsideElse1 = 3000;
          let counterInsideElse2 = 4000;
          console.log("byye")
        }
        count++;
        console.log(count);
      }
}


var counter1 = counter();
counter1();
counter1();



























// OUTPUT:
    //  hi
    // 1
    // hi
    // 2

