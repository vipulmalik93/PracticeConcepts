function Counter() {} 
Counter.prototype.count = 0; 
console.log("CounterPrototype--->>1", Counter.count)
console.log("CounterPrototype--->>2", Counter.prototype.count)



























// OUTPUT:

//  undefined
//   0






// EXPLANATION:

    // Counter.prototype.count → refers to a property on the prototype (used by instances)
    // Counter.count → refers to a property on the constructor function itself (not related to prototype)