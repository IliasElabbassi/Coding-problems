/**
	take a string as input, which only contains '(' , ')' and '*'.
	The character '*' can represent either a '(' or ')'
	And it return a status that state if the input is balanced or not.
*/
function balanced(input) {
	balanced = true
	num_right_parentheses = 0 // number of '('
	num_left_parentheses = 0  // number of ')'
	num_stars = 0 			  // number of '*'
	
	if(input[0] == ')') // should not start with ')'
		return false

	if(input[input.length-1] == '(') // should not end with a '('
		return false

	for(i = 0; i < input.length; ++i) {
		switch(input[i]) {
			case '(':
				++num_right_parentheses
			break;

			case ')':
				++num_left_parentheses
			break;

			case '*':
				++num_stars
			break;
		}
	}

	console.log('( : '+num_right_parentheses)
	console.log(') : '+num_left_parentheses)
	console.log('* : '+num_stars)


	console.log(' check equal')
	if(num_left_parentheses == num_right_parentheses)	// if there is equal '(' and ')' then the input is good
		return balanced
	
	console.log('check greater')
	if (num_right_parentheses > num_left_parentheses) {
		if( num_left_parentheses+num_stars >= num_right_parentheses)	// if there is enought '*' then it the ')' are filled
			return balanced
	} else {
		console.log('in less')
		if (num_right_parentheses+num_stars >= num_left_parentheses)	// if there is enought '*' then it the '(' are filled
			return balanced
	}

	return !balanced
}

is_it_balanced = balanced("(*((*)()()()**")

console.log(is_it_balanced)
