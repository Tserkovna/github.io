let inputs = process.argv.slice(2);
let str='';
let result = inputs.map( ( word ) => { return word[0]; } )
                .reduce( ( element ) => { str+=element }, str );
console.log( result );
