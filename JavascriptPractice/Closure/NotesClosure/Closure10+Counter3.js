function Counter () {
    var count = 0;
    this.incrementCounter = function () {
        count++;
        console.log(count);
    }

    this.decrementCounter = function () {
        count--;
        console.log(count);
    }
}


var counter1  = new Counter();
var counter2 = new Counter();
counter1.incrementCounter();
counter1.incrementCounter();
counter1.decrementCounter();

counter2.incrementCounter();
counter2.incrementCounter();
counter2.decrementCounter();



























// OUTPUT:
// 1 2 1 
//  1 2 1


