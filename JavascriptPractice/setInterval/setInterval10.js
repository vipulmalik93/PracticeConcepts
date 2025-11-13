const ids = [];
for (let i = 0; i < 3; i++) {
  ids.push(setInterval(() => console.log("Timer", i), 1000 * (i + 1)));
}
setTimeout(() => ids.forEach(clearInterval), 5000);






































// OUTPUT:
        // Timer 0
        // Timer 1
        // Timer 0
        // Timer 2
        // Timer 0
        // Timer 1
        // Timer 0