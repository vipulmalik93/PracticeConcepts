var x = 1;

console.log("X1:", x);
xyz();

function xyz () {
    console.log("X2:",x );
    var x = 2;
    console.log("X3:", x);
    console.log("X4:", this.x);
    console.log("X5:", window.x);
}





var abc = 1;

console.log("ABC1:", abc);
xyz();

var  xyz  = () => {
    console.log("ABC2:",abc );
    var abc = 2;
    console.log("ABC2:", abc);
    console.log("ABC3:", this.abc);
    console.log("ABC4:", window.abc);
}






































// Output:
// X1: 1
//  X2: undefined
//  X3: 2
//  X4: 1
//  X5: 1
//  ABC1: 1
//  X2: undefined
//  X3: 2
//  X4: 1
//  X5: 1

