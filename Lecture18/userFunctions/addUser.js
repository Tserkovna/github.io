const fs = require( 'fs' );
const filePath = __dirname + '/../storage.json';
const passwordHash = require('password-hash');


exports.addUser = function( req, res ) {
	fs.readFile( filePath, function ( err, data ) {
		if ( err ) throw err;
        let obj = req.body;
        if( Object.keys( obj ).length === 0 ) {
            res.status(400).end();
        }
        let array = [];
        if( isJson( data ) ) {
    	   let json = JSON.parse( data );
    	   let result = false;
    	   for( let user of json ) {
    		if( ( user.username ===  obj.username ) && ( user.email === obj.email )  ) {
    			result = true;
    		}
    	   }
    	   if( result ) { 
    		res.status(409).end();
    	   }
           array.push( json );
        }
        obj.password = passwordHash.generate( ''+obj.password );
        obj.id = array.length + 1;
    	array.push( obj );
    	fs.writeFile( filePath, JSON.stringify( array ), ( err ) => {
  			if ( err ) throw err;
  			res.status(201).end();
		}); 
	});
} 


function isJson( str ) {
    try {
        JSON.parse( str );
    } catch ( e ) {
        return false;
    }
    return true;
}
    
