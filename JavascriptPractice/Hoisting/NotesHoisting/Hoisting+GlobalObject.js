console.log("a-log1:", a);

var a;

console.log("a-log2:", a);

a= 10;

console.log("a-log3:", a);


// console.log("b-log1:", b);
// the above console will give:  Uncaught ReferenceError: Cannot access 'b' before initialization

let b;
console.log("b-log2:", b);
b = 20;
console.log("b-log3:", b);



// var variables got attached to the global object i.e window. but let variables defined at gloab level 
// present at global level but don't get attached to the gloabl object i.e window.

// trying to acces from global object:

console.log("a-window-Object", window.a);
console.log("b-window-Object", window.b);


// trying to access using this:

console.log("a-this:", this.a);
console.log("b-this:", this.b);















// Output:


// a-log1: undefined
//  a-log2: undefined
//  a-log3: 10
// b-log2: undefined
//  b-log3: 20
//  a-window-Object 10
// b-window-Object undefined
// a-this: 10
//  b-this: undefined