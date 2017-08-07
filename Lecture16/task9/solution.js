const max = process.argv[2];

let FizzBuzz = function*() {
  let cur = 1;
  let value = null;
  while ( cur <= max ) {
    if ( cur % 15 === 0 ) { 
      yield 'FizzBuzz';
    } else {
      if ( cur % 3 === 0 ) { 
        yield 'Fizz'; 
      } else {
        if ( cur % 5 === 0 ) {
          yield 'Buzz';
        } else {
          yield cur;
        }
      }
    }
  }
}();
  
for ( let n of FizzBuzz ) {
  console.log(n);
};



 