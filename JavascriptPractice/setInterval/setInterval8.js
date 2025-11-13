
let id = setInterval(() => console.log("Ping"), 1000);
setTimeout(() => clearInterval(id), 3000);
setTimeout(() => clearInterval(id), 5000);











// output:
// Ping
// Ping


// Explanation:
// two time ping because the larger timer gets priority if smaller timer and larger timer gets collision that's why at 3 sec it runs setTimeout first which removed id