// Global scope
var varGlobal = "I am var";
let letGlobal = "I am let";
const constGlobal = "I am const";

// Access variables
console.log("varGlobal:", varGlobal);           // ✅ I am var
console.log("letGlobal:", letGlobal);           // ✅ I am let
console.log("constGlobal:", constGlobal);       // ✅ I am const

// Check if attached to window
console.log("window.varGlobal:", window.varGlobal);   // ✅ I am var
console.log("window.letGlobal:", window.letGlobal);   // ❌ undefined
console.log("window.constGlobal:", window.constGlobal); // ❌ undefined


// Key Takeaways:
// var = function-scoped and attaches to window (in browser)

// let and const = block-scoped and do NOT attach to window

// Avoid var in modern JavaScript unless you have a specific reason