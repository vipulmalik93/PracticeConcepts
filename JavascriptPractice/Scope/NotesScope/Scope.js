// EXAMPLE1:

let a = 10;
{
  var a = 20; 
  console.warn("a:1:",a)
}
console.warn("a:2:",a)

// Above Still throws error — because they’re in the same function/global scope!


// EXAMPLE2:


var abc = 100;
{
    let abc = 200;
    console.warn("abc:3:", abc);
}

console.warn("abc:3:", abc);

// it works fine






