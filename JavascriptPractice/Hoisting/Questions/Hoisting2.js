
// in browser apply debugger at abc()
//  where we are calling there means we are not calling it at that time than see in global object before 
// calling entire function is present before code execution phase it is copied theer/hoisted there at the time
//  of memory creation phase only.
abc();
function abc () {
    console.log("abc-->>")
}