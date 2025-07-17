{
    var blockVar = "var inside block";
    let blockLet = "let inside block";
    const blockConst = "const inside block";
  }
  
  console.log("blockVar:", blockVar);     // ✅ accessible (var ignores block)
  console.log("blockLet:", typeof blockLet);     // ❌ undefined
  console.log("blockConst:", typeof blockConst); // ❌ undefined
  