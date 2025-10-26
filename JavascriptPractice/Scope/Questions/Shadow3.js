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

//   EXAMPLE 2:

function abc() {
    console.log("Hello");
  }

  function def(abc) {
    abc = function () {
      console.log("Hi");
    };
    return abc;
  }
  def(abc)();
  abc();



  console.log("-----------------------");


// EXAMPLE 3:

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




//   Example3:
            //   Hi
            //   Hello

















