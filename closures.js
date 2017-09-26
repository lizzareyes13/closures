//challenge 1

function createFunction() {
  function printHello() {
    console.log(str);
  }
  
  return result;
}

//challenge 2

var printSample = 'sample';
function createFunctionPrinter('sample') {
  var printHello = 'Hello';
  function createdFunc() {
    printHello
  }
  return printHello;
}

console.log();


//challenge 4

function addByX(x) {
  return function add(num) {
    return x + num;
  };
}

var addByTwo = addByX(2);
var result = addByTwo(1);
console.log(result);

//challenge 5

function once(func) {
  var result;
  return function() {
    if(func) {
      result = func.apply(null, arguments);
      func = null;
    }
    return result;
  }
}

var onceFunc = once(addByTwo);

console.log(onceFunc(4));

