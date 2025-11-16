// Extract user names

const users = [
    { name: "Vipul", age: 31 },
    { name: "Rohan", age: 25 }
  ];
  
  const useNames = users?.map((item) => item?.name)
  
  console.log("users:", users);
  console.log("useNames:", useNames);






























//   OUTPUT:

            // users: [ { name: 'Vipul', age: 31 }, { name: 'Rohan', age: 25 } ]
            // useNames: [ 'Vipul', 'Rohan' ]