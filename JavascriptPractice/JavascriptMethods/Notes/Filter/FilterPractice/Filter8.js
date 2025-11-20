const dates = [
    "2022-01-10", "2022-02-15", "2022-03-20"
  ];
  
  const start = new Date("2022-02-01");
  const end = new Date("2022-03-01");
  
  const result = dates.filter(d => {
    const date = new Date(d);
    return date >= start && date <= end;
  });
  
  console.log(result);
  console.log(new Date());
  console.log(new Date("2022-01-10"));


























//   OUTPUT:
        // [ '2022-02-15' ]
        // 2025-11-20T07:56:13.310Z
        // 2022-01-10T00:00:00.000Z