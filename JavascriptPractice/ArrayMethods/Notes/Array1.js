// Map

// M1: 

const arr = [5, 1, 3, 2 ,6];

function double(x) {
    return x*2;
}
const output1 = arr.map(double)
console.warn("output1:", output1);


// M2: 

const output2  = arr.map(function double1 (x) {
    return 2 * x
})

console.warn("output2:", output2);

// M3: 

const output3 =  arr.map((x) => {
    return x*3;
})

console.warn("output3:", output3);

const output4 = arr.map((x) => (x*2).toString());
console.warn("output4:", output4);



