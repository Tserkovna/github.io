console.log('Task five:');

function reverseKeysValues(object) {
	let result = {};
	for (let key in object) {
		result[object[key]] = key;
	}
	return result;
}

function decypherPhrase(rules, cypheredString) {
	let reverseRules = reverseKeysValues(rules);
	return cypherPhrase(reverseRules, cypheredString);
}


console.log( decypherPhrase(charactersMap, 'kiggy dog') );
  
