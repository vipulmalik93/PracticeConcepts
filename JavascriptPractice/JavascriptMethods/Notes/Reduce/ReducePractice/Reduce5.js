const arr = [1, 2, 3, 4, 5];

//  M1: my
const result = arr?.reduce((acc, crnt) => {
    
    if(crnt % 2 === 0 ) {
       
          acc['even'] = [...acc['even'], crnt];
     } else {
         acc['odd'] = [...acc['odd'], crnt];
     }
   
    return acc;
},{even: [], odd:[]});

console.log("result:", result);
// console.log("users1:", users);



// M2: chatgpt

const group = arr.reduce((acc, curr) => {
    const key = curr % 2 === 0 ? "even" : "odd";
    acc[key].push(curr);
    return acc;
  }, { odd: [], even: [] });
  
  console.log(group);

  



















//   OUTPUT:
// { odd: [1, 3, 5], even: [2, 4] }

