// FIND OUT THE LIST OF FULL NAMES....


// M1: Traditional method..


const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26}
]

const output1 = users.map((item) => item.firstName + item.lastName);

console.warn("fullNAME:", output1);


// M2: 

const output2 = users.reduce(function (acc, curr) {
          
             acc.push(curr.firstName + curr.lastName);

                return acc;
},[]);

console.log("output2:", output2);