// function count1 () {
//    for (var i = 0; i < 7; i++) {
//        console.warn("i:", i)
//    }
// }

// count1();




function count2 () {
    var a =10;
    let b = 20;
    for (let i = 0; i < 7; i++) {
        var a = 30;
        let b = 40;
        console.warn("i:", i)
    }
 }
 
 count2();