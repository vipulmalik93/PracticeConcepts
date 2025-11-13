setInterval(() => {
    Promise.resolve().then(() => console.log("Promise resolved"));
    console.log("Interval running");
  }, 1000);






































//   OUTPUT:


                // Interval running
                // Promise resolved
                // Interval running
                // Promise resolved
                // Interval running
                // Promise resolved
