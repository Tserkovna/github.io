export default ( parentNode ) => {
	let form = document.createElement( 'form' );
	let fieldset = document.createElement( 'fieldset' );
	fieldset.classList.add( 'arithmetic' );
	let legend = document.createElement( 'legend' );
	legend.innerText = 'ARITHMETIC OPERATIONS';
	fieldset.appendChild( legend );
	let inputFirst = document.createElement( 'input' );
	inputFirst.setAttribute( 'type', 'number' );
	inputFirst.setAttribute( 'placeholder', 'First number' );
	inputFirst.classList.add( 'textInput' );
	fieldset.appendChild( inputFirst ); 
	let inputSecond = document.createElement( 'input' );
	inputSecond.setAttribute( 'type', 'number' );
	inputSecond.setAttribute( 'placeholder', 'Second number' );
	inputSecond.classList.add( 'textInput' );
	fieldset.appendChild( inputSecond ); 
	let section = document.createElement( 'section' );
	section.classList.add( 'buttonsSection' );
	let buttonAdd = document.createElement( 'button' );
	buttonAdd.innerText = 'Add';
	buttonAdd.classList.add( 'arithmeticButton' );
	buttonAdd.classList.add( 'addButton' );
	section.appendChild( buttonAdd );
	let buttonSubstract = document.createElement( 'button' );
	buttonSubstract.innerText = 'Substract';
	buttonSubstract.classList.add( 'arithmeticButton' );
	buttonSubstract.classList.add( 'substractButton' );
	section.appendChild( buttonSubstract );
	let buttonDivision = document.createElement( 'button' );
	buttonDivision.innerText = 'Division';
	buttonDivision.classList.add( 'arithmeticButton' );
	buttonDivision.classList.add( 'divisionButton' );
	section.appendChild( buttonDivision );
	let buttonMultiplication = document.createElement( 'button' );
	buttonMultiplication.innerText = 'Multiplication';
	buttonMultiplication.classList.add( 'arithmeticButton' );
	buttonMultiplication.classList.add( 'multiplicationButton' );
	section.appendChild( buttonMultiplication );
	fieldset.appendChild( section );
	form.appendChild( fieldset );
	parentNode.appendChild( form );
}


