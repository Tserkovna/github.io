let sh = '#',
	sp = ' ',
	rows = 8,
	counter = 0,
	rowElements = 4,
	result = '', 
	innerCounter = 0;

while(counter < rows) {
	if(counter % 2 === 1) {
		result+=sp;
	}
	while(innerCounter < rowElements) {
		result += sh + sp;
		++innerCounter;
	}
	console.log(result);
	++counter;
	innerCounter = 0;
	result = '';
}


