const fs = require( 'fs' );
const filePath = __dirname + '/../storage.json';


exports.deleteUserById = function( req, res ){
	fs.readFile( filePath, function ( err, data ) {
        if ( err ) throw err;
        let json = JSON.parse( data );
        let result = false;
        let userId = parseInt( req.params.id );
        for( let i = 0; i < json.length; i++ ) {
            if( json[i].id === userId ) {
                json.splice( i, 1 );
                result = true;
                break;
            }
        }
        if( !result ) {
            res.status(404).end();
        }

        fs.writeFile( filePath, JSON.stringify( json ), ( err ) => {
            if ( err ) throw err;
            res.status(200).send( { 'message': 'User has been successfully removed.' } );
        });
    });
}



