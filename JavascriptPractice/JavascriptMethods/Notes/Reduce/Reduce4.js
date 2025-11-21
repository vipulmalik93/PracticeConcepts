// Find out how many people are of particular age.


// M1:

const users = [
    {firstName: "akshay", lastName: "saini", age: 26},
    {firstName: "donald", lastName: "trump", age: 75},
    {firstName: "elon", lastName: "musk", age: 50},
    {firstName: "deepika", lastName: "padukone", age: 26}
]

const output = users.reduce(function (acc, curr) {

    if(acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }

    return acc;

},{});


console.warn("output-->>", output)


// M2:

function frequencyOfAge(users) {

    let obj = {};
    for(let i = 0 ; i < users.length; i ++) {
               if(obj[users[i].age]) {
                obj[users[i].age] += 1;
               } else {
                obj[users[i].age] = 1;
               }
    }
    return obj;
}

console.log("frequencyOfAge using single for loop", frequencyOfAge(users));


// M3: 

function frequencyOfAge1(users) {

    let obj = {};
    for(let i = 0 ; i < users.length; i ++) {
       for(const key in users[i]) {
       
                if(key == "age") {
                    console.warn(key)
                    if(obj[users[i][key]]) {
                        obj[users[i][key]] += 1;
                       } else {
                        obj[users[i][key]] = 1;
                       }
                }
        }
    }

    return obj;  

}

console.log("frequencyOfAge using single for loop and for in loop", frequencyOfAge1(users));




