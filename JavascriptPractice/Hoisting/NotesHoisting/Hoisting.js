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


// If we declares a function e.g xyz and don't call it anywhere even than in memeory creation phase memory gets allocated to it even after we don't called it.See after applying debugger in scope.
function xyz () {

}

