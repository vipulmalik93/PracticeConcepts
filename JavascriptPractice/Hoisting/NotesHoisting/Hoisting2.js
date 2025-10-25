var x = 1;

console.log("X1:", x);
xyz();

function xyz () {
    console.log("X2:",x );
    var x = 2;
    console.log("X3:", x);
    console.log("X4:", this.x);
    console.log("X5:", window.x);
    console.log("this:", this);
}



console.log("-------------------------")

var abc = 1;

console.log("ABC1:", abc);
// if we calls xyz here than it will give that xyz is not a function error becaue it is arrow function.
// xyz1();

var  xyz1  = () => {
    console.log("ABC2:",abc );
    var abc = 2;
    console.log("ABC3:", abc);
    console.log("ABC4:", this.abc);
    console.log("ABC5:", window.abc);
    console.log("this:", this);
}

xyz1();

console.log("-------------------------")

var abc2 = 1;

console.log("ABC1:", abc2);
// if we calls xyz here than it will give that xyz is not a function error becaue it is arrow function.
// xyz2();

let  xyz2  = () => {
    console.log("ABC2:",abc2 );
    var abc2 = 2;
    console.log("ABC3:", abc2);
    console.log("ABC4:", this.abc2);
    console.log("ABC5:", window.abc2);
    console.log("this:", this);
}

xyz2();



console.log("-------------------------")

let abc3 = 1;
var abc4= 40;

console.log("ABC1:", abc3);
// if we calls xyz here than it will give that xyz is not a function error becaue it is arrow function.
// xyz2();

let  xyz3  = () => {
    // the below line console.log("ABC2:",abc3 );  give Uncaught ReferenceError: Cannot access 'abc3' before initialization
    // console.log("ABC2:",abc3 );       
    let abc3 = 2;
    console.log("ABC3:", abc3);
    console.log("ABC4:", this.abc3);
    console.log("ABC5:", window.abc3);
    console.log("this:", this);
    console.log("ABC-abc4-1:", this.abc4);
    console.log("ABC-abc4-2:", window.abc4);
}


xyz3();


















// OUTPUT:


// X1: 1
//  X2: undefined
//  X3: 2
//  X4: 1
//  X5: 1
//  this: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//  -------------------------

//  ABC1: 1
//  ABC2: undefined
//  ABC3: 2
//  ABC4: 1
//  ABC5: 1
//  this: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

//  -------------------------

// ABC1: 1
//  ABC2: undefined
//  ABC3: 2
//  ABC4: 1
//  ABC5: 1
//  this: Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// -------------------------

//  ABC1: 1
// ABC3: 2
//  ABC4: undefined
//  ABC5: undefined
//  this: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// ABC-abc4-1: 40
//  ABC-abc4-2: 40

