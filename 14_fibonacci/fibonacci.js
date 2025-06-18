const fibonacci = function(numArg) {
  let num //check and converts function argument into a number
    if (typeof numArg !== 'number') {
      num = parseInt(numArg)
    }
    else {
      num = numArg;
    }
  
  if(num < 0) {
    return 'OOPS';
  }
  if(num === 0) {
    return 0;
  }
  let FibonacciSecond = 1;
  let FibonacciFirst = 0;
  let result = 0;
  for(let i = 2; i <= num; i++) {
    let result = FibonacciFirst + FibonacciSecond;
    FibonacciFirst = FibonacciSecond;
    FibonacciSecond = result;
  }
  return FibonacciSecond;
};

// Do not edit below this line
module.exports = fibonacci;
