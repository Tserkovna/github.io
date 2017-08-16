const fs = require( 'fs' );
const filePath = __dirname + '/../data.storage';
const passwordHash = require('password-hash');


exports.addUser = function( req, res ) {
	fs.readFile( filePath, function ( err, data ) {
		if ( err ) throw err;
    	let json = JSON.parse( data );
    	let result = false;
    	for( let user of json ) {
    		if( ( user.username ===  req.body.username ) && ( user.email === req.body.email )  ) {
    			result = true;
    		}
    	}
    	if( result ) { 
    		res.status(409).end();
    	}
        let obj = req.body;
        obj.password = passwordHash.generate(obj.password);
    	json.push( req.body );

    	fs.writeFile( filePath, JSON.stringify( json ), ( err ) => {
  			if ( err ) throw err;
  			res.status(201).end();
		}); 
	});
} 

    
