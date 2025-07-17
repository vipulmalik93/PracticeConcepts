
function counter () {
    var count = 0;
    return function incrementCounter () {
      var countersDummy1 = 1000;
      let countersDummy2 = 2000;
      count++;
      console.log(count);
    }
}


var counter1 = counter();
counter1();
counter1();

var counter2  = counter();
counter2();
counter2();