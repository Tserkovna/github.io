function compose() {
    return Array.prototype.reduceRight.call( arguments, function( prev, next ) {
        return function() {
           	return next( prev.apply( null, arguments ) );
        };
    });
}

module.exports = compose;
