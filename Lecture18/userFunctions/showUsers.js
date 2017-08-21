const fs = require( 'fs' );
const filePath = __dirname + '/../storage.json';


exports.showUsers = function( req, res ){
 	fs.readFile( filePath, ( err, data ) => {
  	if ( err ) throw err;
    let result = ['[]'];
    if( isJson( data )) {
      let json = JSON.parse(data);
      result=[];
  	  for( let user of json ) {
  		  let obj = {};
  		  obj.id = user.id;
  		  obj.username = user.username;
  		  obj.email = user.email;
			 result.push( obj );
  	  }
    }
    res.status( 200 ).send( result );
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
