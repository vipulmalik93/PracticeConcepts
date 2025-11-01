function Counter() {}
Counter.prototype.count = 0;

Counter.prototype.increment = function () {
  Counter.prototype.count++;
  console.log("count", this.count);
  console.log("this is:", this);
//   this.count++;
};

let c1 = new Counter();

console.log("c1:", c1);
console.log("--------------------------------")
console.log("c1-->>Increment-->>", c1.increment());
console.log("c1:", c1);
console.log("-----------------------------")
const f = c1.increment;
console.log("newFunction-1->", f)
console.log("----------------")
console.log("newFunction-2->", f())
console.log("----------------")
f(); 












// OUTPUT:
        
                //     Counter {}
                //  --------------------------------
                //  count 1
                // this is: Counter {}
                //  c1-->>Increment-->> undefined
                //  c1: Counter {}[[Prototype]]: Object
                //  -----------------------------
                //  newFunction-1-> ƒ () {
                //   Counter.prototype.count++;
                //   console.log("count", this.count);
                //   console.log("this is:", this);
                // }
                //  ----------------
                // count: undefined
                //  this is: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
                //  newFunction-2-> undefined
                //  ----------------
                //  count: undefined
                //  this is: Window {window: Window, self: Window, document: document, name: '', location: Location, …}







// Explanation:


// Please refer PDF > Questions > Javascript > Closures > Difference in Counters

        // Q.“We are storing the reference of the function that is called by c1, right? So shouldn’t it remember 
           // that it belongs to c1?”



        //    When we do const f = c1.increment;, we’re only storing the function reference, not the connection between the function and c1.
        //    So when f() is called directly, there’s no object before the dot — hence this is undefined (in strict mode).
        //    this is always decided at the time of function call, not at the time of variable assignment.



// ---------- Case 1: Strict Mode ----------
// "use strict";
// f(); 
// this = undefined
// ❌ Error: Cannot read properties of undefined (reading 'count')
// Because in strict mode, JS does NOT default to any object
// When a function is called directly (not as an object method),
// 'this' becomes undefined.

// ---------- Case 2: Non-Strict Mode ----------
// Remove or comment out "use strict"
// f(); 
// this = window (global object)
// ✅ Works, but modifies window.count instead of c1.count
// this.count++ actually becomes window.count++
// Can create accidental global variables → BAD PRACTICE
//  at line 8 which is commented it will add count to window object and undefined +  1 = Nan will stored at window's count. see after uncommenting that becaue increment function is not called on any function so it's this got set to undefined in this direct call f() case and there this.count++ adds count at window object. If uncommented.

