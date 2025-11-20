
// Remove duplicates from array of objects

const arr = [
    {id:1, name:"A"},
    {id:2, name:"B"},
    {id:1, name:"A2"}
  ];
  
  const unique = arr.filter((obj, index, self) =>
    index === self.findIndex(o => o.id === obj.id)
  );
  
  console.log(unique);






//   OUTPUT:
// [ { id: 1, name: 'A' }, { id: 2, name: 'B' } ]