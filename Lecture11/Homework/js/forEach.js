console.log('Task one:');

function forEach(array, outputElement) {
	for(let i = 0; i < array.length; ++i) {
		outputElement(array[i]);
	}
};

// if I use this function from example, I can't output in given format, because console.log put elements in diffrent rows
forEach( [3, 5, 2], function(el) { 
	console.log(el); 
}); 

