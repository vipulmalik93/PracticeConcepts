// We can chain map, filter and reduce..

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26}
]

const output = users.filter((x) =>  x.age > 30).map((item) => item.firstName);
console.warn("output-->>", output);


