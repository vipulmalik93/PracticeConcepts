let a = 10;
let tempUser = null; // global reference

function check(a) {
  console.log(a);
  let user = { uniqueAge: a }; // use unique key for easier search
  tempUser = user; // keep it alive globally
}

function release() {
  tempUser = null; // allow GC
}
