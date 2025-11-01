function Counter() {}
Counter.prototype.count = 0;

Counter.prototype.increment = function () {
  this.count++;
var count = 10
  console.log(this.count);
  count++;
  console.log(count);
};

let c1 = new Counter();
let c2 = new Counter();


console.log("first-c1->", c1);
console.log("first-c2->", c2);

// AT LINE A
console.log(c1.hasOwnProperty("count"))
// AT LINE B
c1.increment()
// AT LINE C
console.log(c1.hasOwnProperty("count"))




console.log("second-c1->", c1);
console.log("second-c2->", c2);

c1.increment()



























// OUTPUT:
    // first-c1-> Counter {}
    // first-c2-> Counter {}
    // false
    // 1
    // 11
    // true
    // second-c1-> Counter {count: 1}
    // second-c2-> Counter {}
    // 2
    // 11







// Explanation:

// Please refer PDF > Questions > Javascript > Closures > Difference in Counters

// That Pdf is also present in this repo Closure > NotesClosure > Difference in counter functions..


// 1. InItially at line A c1  object don't have count property attached to it. But a we called c1.increment()
    //  it first looks in the object whne increment is not there it looks in prototype it finds it there than 
    // increment function looks count in the c1 object because there we are increaing it using this i.e this.count++
    //  it won't find it there than it looks it up in prototype tha it finds it there than it first attached 
    // this = c1 from which it is called than it creates count in the c1 object than increases it. By doing like 
    // this using this.count++ we created count inside the c1 object and increased it there not the prototype count 
    // is increased Headers. That's why at line C it shows true that it has property count at object c1. and aslo 
    // if you check c2 it won't have count attached to it's object.

    // 2.If we have increaded count liek this 

            // Counter.prototype.increment = function () {
            //     Counter.prototype.count++;
            //     console.log(this.count);
            // };

        // than only prototype count fot increased and no count got have attached to c1 liek in the above case it 
        //  got atached.
