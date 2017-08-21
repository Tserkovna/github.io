const fs = require( 'fs' );
const filePath = __dirname + '/../storage.json';
const passwordHash = require('password-hash');


exports.changeUserById = function( req, res ){
 	fs.readFile( filePath, function ( err, data ) {
		if ( err ) throw err;
    	let json = JSON.parse( data );
    	let userId = parseInt( req.params.id );
    	let result = false;
    	for( let i = 0; i < json.length; i++ ) {
    		if( json[i].id === userId ) {
    			let obj = req.body;
    			obj.password = passwordHash.generate( obj.password );
    			json.splice( i, 1, obj );
    			result = true;
    			break;
    		}
    	}
    	if( !result ) {
    		res.status(404).end();
    	}

    	fs.writeFile( filePath, JSON.stringify( json ), ( err ) => {
  			if ( err ) throw err;
  			res.status(200).send( req.body );
		});
    });
}



  