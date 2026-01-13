function Counter () {
    var count = 0;
    console.log("count:",count)
 
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


























// OUTPUT:
    //  0