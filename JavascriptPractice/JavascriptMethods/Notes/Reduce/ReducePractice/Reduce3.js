const arr = [1, 2, 2, 3, 4, 4, 5];


const result = arr?.reduce((acc, crnt) => {
  if(!acc?.includes(crnt)) acc.push(crnt)
  return acc;
},[]);

console.log("result:", result);


























// OUTPUT:
        // result: [ 1, 2, 3, 4, 5 ]