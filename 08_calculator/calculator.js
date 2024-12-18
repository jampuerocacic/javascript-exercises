const add = function(...numbers) {
	return numbers.reduce((total,num) => total + num, 0)
};

const subtract = function(...numbers) {
	return numbers.reduce((total,num) => total - num)
};


const sum = function(numbers) {
	return numbers.reduce((total,num) => total + num, 0)
};

const multiply = function(numbers) {
  return numbers.reduce((total,num) => total * num, 1)
};

const power = function(a,b) {
	let poweredNumber = 1;
  let i =0;
  while (i < b) { 
    poweredNumber = poweredNumber*a;
    i++;
  }
  return poweredNumber;
};

const factorial = function(number) {
  let result = 1;
  let i = 2;
  while (i <= number) {
    result = result * i;
    i++;
  }
  return result;  // Add semicolon here
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
