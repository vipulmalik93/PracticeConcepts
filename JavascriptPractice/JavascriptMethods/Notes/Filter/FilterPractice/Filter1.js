
// Filter truthy values

const arr = [0, 1, "", "hello", false, true, null];

const result = arr?.filter((item) => Boolean(item))
console.log("result:", result)


























// OUTPUT:
        // result: [ 1, 'hello', true ]


// Explanation see Filter1.pdf