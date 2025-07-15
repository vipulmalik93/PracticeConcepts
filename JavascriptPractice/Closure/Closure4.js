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
//     for (let i = 0; i < 6; i++) {
//         setTimeout(function () {
//             console.log("i:", i);
//         }, i * 1000)
//     }
//     console.log("Namaste Javascript")
// }

// count2();





function count3 () {
    for (var i = 0; i < 6; i++) {
        function close (j) {
            setTimeout(function () {
                console.log("i:", j);
            }, j * 1000)
        }
        close(i);
       
    }
    console.log("Namaste Javascript")
}

count3();