function Counter() {}

Counter.prototype.count = 0;

Counter.prototype.increment = function () {
  console.log("this is:", this);
  this.count++;
  console.log(this.count);
};

let c1 = new Counter();
const f = c1.increment;


console.log("newFunction-1->", f)

console.log("----------------")

console.log("newFunction-2->", f())

console.log("----------------")

f(); 






// OUTput:

  // newFunction-1-> ƒ () {
  //   console.log("this is:", this);
  //   this.count++;
  //   console.log(this.count);
  // }
  // ----------------
  // this is: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  //  NaN
  //  newFunction-2-> undefined
  //  ----------------
  //  this is: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
  //  NaN




// Explanation:

        // In non-strict mode, if a function is called directly (not as an object method),
        // JavaScript automatically sets this to the global object (window).
        // So this.count++ modifies a global variable instead of your object’s property — which can cause unexpected bugs.



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
// It checks in window for count there undefined than undefined + 1  = NAN; now window object contains count and it has NAn VALUE
