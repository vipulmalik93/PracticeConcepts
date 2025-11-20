const users = [
    {id:1, role:"admin"},
    {id:2, role:"user"},
    {id:4, role:"admin"},
    {id:5, role:"admin"}
  ];
  
  const allowedIds = [1,4];
  
  const result = users?.filter((item) => allowedIds?.includes(item?.id) && item?.role === "admin");
  
  console.log("result--->>", result);



















//   OUTPUT:
        // result--->> [ { id: 1, role: 'admin' }, { id: 4, role: 'admin' } ]