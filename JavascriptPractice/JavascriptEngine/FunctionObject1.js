// HERE, we are seeing that how memory is allocated at heap or at stack , which is refrenced and which got copied directly.



let a = 10; 
function check(a) { 
    console.log(a); 
    let user = { age: a }; 
} 
check(a);



// let a = 10, stored at global leve inside stack.
// check function stored at heap memory and it's reference is stored at stack in global context.
//  inside function check a variable is locally created in local memory of function i.e to its stack/execution context which is presnt at callstack  and passed value gets  copied in that local a variable which is created at local memory because primitive ones gets copied not refrenced.
// {age: a } stored at heap memory and than it's reference is stored to the stack of function check which is present in the call stack. 
// than user also stored at stack/local memory of function and it contains reference of the object which is created above at user level.