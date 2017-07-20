console.log('Task four:');

function cypherPhrase(rules, exampleString) {
	let result;
	result = getTransformedArray( exampleString.split(''), function(letter) {
		return rules[letter] || letter;
	});
	return result.join('');
}

let charactersMap = {a: 'o', c: 'd', t: 'g'};
console.log(cypherPhrase( charactersMap, 'kitty cat' )); 

