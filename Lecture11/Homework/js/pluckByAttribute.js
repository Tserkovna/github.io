console.log('Task three:');

function pluckByAttribute(array, label) {
	return getTransformedArray(array, function(el) {
		return el[label];
	});
};

let presidents = [ { name: 'George', surname: 'Kush' } ,
                               { name: 'Barako', surname: 'Obaame' } ];


forEach( pluckByAttribute( presidents, 'name' ), function(el) { 
	console.log(el); 
}); 
