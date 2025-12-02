// Find longest string...



const arr = ["hello", "javascript", "hi"];

const longest = arr.reduce((acc, curr) =>
    curr.length > acc.length ? curr : acc
  );
  console.log(longest);











//   OUTPUT:
// "javascript"

  