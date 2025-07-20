class Person {
    city = "jaipur";
    constructor (name) {
        this.name = name;
    }

    sayHello () {
        let state = "uttar pradesh"
        console.log(`${this.name} says Hello in ${this.city} at state ${state}`)
    }
}

const person1 = new Person("vipul")
person1.sayHello()
console.log("CITY:", person1.city);