const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function([...array]) {
 //let nums; // doesn't read value
  //array = nums; //doesn't work
 
//array.unshift(...nums); // doesn't work

  let sum = array.reduce((total, nums) => {
    return total + nums;
  }, 0);

  //console.log(sum);
  return sum;

};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
};

add(0, 0);
console.log(add(0, 0)); // output should be 0
add(2, 2);
add(2, 6);

subtract(10, 4);
subtract(-10, -4);
subtract(-8, 7);

sum([]);
sum([7]);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
