function add (a, b) {
	return a + b;
}

function subtract (a,b) {
	return a - b;
}

function sum (array) {
	return array.reduce(function (a,b) {
		return a + b;
	}, 0);
}

function multiply (array) {
	return array.reduce(function (a,b) {
		return a * b;
	}, );
}

function power(a,b) {
	return a ** b;
}

function factorial(a) {
	let num = a;
	if (a == 0) return 1;
	for (i=(a-1); i>0; i--) {
		num *= i;
	}
	return num;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}