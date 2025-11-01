'use strict';
function Counter() {}
Counter.prototype.count = 0;

Counter.prototype.increment = function () {
  Counter.prototype.count++;
  console.log("count", this.count);
  console.log("this is:", this);
};

let c1 = new Counter();



const f = c1.increment;
console.log("newFunction-1->", f)
console.log("----------------")
console.log("newFunction-2->", f())
console.log("----------------")
f(); 












// OUTPUT:

        // newFunction-1-> ƒ () {
        //     Counter.prototype.count++;
        //     console.log("count", this.count);
        //     console.log("this is:", this);
        //   }
        

        //   ----------------


        //  Uncaught TypeError: Cannot read properties of undefined (reading 'count')
        //       at Counter.increment (Closure+Prototype2.js:7:29)
        //       at Closure+Prototype2.js:18:32




