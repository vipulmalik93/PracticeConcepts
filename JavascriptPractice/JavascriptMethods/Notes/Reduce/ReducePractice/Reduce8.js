// Sum values by category......

const items = [
    { category: "fruit", price: 50 },
    { category: "veg", price: 30 },
    { category: "fruit", price: 20 }
  ];
  
  
  const result = items?.reduce((acc, crnt) => {
      if(!acc[crnt?.category]) {
             acc[crnt?.category] = crnt?.price
      } else {
          acc[crnt?.category] = acc[crnt?.category] + crnt?.price;
      }
      
      return acc;
      
  },{});

  console.log(result);
  