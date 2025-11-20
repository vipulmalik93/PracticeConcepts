const data = [
    {id: 1, info: {active: true}},
    {id: 2, info: {active: false}},
    {id: 3, info: {active: true}}
  ];



  const result = data?.filter((item)=> item?.info?.active);


  console.log("result--->>", result);


























//   OUTPUT:

                // result--->> [
                //     { id: 1, info: { active: true } },
                //     { id: 3, info: { active: true } }
                // ]
  