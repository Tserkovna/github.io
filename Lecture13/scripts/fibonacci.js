function memoizeFunction( passedFunction ) {
    let cache = {};
    return function ( x ) {
        if ( x in cache ) return cache[x];
        return cache[x] = passedFunction( x );
    };
};

let fibonacci = memoizeFunction( function( number ) { 
	if ( number === 0 ) {
		return 0;
	} else {
		if ( number === 1 ) {
			return 1;
		} else {
			return (fibonacci( number - 1 ) + fibonacci( number - 2 ) );
		}
	}
});


module.exports = fibonacci;
