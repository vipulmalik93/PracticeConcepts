

var a = 10;
let a1 = 100;

console.log("A", this.a, window.a);
console.log("A1", this.a1, window.a1)











// Output:

// A 10 10
// A1 undefined undefined




// A1 is undefined because variables declared with let and const are present in global scope but they are not
//  part or they are not attached to the global object i.e window object. Whiel var is also present in global
//  object but and also got atached to global window object.