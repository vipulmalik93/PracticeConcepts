
// Example 1:

function count1 () {
   for (var i = 0; i < 7; i++) {
       console.warn("i:", i)
   }
}

count1();

console.log("------------------------------------------------------");

// Example2:

// function count2 () {
//     var a =10;
//     let b = 20;
//     for (let i = 0; i < 7; i++) {
//         var a = 30;
//         let b = 40;
//         console.warn("i:", i, "A:", a, "B:", b)
//     }
//  }
 
//  count2();



//  OUTPUT:
// Example1:
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6

// EXAMPLE2:
        // 1
        // 2
        // 3
        // 4
        // 5
        // 6




// EXPLANATION:

// 1. In first example since i is declared using var thaths why the i comes in local directly memory space see after 
//    applying debugger at example 1.

// 2. At second example since i declared using let and let variables are block scoped so they are not directly 
 // present inside local memory of function it is present at block memory seperately.




