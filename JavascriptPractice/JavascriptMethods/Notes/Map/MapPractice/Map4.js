

// Method1.... Wrong method.....

const user = [
    { name: "Vipul", age: 31 },
    { name: "Arun", age: 28 },
    { name: "Mohan", age: 17}
  ];
  
  
  const newUser = user?.map((item) => {
      if(item?.age >= 18) {
        return item.isAdult = true; 
      } else {
          return item;
      }
  })
  
  console.log("user:", user);
  console.log("newUser:", newUser);


  //   OUTPUT of method 1....

            // users: [
            //     { name: 'Vipul', age: 31, isAdult: true },
            //     { name: 'Arun', age: 28, isAdult: true },
            //     { name: 'Mohan', age: 17 }
            // ]
            // newUsers: [ true, true, { name: 'Mohan', age: 17 } ]


// EXPLANATION:

            // Key Takeaways

            // map() → returns a new array.

            // Objects inside the array → still same references. Mutating them affects the original array.

            // item.isAdult = true → returns true, that’s why newUsers is [true, true].











// Method2.... Right Method....


const users = [
    { name: "Vipul", age: 31 },
    { name: "Arun", age: 28 },
    { name: "Mohan", age: 17}
  ];
  
  
  const newUsers = users?.map((item) => {
      if(item?.age >= 18) {
         return {...item, 
                   isAdult: true
         } 
      } else {
          return item;
      }
  })
  
  console.log("users:", users);
  console.log("newUsers:", newUsers);


//   the above second method we can also write like this:
//   const result = users.map(u => ({
//     ...u,
//     isAdult: u.age >= 18
//   }));
  
//   console.log(result);





//   OUTPUT of method 2....

            // users: [
            //     { name: 'Vipul', age: 31 },
            //     { name: 'Arun', age: 28 },
            //     { name: 'Mohan', age: 17 }
            // ]
            // newUsers: [
            //     { name: 'Vipul', age: 31, isAdult: true },
            //     { name: 'Arun', age: 28, isAdult: true },
            //     { name: 'Mohan', age: 17 }
            // ]