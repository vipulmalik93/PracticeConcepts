function testFunctionScope() {
    var insideVar = "inside function (var)";
    let insideLet = "inside function (let)";
    const insideConst = "inside function (const)";
    
    console.log("insideVar:", insideVar);     // ✅
    console.log("insideLet:", insideLet);     // ✅
    console.log("insideConst:", insideConst); // ✅
  }
  
  testFunctionScope();
  
  // Try accessing outside the function
  console.log("outsideVar:", typeof insideVar);   // ❌ undefined
  console.log("outsideLet:", typeof insideLet);   // ❌ undefined
  console.log("outsideConst:", typeof insideConst); // ❌ undefined



//   Key Takeaways:
//   var = function-scoped and attaches to window (in browser)
  
//   let and const = block-scoped and do NOT attach to window
  
//   Avoid var in modern JavaScript unless you have a specific reason
  