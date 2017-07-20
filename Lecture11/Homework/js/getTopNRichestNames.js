console.log('Task six:');

function changeIncome(label) {
	switch (label.charAt(1))
	{
		case 'B':
			return Number( label.charAt(0)+'e9' );	
		case 'K':
			return Number( label.charAt(0)+'e3' );	
		case 'M':
			return Number( label.charAt(0)+'e6' );	
	}
}

function getTopNRichestNames(number, objectsArray) {
	let transformedArray = objectsArray.map( function(el) {
		let obj = {};
		obj['name'] = el['name'];
		obj['income'] =changeIncome(el['income']);
		return obj;
	});

	transformedArray.sort(function(objOne, objTwo) {
		return objOne['income'] < objTwo['income'];
	});

	transformedArray = pluckByAttribute(transformedArray, 'name');
	transformedArray.length = (transformedArray.length > number) ? number : transformedArray.length;


	return transformedArray;	
}


var people = [
    {name: 'Bara', income: '1B'},
  	{name: 'Dara', income: '5B'},
  	{name: 'Kara', income: '1M'},
  	{name: 'Zara', income: '2K'}
];
 
console.log( getTopNRichestNames(2, people));
console.log( getTopNRichestNames(100, people));
