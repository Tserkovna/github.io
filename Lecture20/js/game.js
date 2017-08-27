class EmptyPlace {
	constructor( x, y ) {
		this._x = x;
		this._y = y;
	}

	get x() {
        return this._x;
    }
  
    set x( value ) {
        this._x = value;   
    }

    get y() {
        return this._y;
    }
  
    set y( value ) {
        this._y = value;   
    }
}

class Game {
	constructor() {
		this._timer = 0;
		this._steps = 0;
		this._winnerNumbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 ];
		this._gameNumbers = [];
		this._emptyPlace = new EmptyPlace( 635, 635 );
	}

	startGame( $parentNode ) {
		this._gameNumbers = this._shuffleArray( this._winnerNumbers );
		this._createPuzzles( $parentNode, this._gameNumbers );
		//useful in setInterval function
		const _self = this;
		setInterval(  function() { _self._setTimer(); }, 1000 );
	}

	movePuzzle( $puzzle, $stepsContainer ) {
		let x = $puzzle.offsetLeft;
		let y = $puzzle.offsetTop;

		//I have added class add/move in if blocks to prevent action with elements that aren't close to empty place
		if( ( x + 210 === this._emptyPlace.x ) && ( y === this._emptyPlace.y ) ) {
			$( $puzzle ).addClass( 'tappedPuzzle' );
			$( $puzzle ).animate( {
  				left: '+=210'
  			}, 1000, function() {
    			$( $puzzle ).removeClass( 'tappedPuzzle' );
  			});
			this._emptyPlace.x = this._emptyPlace.x - 210;
			$stepsContainer.text( ++this._steps );
		} 
		if( ( x - 210 === this._emptyPlace.x ) && ( y === this._emptyPlace.y ) ) {
			$( $puzzle ).addClass( 'tappedPuzzle' );
			$( $puzzle ).animate( {
  				left: '-=210'
  			}, 1000, function() {
    			$( $puzzle ).removeClass( 'tappedPuzzle' );
  			});
			this._emptyPlace.x = this._emptyPlace.x + 210;
			$stepsContainer.text( ++this._steps );
		}
		if( ( y + 210 === this._emptyPlace.y ) && ( x === this._emptyPlace.x ) ) {
			$( $puzzle ).addClass( 'tappedPuzzle' );
			$( $puzzle ).animate( {
  				top: '+=210'
  			}, 1000, function() {
    			$( $puzzle ).removeClass( 'tappedPuzzle' );
  			});
			this._emptyPlace.y = this._emptyPlace.y - 210;
			$stepsContainer.text( ++this._steps );
		} 
		if( ( y - 210 === this._emptyPlace.y ) && ( x === this._emptyPlace.x ) ) {
			$( $puzzle ).addClass( 'tappedPuzzle' );
			$( $puzzle ).animate( {
  				top: '-=210'
  			}, 1000, function() {
    			$( $puzzle ).removeClass( 'tappedPuzzle' );
  			});
			this._emptyPlace.y = this._emptyPlace.y + 210;
			$stepsContainer.text( ++this._steps );
		}
	}

	winGame( $container, $stepsContainer, $secondsField, $minutesField ) {
		$container.html( '' );
		this._createPuzzles( $container, this._winnerNumbers );
		this._steps = 0;
		$stepsContainer.text( this._steps );
		this._timer = 0;
		$secondsField.text( '00' );
		$minutesField.text( '00' );
		this._emptyPlace = new EmptyPlace( 635, 635 );
	}

	startNewGame( $container, $stepsContainer, $secondsField, $minutesField ) {
		$container.html( '' );
		this._gameNumbers = this._shuffleArray( this._winnerNumbers );
		this._createPuzzles( $container, this._gameNumbers );
		this._steps = 0;
		$stepsContainer.text( this._steps );
		this._timer = 0;
		$secondsField.text( '00' );
		$minutesField.text( '00' );
		this._emptyPlace = new EmptyPlace( 635, 635 );
	}

	_createPuzzles( $parentNode, array ) {
		let $puzzle;
		array.forEach( function( element ) {
			$puzzle = $('<div>');
			$puzzle.addClass( 'puzzle' );
			$puzzle.text( element );
			//for moving elements in field
			$puzzle.css( { 'left' : 0, 'top' : 0 } );
		 	$parentNode.append( $puzzle );
		});
	}

	_shuffleArray( array ) {
  		let currentIndex = array.length, temporaryValue, randomIndex;
  		let newArray = array.slice();
  		while ( 0 !== currentIndex ) {
   			randomIndex = Math.floor( Math.random() * currentIndex );
    		currentIndex -= 1;
    		temporaryValue = newArray[currentIndex];
    		newArray[currentIndex] = newArray[randomIndex];
    		newArray[randomIndex] = temporaryValue;
  		}
  		return newArray;
	}


	_setTimer() {
			let $secondsField = $( '.seconds' ).first();
			let $minutesField = $( '.minutes' ).first();
            
            ++this._timer;
            if( this._timer % 60 < 10 ) {
            	$secondsField.text( '0' + this._timer % 60 );
            } else {
            	$secondsField.text( this._timer % 60 );
        	}
        	if(	( parseInt( this._timer / 60 ) < 10 ) ) {
        		$minutesField.text( '0' + parseInt( this._timer / 60 ) );
        	} else {
        		$minutesField.text( parseInt( this._timer / 60 ) );
        	}
    }
}

let isMobile = {
    Android: function() {
        return navigator.userAgent.match( /Android/i );
    },
    BlackBerry: function() {
        return navigator.userAgent.match( /BlackBerry/i );
    },
    iOS: function() {
        return navigator.userAgent.match( /iPhone|iPad|iPod/i );
    },
    Opera: function() {
        return navigator.userAgent.match( /Opera Mini/i );
    },
    Windows: function() {
        return navigator.userAgent.match( /IEMobile/i );
    },
    any: function() {
        return ( isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows() );
    }
}

$(function(){

	let $container = $( '.gameField' ).first();
	let $stepsContainer = $( '.steps' ).first();
	let $secondsField = $( '.seconds' ).first();
	let $minutesField = $( '.minutes' ).first();

	let game = new Game();


	$( document ).ready( function() {
		if( isMobile.any() ) {
			game.startGame( $container );
		}
	});

	window.addEventListener( "orientationchange", function() {
		game.startGame( $container );
	});

	$( document ).on( 'touchstart', $container, function( event ) {
		let $puzzle = event.target;
		game.movePuzzle( $puzzle, $stepsContainer );
	});

	$( document ).on( 'touchstart', '.winButton', function() {
		$( this ).addClass( 'tappedButton' );
		game.winGame( $container, $stepsContainer, $secondsField, $minutesField );
	});

	$( document ).on( 'touchend', '.winButton', function() {
		$( this ).removeClass( 'tappedButton' );
	});

	$( document ).on( 'touchstart', '.newGameButton', function() {
		$( this ).addClass( 'tappedButton' );
		game.startNewGame( $container, $stepsContainer, $secondsField, $minutesField );
	});

	$( document ).on( 'touchend', '.newGameButton', function() {
		$( this ).removeClass( 'tappedButton' );
	});

});
