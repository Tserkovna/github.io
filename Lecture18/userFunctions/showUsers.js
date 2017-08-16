const fs = require( 'fs' );
const filePath = __dirname + '/../data.storage';


exports.showUsers = function( req, res ){
 	fs.readFile( filePath, ( err, data ) => {
  		if ( err ) throw err;
  		let json = JSON.parse( data );
  		let result = [];
  		for( let user of json ) {
  			let obj = {};
  			obj.id = user.id;
  			obj.username = user.username;
  			obj.email = user.email;
  			result.push( obj );
  		}
  		res.status( 200 ).send( result );
  	});
}
