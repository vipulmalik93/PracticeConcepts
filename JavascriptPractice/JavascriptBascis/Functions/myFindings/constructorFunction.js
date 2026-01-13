function Counter() {
    var count = 0;
    console.log("hiii")
  
    this.incrementCounter = function () {
      count++;
      console.log(count);
    };
  }
  
  Counter();
  incrementCounter();




















// Explanation...
//   in non strict mode this 
  // refers to global object that's whty incrementCounter got attached to the global object and we can call it 

















// OUTPUT

//   Hi
//   1


















