// EXAMPLE1:


function test(obj) {
    obj.value = 20;
    console.log("Inside:", obj);
  }
  
  let myObj = { value: 10 };
  test(myObj);
  console.log("Outside:", myObj);



// EXAMPLE2: 
  

function test1(obj1) {
    obj1 =  { value: 200 };
    console.log("Inside:", obj1);
  }
  
  let myObj1 = { value: 10 };
  test1(myObj1);
  console.log("Outside:", myObj1);
  









//   OUTPUT:

// EXAMPLE1:
// Inside: { value: 20 }
// Outside: { value: 20 }


// EXPLANATION:

// see after applying the debugger that myObj variable also get created in the local scope of function but here 
// after changing the value of obj changes to the global one because it the parameter which is passed is the 
// reference which is pointing to that global variable not the actual value passed as they are passed in primitive 
// cases . In non primitive cases reference got passed not the actual variable value so that'w why modifying it 
// inside local scope i.e ocal variable effects the global one also.
// Non primitive i.e object, array, function.
// Primitives are number, string, boolean, undefined, null, symbol, igint.

// 1. The reference to myObj is passed, not the actual object.
// 2. Both obj (inside the function) and myObj (outside) point to the same memory address.
// 3. So modifying the object inside affects the one outside too.






// EXAMPLE2: 
// Inside: {value: 200}
// Outside: {value: 10}


// Explanation for example2:

// 1. When you pass an object:
// 2. JavaScript copies the reference (a pointer) into the parameter.
// 3. So both variables point to the same object until you reassign the parameter.
// 4. If you mutate (change the content) of the object, both see it.
// 5. If you reassign (make the parameter point to a new object), it only affects the local copy.
