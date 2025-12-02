
// Convert array of arrays into single object

const arr = [
    ["name", "Vipul"],
    ["age", 31],
    ["role", "Frontend"]
  ];
  



// M1- my

const result = arr?.reduce((acc, crnt) => {
    acc[crnt[0]] = crnt[1]
    return acc;
},{});

console.log("result:", result);




// M2- chat gpt

const obj = arr.reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
  }, {});
  console.log(obj);



//   OUTPUT:
// result: { name: 'Vipul', age: 31, role: 'Frontend' }
  