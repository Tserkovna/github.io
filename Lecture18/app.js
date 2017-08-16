const express = require( 'express' );
const fs = require( 'fs' );
const app = express();

const bodyParser = require('body-parser')
app.use( bodyParser.json() );  

var user = require('./user');

let filePath = __dirname + '/data.storage';

app.post( '/users', user.addUser );

app.get('/users', user.showUsers );

app.get( '/users/:id', user.searchUserById );

app.put( '/users/:id', user.changeUserById );

app.delete( '/users/:id', user.deleteUserById );


const port = process.env.PORT || 5000;
app.listen( port, function() {
	console.log( `Listening on ${port}` );
});


