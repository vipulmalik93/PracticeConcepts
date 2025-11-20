// Filter objects by key existence
// Return objects that contain the key "role"


const users = [
    {name: "A", role: "dev"},
    {name: "B"},
    {name: "C", role: "tester"}
  ];




//   METHOD1:

        const result1 = users?.filter((item)=> item['role'])
        console.log(result1);


// METHOD2:

  
  const result2 = users.filter(u => u.role !== undefined);
    console.log(result2);

























// OUTPUT:
                // [ { name: 'A', role: 'dev' }, { name: 'C', role: 'tester' } ]
  