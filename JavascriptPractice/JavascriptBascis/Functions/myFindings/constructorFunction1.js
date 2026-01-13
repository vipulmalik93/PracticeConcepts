'use strict';

function Counter() {
    var count = 0;
    console.log("hiii")
  
    this.incrementCounter = function () {
      count++;
      console.log(count);
    };
  }
  
  Counter();
  incrementCounter();



























// EXPLANATION.......
    //  In tsrict mode this refers to undefined that's why increment counter give error in non strict mode this 
    // refers to global object that's whty incrementCounter got attached to the global object and we can call it 
    // directly like in previous example we did at constructorFunction.js file







// Refer counstructorFunction1 PDF.................








//   OUTPUT:

                // hiii

                // ERROR!
                // /tmp/G7WP60TqvX/main.js:6
                //     this.incrementCounter = function () {
                //                         ^

                // TypeError: Cannot set properties of undefined (setting 'incrementCounter')