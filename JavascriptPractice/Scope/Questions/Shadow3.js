// EXAMPLE 1:

function greet() {
    console.log("Hello");
  }

  function test() {
    greet = function () {
      console.log("Hi");
    };
    return greet;
  }
  test()();
  greet();



  console.log("-----------------------");


// EXAMPLE 2:

function first() {
    console.log("Hello");
}

function second() {
    function first () {
      console.log("Hi");
    };
    return first;
  }
  second()();
  first();









//   OUTPUT:
//   Example1:
            //   Hi
            //   Hi




//   Example2:
            //   Hi
            //   Hello

















