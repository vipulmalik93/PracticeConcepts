
// Format objects into strings

const products = [
    { item: "Pen", price: 10 },
    { item: "Notebook", price: 40 }
  ];


// Expected Output:
            // ["Pen costs 10", "Notebook costs 40"]


const formattedString = products?.map((elem) => `${elem?.item} costs ${elem?.price}`)
  

console.log("formattedString:", formattedString);



// OUTPUT: 
    // formattedString: [ 'Pen costs 10', 'Notebook costs 40' ]