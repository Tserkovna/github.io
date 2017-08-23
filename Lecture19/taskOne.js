function getJSON( url ) {
	return new Promise( function( resolve, reject ) {
		let xhr = new XMLHttpRequest();
		xhr.open( 'get', url );
		xhr.responseType = 'json';
		xhr.onload = function() {
			if( ( xhr.status >= 200 ) && ( xhr.status < 300 ) ) {
				resolve(  xhr.response );
			} else {
				reject( xhr.statusText );
			}
		}
		xhr.onerror = function () {
     		reject( xhr.statusText);
    	}
    	xhr.send();
    });
}

let getAstros = getJSON( 'http://api.open-notify.org/astros.json' );
console.log( typeof getAstros ); // -> “object”
getAstros
  .then( function( data ) {
	console.log( data.message ); // -> “success”
  }, function( error ) {
	console.log( err );
  });