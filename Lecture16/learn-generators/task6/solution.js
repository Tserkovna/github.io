function getFoo () {
  return new Promise( function ( resolve, reject ) {
    resolve( `foo` );
  });
}

function run ( generator ) {
  let it = generator();

  function go( result ) {

    if( result.done === true ) {
      return result.value;
    }

    return result.value.then( function ( value ) {
      return go( it.next( value ) );
    }, function ( error ) {
      return go( it.throw( error ) );
    });

  }

  go( it.next() );
}

run( function* () {
  try {
    let foo = yield getFoo();
    console.log( foo );
  } catch ( error ) {
    console.log( error );
  }
});