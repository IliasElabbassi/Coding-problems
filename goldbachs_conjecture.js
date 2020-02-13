/**
 *	we take an input (must be even and greater or equal to 2)
 *  we give two prime number that sums up to the input
 */
function goldbach(input) {
	a = 2
	b = 2

	bool = true

	while ( ((a < input) || (b < input)) ) {
		if(isPrime(a) && isPrime(b))
			if( (a+b) == input)
				return [a,b]
		
		if(bool) {
			a++
			bool = false
		}else {
			b++
			bool = true
		}

	}

	return null
}

// https://stackoverflow.com/questions/40200089/number-prime-test-in-javascript
function isPrime(num) {
  for(var i = 2; i < num; i++)
    if(num % i === 0)
    	return false

  return num > 1
}

console.log(goldbach(30))