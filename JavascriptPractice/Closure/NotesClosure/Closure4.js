// function count1 () {
//     for (var i = 0; i < 6; i++) {
//         setTimeout(function () {
//             console.log("i:", i);
//         }, i * 1000)
//     }
//     console.log("Namaste Javascript")
// }

// count1();



// function count2 () {
//     var a =20;
//     let b = 30;
//     for (let i = 0; i < 6; i++) {
//         setTimeout(function () {
//             console.log("i:", i);
//         }, i * 1000)
//     }
//     console.log("Namaste Javascript")
// }

// count2();





// function count3 () {
//     var a = 20;
//     let b = 30;
//     for (var i = 0; i < 6; i++) {
//         function close (j) {
//             setTimeout(function () {
//                 console.log("i:", j);
//             }, j * 1000)
//         }
//         close(i);
       
//     }
//     console.log("Namaste Javascript")
// }

// count3();


// Example 4:

function makeFunctions() {
    const arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(() => console.log(i));
    }
    return arr;
  }
  const funcs = makeFunctions();
  console.log("result-->>", funcs[2]());








// OUTPUT:

// EXAMPLE1:
// Namaste Javascript
// 6, 6, 6,6,6,6




// EXAMPLE2:
// Namaste Javascript
// 0, 1, 2, 3, 4, 5




// EXAMPLE3:
// Namaste Javascript
// 0, 1, 2, 3, 4, 5



// EXAMPLE4:
    //     5


// Explanation:
//  At example 1 i is declared with var present in local memory of count function.
// At example 2 i i declared with let which is block scope that's what it has new i value of that block at 
    // every time.
// At example 3 we created closure of value i by passing every time i to close by this way it causes to form 
//    closure with passed armument value and prints new value every time.






  