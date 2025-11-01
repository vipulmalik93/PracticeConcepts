function counter () {
    var count = 0;
    return function incrementCounter () {
      var countersDummy1 = 1000;
      let countersDummy2 = 2000;
      count++;
      console.log(count);
    }
}


var counter1 = counter();
counter1();
counter1();

var counter2  = counter();
counter2();
counter2();























// OUTPUT:

      // 1
      // 2
      // 1
      // 2





// EXPLANATION:

/*
Each time function i.e here -> counter() is called, a new execution context (new memory space)
is created, and a new "count" variable is stored in that memory (closure).

So, counter1() and counter2() each get their own separate copy of count.
Incrementing one doesn’t affect the other.

If you want both to share the same count, declare "count" outside the counter() 
function so it’s in the global (shared) scope.
*/
