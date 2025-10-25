var abc =7;
let abc1  = 8;
let abc2 = 9;


function getName () {
    console.log("Namaste Javascript!")
}

const getName1 = () => {
    console.log("Namaste Javascript - 1")
}

var getName2  = () => {
    console.log("Namaste Javascript - 2")
}

var getName3  = () => {
    return console.log("Namaste Javascript - 3")
}



console.log(abc);

getName();
console.log(getName())
console.log(getName);

getName1();
console.log(getName1())
console.log(getName1);

getName2();
console.log(getName2());
console.log(getName2)


getName3();
console.log(getName3());
console.log(getName3)


// If we declares a function e.g xyz and don't call it anywhere even than in memeory creation phase memory gets allocated to it even after we don't called it.See after applying debugger in scope.
function xyz () {

}














// output:


// 7
// Namaste Javascript!
// Namaste Javascript!
// undefined
// ƒ getName () {
//     console.log("Namaste Javascript!")
// }

// Namaste Javascript - 1
// Namaste Javascript - 1
// undefined
// () => {
//     console.log("Namaste Javascript - 1")
// }

// Namaste Javascript - 2
// Namaste Javascript - 2
// undefined
// () => {
//     console.log("Namaste Javascript - 2")
// }

// Namaste Javascript - 3
// Namaste Javascript - 3
// undefined
// () => {
//     return console.log("Namaste Javascript - 3")
// }


