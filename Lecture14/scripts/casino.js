function SlotMachine( amountOfMoney ) {
	this.slotMashineId = _generateUniqueNumber( 8 );
	this.amountOfMoney = amountOfMoney;
	this.isLucky = false;

	this.getSlotMachineId = function() {
		return this.slotMashineId;
	}

	this.getAmountOfMoney = function() {
		return this.amountOfMoney;
	}

	this.setAmountOfMoney = function( value ) {
		this.amountOfMoney = value;
	}

	this.makeLucky = function() {
		this.isLucky = true;
	}

	this.putMoney = function( sumOfMoney ) {
		this.amountOfMoney += sumOfMoney;
	}

	this.takeMoney = function( sumOfMoney ) {
		this.amountOfMoney -= sumOfMoney;
	}

	//If user puts more many as 5*amountOfMoney in slot machine, machine will return user's money. In other cases will return money prize
	this.play = function( playerMoney ) {
		if ( ( playerMoney * 5 ) > this.amountOfMoney ) {
			console.log( 'Sorry, but there is no enought money for winner in this slot machine!');
			return playerMoney;
		} else {
			this.amountOfMoney += playerMoney;
			var generatedNumber = _generateUniqueNumber( 3 );
			if ( this.isLucky === true ) {
				while( generatedNumber === '777' ) {
					generatedNumber = _generateUniqueNumber( 3 );
				}
			}
			var digits = generatedNumber.split('');
			var winnerMoney = 0;
			if ( generatedNumber === '777' ) {
				winnerMoney = this.amountOfMoney;
				this.amountOfMoney = 0;
				return winnerMoney;
			} else {
				if ( ( digits[0] === digits[1] ) && ( digits[0] === digits[2] ) ) {
					winnerMoney = playerMoney * 5;
					this.amountOfMoney -= winnerMoney;
					return winnerMoney;
				} else {
					if ( ( digits[0] === digits[1] ) || ( digits[0] === digits[2] ) || ( digits[2] === digits[1] ) ) {
						winnerMoney = playerMoney * 2;
						this.amountOfMoney -= winnerMoney;
						return winnerMoney;
					} else {
						return 0;
					}
				}
			}
		}
	}

	this.showSlotMachine = function() {
		console.log( `Slot machine[ id: ${this.slotMashineId}, lucky: ${this.isLucky}, amount of money: ${this.amountOfMoney} ]` );
	}

	function _getRandomInt( min, max ) {
			return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

	function _generateUniqueNumber( length ) {
		var timestamp = +new Date;
		var ts = timestamp.toString();
		var parts = ts.split( "" ).reverse();
		var id = "";
		for( var i = 0; i < length; ++i ) {
			var index = _getRandomInt( 0, parts.length - 1 );
			id += parts[index];	 
		} 
		return id;
	}

}



function Casino( amountOfMoney, numberOfSlotMachines ) {

	//check if money and machines aren't minus numbers
	this.amountOfMoney = ( amountOfMoney >= 0 ) ? amountOfMoney : 0;
	this.numberOfSlotMachines = (numberOfSlotMachines >= 0 ) ? numberOfSlotMachines : 0;
	this.slotMachines = _initSlotMachines( this.numberOfSlotMachines, this.amountOfMoney );

	//calculate all money in casino with gamers' money
	this.getMoneyOfCasino = function() {
		this.amountOfMoney = 0;
		for( var i = 0; i < this.numberOfSlotMachines; ++i ) {
			this.amountOfMoney += this.slotMachines[i].getAmountOfMoney();
		}
		return this.amountOfMoney;
	}

	this.getNumberOfSlotMachines = function() {
		return this.numberOfSlotMachines;
	}

	//check if there is one machine, if not create lucky machine 
	this.addNewSlotMachine = function() {
		var money = 0;
		if ( this.numberOfSlotMachines === 0 ) {
			this.slotMachines.push( new SlotMachine( money ));
			this.slotMachines[0].setAmountOfMoney( this.amountOfMoney );
			this.slotMachines[0].makeLucky();
		} else {
			var isTheRichestSlotMachine = _searchTheRichestSlotMachine( this.slotMachines );
			var restOfMoney = isTheRichestSlotMachine.getAmountOfMoney() % 2;
			money = ( isTheRichestSlotMachine.getAmountOfMoney() - restOfMoney ) / 2;
			isTheRichestSlotMachine.takeMoney( money + restOfMoney );
			this.slotMachines.push( new SlotMachine( money ));
		}
		++this.numberOfSlotMachines;
	}

	//if lucky machine is removed, first machine will be lucky
	this.removeSlotMashineById = function( id ) {
		--this.numberOfSlotMachines;
		var indexInArray = _searchInArrayByProperty( this.slotMachines, 'slotMashineId', id );
		var slotMashineToRemove = this.slotMachines[indexInArray]; 
		var money = slotMashineToRemove.getAmountOfMoney();
	    this.slotMachines.splice( indexInArray, 1 );
	    if ( ( slotMashineToRemove.isLucky === true ) && ( this.numberOfSlotMachines !== 0 )  ) {
			this.slotMachines[0].makeLucky();
		}
	    _spreadMoney( this.slotMachines, money );
	}

	this.takeMoney = function( money ) {
	    if ( money > this.amountOfMoney ) {
	    	return 'Action with money is forbidden! You have tried to take more than you have!';
	    } else {
	    	var i = 0;
	    	var areUsedSlotMachines = new Array();
	    	_sortArray( this.slotMachines );
	    	while( money !== 0 ) {
	    		if( this.slotMachines[i].getAmountOfMoney() < money ) {
	    			money -= this.slotMachines[i].getAmountOfMoney();
	    			this.slotMachines[i].takeMoney( this.slotMachines[i].getAmountOfMoney() );
	    		} else {
	    			this.slotMachines[i].takeMoney( money );
	    			money = 0;
	    		}
	    		areUsedSlotMachines.push( this.slotMachines[i] );
	    		++i;
	    	}
	    	return areUsedSlotMachines;
	    }
	}

	this.showCasino = function() {
		this.slotMachines.forEach( function( element ) {
			element.showSlotMachine();
		});
	}

	function _initSlotMachines( numberOfSlotMachines, amountOfMoney ) {
		var arrayOfMachines = new Array( numberOfSlotMachines );
		var restOfMoney = amountOfMoney % numberOfSlotMachines;
		var moneyForEach = ( amountOfMoney - restOfMoney ) / numberOfSlotMachines;
		for( var i = 0; i < arrayOfMachines.length; ++i ) { 
			if ( i === 0 ) {
				arrayOfMachines[i] = new SlotMachine( moneyForEach + restOfMoney );
				arrayOfMachines[i].makeLucky();
			} else {
				arrayOfMachines[i] = new SlotMachine( moneyForEach );
			}
		}
		return arrayOfMachines;
	}

	function _searchInArrayByProperty( array, propertyName, value ) {
		for( var i = 0; i < array.length; ++i ) {
			if( array[i][propertyName] === value ) {
				return i;
			}
		}
	}

	function _searchTheRichestSlotMachine( slotMachines ) {
		var max =  Math.max.apply( Math, slotMachines.map( function( element ) {
			return element.amountOfMoney;
		}));
		var indexInArray = _searchInArrayByProperty( slotMachines, 'amountOfMoney', max);
		return slotMachines[indexInArray];
	}

	function _spreadMoney( machines, money) {
		var number = machines.length;
		var restOfMoney = money % number;
		var moneyForEach = ( money - restOfMoney ) / number;
		machines.forEach( function( element ) {
			element.putMoney( moneyForEach );
		});
		machines[0].putMoney( restOfMoney );
	}

	function _compareMoney( a, b ) {
		return ( a.getAmountOfMoney() < b.getAmountOfMoney() ) ? 1 : -1;
	}

	function _sortArray( array ) {
		array.sort(_compareMoney);
	}
	
}

module.exports = Casino;







