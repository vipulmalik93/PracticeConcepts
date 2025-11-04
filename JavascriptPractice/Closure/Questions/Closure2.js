function makeFunctions() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(() => console.log(i));
    }
    return arr;
  }
  const funcs = makeFunctions();
  console.log("result-->>", funcs[2]());
  
  
























  // OUTPUT:
  // 2