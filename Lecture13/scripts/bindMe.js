Function.prototype.bindMe = function( scope ) {
  let _context = this;
  return function() {
    return _context.apply( scope, arguments );
  };
}
