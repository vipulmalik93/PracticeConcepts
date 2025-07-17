function outer (xyz) {
    var a1 =10;
    var  a2 =20;
    function inner () {
        console.warn(a1, a3, a4, xyz);
    }
    var a3 = 30;
    let a4 = 40;
    return inner;
}

let result  = outer("Hello!");
result();