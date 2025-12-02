// Create an object grouped by age

const users = [
    {name: "A", age: 20},
    {name: "B", age: 25},
    {name: "C", age: 20},
  ];
  
  
//   M1- my way
  const result = users?.reduce((acc, crnt) => {
      
      if(acc[crnt.age]) {
          acc[crnt.age] = [...acc[crnt.age], crnt.name]
      } else {
          acc[crnt.age] = [crnt.name]
      }
      return acc;
      
  },{})
  
  console.log("result-->>", result);
  console.log("users:", users);




//   M2- chatgpt:

const grouped = users.reduce((acc, curr) => {
    if (!acc[curr.age]) acc[curr.age] = [];
    acc[curr.age].push(curr.name);
    return acc;
  }, {});
  console.log(grouped);
  
















//   OUTPUT1:
                // result-->> { '20': [ 'A', 'C' ], '25': [ 'B' ] }
                // users: [
                // { name: 'A', age: 20 },
                // { name: 'B', age: 25 },
                // { name: 'C', age: 20 }
                // ]

