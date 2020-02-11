function fastest_power(a, b){ // a : base |	b : power

	/**
	returns the results of a^b

		- Divide power by 2 and multiply base to itself (if the power is even)
		- Decrement power by 1 to make it even and then follow the first step
	*/

	if(!(a >=1 && b >=0)) // we check if the params are good
		return -1

	result = 1
	base = a
	power = b

	while( power > 0 ) { // we do it until b is greater than zero

		if(power % 2 == 0){ //  if the power is even

			power = power / 2
			base = base*base

		}else{ // if the power is odd
			result = result * base // we need to to add the base to the result first

			power = (power-1) / 2
			base = base*base

		}

	}

	return result
}

console.log(fastest_power(2, 65))
