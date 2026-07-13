const grouped = users.reduce((acc, curr) => {
    if (!acc[curr.age]) acc[curr.age] = [];
    acc[curr.age].push(curr.name);
    return acc;
  }, {});
  console.log(grouped);
  