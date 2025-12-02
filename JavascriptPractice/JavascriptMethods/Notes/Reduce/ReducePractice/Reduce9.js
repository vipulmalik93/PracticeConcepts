

// Count words in a sentence

const sentence = "hi my name is vipul malik";


// M1:

const wordCount = sentence.split(" ").reduce((acc, curr) => acc + 1, 0);
console.log(wordCount);



// M2: wrong:

// const result = sentence?.reduce((acc, crnt) => {
//     acc = acc + 1;
//     return acc;
// },0);

// M2 will give error-->> TypeError: sentence?.reduce is not a function
// because reduce only works on array.


























// OUTPUT:
//    M1: 6
