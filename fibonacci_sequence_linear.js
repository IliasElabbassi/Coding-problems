/**
	return the n'th value in the fibonacci in O(1) complexity
*/

function fibonacci(n) {
	A = (1+Math.sqrt(5))/2
	B = (1-Math.sqrt(5))/2

	return (Math.pow(A, n) - Math.pow(B, n)) / Math.sqrt(5)
}

console.log(fibonacci(5))

console.log(fibonacci(65))