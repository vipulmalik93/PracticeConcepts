// FIND MAX VALUE IN ARRAY:

// M1:  Traditional way using for loop..
const arr = [8,1,3,20,6];

function findMax (arr) {

   let max = 0;

   for(let i =0; i < arr.length; i++) {
          if(arr[i] > max) {
            max = arr[i]
          }
   }

   return max;
}

console.log("traditional way of finding MAX:", findMax(arr));



// M2: Using Reduce function...


const reducedMaximun =  arr.reduce(function (max, curr) {
          if(curr > max) {
            max = curr;
          }

          return max;
},0);


console.log("reducedMaximun:", reducedMaximun);
