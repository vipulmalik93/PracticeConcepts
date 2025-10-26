let a = 10;

console.warn("a-1:", a)

function xyz () {
    // console.warn("a-2:", a);
    let a = 20;
    console.warn("a-3:", a);

}
console.warn("a-4:", a);
xyz();
console.warn("a-5:", a);



























// output:

//  a-1: 10
//  a-4: 10
//  a-3: 20
//  a-5: 10