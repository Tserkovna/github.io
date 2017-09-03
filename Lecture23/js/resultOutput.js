export default ( result, parentNode ) => {
	if ( parentNode.lastChild.classList.contains( 'result' ) ) {
		parentNode.lastChild.value = result;
	} else {
		let resultLabel = document.createElement( 'label' );
		resultLabel.innerText = 'Result:';
		resultLabel.classList.add( 'resultLabel' );
		parentNode.appendChild( resultLabel );
		let resultInput = document.createElement( 'input' );
		resultInput.setAttribute( 'type', 'text' );
		resultInput.setAttribute( 'readonly', 'readonly' );
		resultInput.classList.add( 'result' );
		resultInput.classList.add( 'textInput' );
		resultInput.value = result;
		parentNode.appendChild( resultInput );
	}
}