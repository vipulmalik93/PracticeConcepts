new Promise(resolve => {
    setTimeout(() => {
      resolve("done");
    }, 1000);
  }).then(val => console.log(val));
  