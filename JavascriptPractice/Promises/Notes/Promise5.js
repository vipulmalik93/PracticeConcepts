const p = new Promise(resolve => {
    setTimeout(() => resolve(42), 1000);
  });
  
  p.then(val => console.log(val));