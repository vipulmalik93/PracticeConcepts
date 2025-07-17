function outer () {
    var a1 =10;
    var  a2 =20;
    function inner () {
        console.warn(a1, a3, a4);
    }
    var a3 = 30;
    let a4 = 40;
    return inner;
}

outer()();

// by this () we are calling the inner function which is returned from the outer function. This is the short way to call that. 
// We can also write/call the above on elike this mention below.
// let result = outer();
// result();