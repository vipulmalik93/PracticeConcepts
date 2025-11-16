// Use map with index


// Given:
// ["a", "b", "c"]
// Return:
// ["0:a", "1:b", "2:c"]

const input = ["a", "b", "c"];
const output = input?.map((item, index) => `${index}:${item}`)
console.log("output:", output);









// OUTPUT:
            // output: [ '0:a', '1:b', '2:c' ]