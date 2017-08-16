const fs = require( 'fs' );
const filePath = __dirname + '/../data.storage';


exports.searchUserById = function( req, res ){
	fs.readFile( filePath, function ( err, data ) {
		if ( err ) throw err;
    	let json = JSON.parse( data );
    	let userId = parseInt( req.params.id );
    	let usr = {};
    	for( let user of json ) {
    		if( user.id === userId ) {
    			usr.id = user.id;
    			usr.username = user.username;
    			usr.email = user.email;
    		}
    	}
    	if (usr == null || usr == 'undefined') {
    		res.status(404).end();
  		} 
  		res.status(200).send(usr);
    });
}



