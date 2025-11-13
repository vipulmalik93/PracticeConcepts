let address = { city: "Delhi" };
let user = { name: "Vipul", address: address };
address.city = "Bengaluru";
console.log(user.address.city); 



















// OUTPUT:
// Bengaluru