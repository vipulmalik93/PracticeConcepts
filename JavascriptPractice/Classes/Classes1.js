class Person {
    city = "jaipur";
    // let country = "india";     
    //  the above country line   will  give error because we can not write 
    constructor (name) {
        this.name = name;
    }

    sayHello () {
        let state = "uttar pradesh"
        console.log(`${this.name} says Hello in ${this.city} at state ${state}`)
    }
}

const person1 = new Person("vipul")
console.log("person1-1:", person1);
person1.sayHello()
console.log("CITY:", person1.city);
person1.name = "monty";
person1.state = "westbangal"
person1.city = "meerut";
console.log("person1-2:", person1)
const person2 = new Person("rahul");
console.log("person2:", person2)
person2.sayHello();
const person3 = new Person();
console.log("person3:", person3);
