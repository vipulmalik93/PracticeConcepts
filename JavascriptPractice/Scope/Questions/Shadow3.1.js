// EXAMPLE1:

function test () {
    abc = 20
    console.log(abc)
    
}
var abc = 123
test()

console.log(abc)


console.log("-----------------------------------")



// EXAMPLE2:
function test1 (abc1) {
    abc1 = 20
    console.log(abc1)
    
}
var abc1 = 123
test1(abc1)

console.log(abc1)


























// OUTPUT:


// EXAMPLE1:
//  20
//  20


 // EXAMPLE2:
//  20
//  123



// Explanation:
// Explanation of example2:

// when we pass through parameters and than that parameter creates localvariable there in that scope see after 
// applying debugger in code that that variable is present in the local scope of function so assiging new value 
// to that variable which is passed through parameter won't affect the global variable value because in this case 
// a local variable of that name of which parameter is is created and that one is updated not the global one.

// 1. The parameter abc creates a local variable inside the function test.
// 2. Inside the function, when you write abc = 20, it reassigns the local variable, not the global one.
// 3. Then it logs 20.

// In short:
// Function parameters create local copies of the values you pass.
// Changing the parameter does not affect the original global variable if the argument is a primitive type (like number, string, boolean).