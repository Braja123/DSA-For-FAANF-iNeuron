let str = "{()}";



function isValid(str) {
  // here "bracketmapping" defines this collon(:) are one pair
  let bracketmapping = {")":"(", "]":"[", "}":"{"}
  let openParams = ["(", "[", "{"];
  let stack = [];


  for(let s of str) {
  if(openParams.includes(s)) {
    stack.push(s);
  }
    else if(bracketmapping[s] !== stack[stack.length - 1]) return false;
    else stack.pop();
  }
  return stack.length === 0;
}


console.log(isValid(str));
