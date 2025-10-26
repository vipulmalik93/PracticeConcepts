var a =  10;

{
    console.warn("a-1:", a);
    var a = 20;
    console.warn("a-2:", a);
}

console.warn("a-3:", a);































// OUTPUT:
    // a-1: 10
    // a-2: 20
    // a-3: 20