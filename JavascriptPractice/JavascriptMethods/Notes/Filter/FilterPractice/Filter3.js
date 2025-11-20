// find all the indexex of value 20...


const arr = [10, 20, 30, 20, 40, 20];


// METHOD1:

const indexesM1 = arr?.map((value, index) => value === 20 ? index : -1)?.filter((elem) => elem != -1);

console.log("indexesM1:",indexesM1);


// METHOD2:

const indexexM2 = arr?.reduce((acc, current, indx) => {
    if(current === 20) {
        acc.push(indx)
    }
    return acc;
},[])


console.log("indexexM2:",indexexM2);




// METHOD3:

        const indexesM3 = []
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === 20) {
                indexexM3.push(i)
            }
        }

        console.log("indexesM3:", indexexM3)




























// OUTPUT:
// indexesM1: [ 1, 3, 5 ]