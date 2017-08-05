function assign( destinationObject, firstSourceObject, secondSourceObject ) {
	for( var key in firstSourceObject ) {
		destinationObject[key] = firstSourceObject[key];
	} 
	for( var key in secondSourceObject ) {
		destinationObject[key] = secondSourceObject[key];
	}
	return destinationObject;
}

module.exports = {
  extend: assign
}


