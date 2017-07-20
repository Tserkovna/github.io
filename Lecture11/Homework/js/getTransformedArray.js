console.log('Task two:');

function getTransformedArray(array, transformElement) {
	let incrementArray = [];
	forEach(array, function(el) {
		incrementArray.push(transformElement(el));
	});
	return incrementArray;
}

function increment(num) { 
	return num + 1;
} 

forEach( getTransformedArray( [1, 7, 20], increment ), function(el) { 
	console.log(el); 
}); 


