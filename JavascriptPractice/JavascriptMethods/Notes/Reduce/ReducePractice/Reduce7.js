// Convert array to nested object

const arr = ["a", "b", "c"];


// M1- Chatgpt
const nested = arr?.reduceRight((acc, curr) => ({ [curr]: acc }), {});
console.log(nested);


// M2- 

const result1 = arr?.reduce((acc, crnt) => {
  
    let newObj = {};
     newObj[crnt] = acc;
     return newObj;
    
 },{});





// M3: 

const result2 = arr?.reduceRight((acc, crnt) => {
  
    let newObj = {};
     newObj[crnt] = acc;
     return newObj;
    
 },{});





//  M4: 
const result = arr?.reduce((acc, crnt) => {
  
    if(Object?.keys(acc)?.length === 0) {
         acc[crnt]= {}
    } else {
        acc[crnt]= acc;
    }
    return acc;
   
},{});


























// OUTPUT:


// M1-
        // { a: { b: { c: {} } } }


// M2-
    //  { c: { b: { a: {} } } }



// M3-
    //  { a: { b: { c: {} } } }



// M4-
    //  <ref *1> { a: {}, b: [Circular *1], c: [Circular *1] }

