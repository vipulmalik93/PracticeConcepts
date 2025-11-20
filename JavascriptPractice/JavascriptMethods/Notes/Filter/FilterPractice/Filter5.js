
// Remove null, undefined, and empty strings

const arr = ["hello", "", null, "react", undefined, "js"];



// METHOD1:

const cleanedM1 = arr.filter(x => x);
console.log("cleaned-->>M1:", cleanedM1);



// METHOD2:

const cleanedM2 = arr.filter(Boolean);
console.log("cleaned-->>", cleanedM2);







// OUTPUT:
        //[ 'hello', 'react', 'js' ]


// EXPLANATION:
        // filter() keeps only values where the callback returns true.