const add = function(num1, num2) {
	return num1+num2;
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(list) {
  let totalSum = 0;
	for (let index = 0; index < list.length; index++) {
    totalSum+=list[index];
  }
  return totalSum;
};

const multiply = function(list) {
  let total = 1;
	for (let index = 0; index < list.length; index++) {
    total*=list[index];
  }
  return total;
};

const power = function(num1, num2) {
	let total = 1;
	for (let index = 0; index < num2; index++) {
    total*=num1;
  }
  return total;
};

const factorial = function(num) {
	let total = 1;
	for (let index = 1; index <= num; index++) {
    total*=index;
  }
  return total;
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
