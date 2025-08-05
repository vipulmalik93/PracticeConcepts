// Reduce function is basically used at a place where you have to take all teh elements of an array and come up with a single value 
// out of them.

// Find out the sum of tha array.

// M1: Traditional way of finding sum.

const arr = [5,1,3,2,6];

function findSum (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
       sum += arr[i];
    }

    return sum;
}

console.warn("traditional way of finding sum by looping using for loop:", findSum(arr))



// M2: Using reduce:

const reduceOutputSum = arr.reduce(function sumArray (acc, curr) {
      acc = acc + curr;
      return acc;
}, 0);
console.warn("reduceOutputSum:", reduceOutputSum);