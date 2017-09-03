import generateForm from './interface';
import operations from './operations';
import output from './resultOutput';

window.addEventListener( 'load', function() {
	let parentNode = document.getElementsByTagName( 'main' )[0];
	generateForm( parentNode );

	document.getElementsByClassName( 'buttonsSection' )[0].addEventListener( 'click', function( event ) {
		event.preventDefault();
		let buttonText = event.target.innerText;
		let firstNumber = parseInt( document.getElementsByClassName( 'textInput' )[0].value );
		let secondNumber = parseInt( document.getElementsByClassName( 'textInput' )[1].value );
		let result;
		switch( buttonText ) {
			case 'Add':
				result = operations.addition( firstNumber, secondNumber );
				break;
			case 'Substract':
				result = operations.subtraction( firstNumber, secondNumber );
				break;
			case 'Division':
				result = operations.division( firstNumber, secondNumber );
				break;
			case 'Multiplication':
				result = operations.multiplication( firstNumber, secondNumber );
				break;
		}
		output( result, document.getElementsByClassName( 'arithmetic' )[0] );

	} );

});