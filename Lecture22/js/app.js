'use strict';

class User {
	constructor( name, lastName ) {
		this.name = name;
		this.lastName = lastName;
		//set random values
		this.lastVisitDate = this._generaterRandomDate( new Date(2017, 0, 1), new Date() );
		this.globalDiscount = this._generateRandomIntegerNumber( 1, 10);
		this.nightDiscount = this._generateRandomIntegerNumber( 1, 20 );
		this.weekendDiscount = this._generateRandomIntegerNumber( 1, 15 );
		this.ordersCount = this._generateRandomIntegerNumber( 1, 25 );
		this.ordersTotalPrice = this._generateRandomIntegerNumber( 100, 20000 );
		this.bonus = this._generateRandomIntegerNumber( 1, 1000 );
	}

	showInfo() {
		return `User ${this.name} ${this.lastName}: 
			1) last order was made: ${this.lastVisitDate.getDate()}.${this.lastVisitDate.getMonth() + 1}.${this.lastVisitDate.getFullYear()};
			2) total number of orders: ${this.ordersCount};
			3) bonus: ${this.bonus};`
	}

	_generaterRandomDate( start, end ) {
    	return new Date( start.getTime() + Math.random() * ( end.getTime() - start.getTime() ) );
	}

	_generateRandomIntegerNumber( min, max ) {
		return Math.floor( Math.random() * ( max - min + 1 ) ) + min;
	}

}

class UserDiscountDecorator extends User {
	constructor( name, lastName ) {
		super( name, lastName );
		this.totalDiscount = this._calcCurrentDiscount();
	}

	showInfo() {
		return `${super.showInfo()}
			4) current discount: ${this.getDiscount()};`;
	}

	getDiscount() {
		return this.totalDiscount;
	}

	_calcCurrentDiscount() {
		let totalDiscount = this.globalDiscount;
		let today = new Date();
		//check if it is night now
		if( ( ( today.getHours() >= 23 ) || ( today.getHours() < 5 ) ) || 
			( ( today.getHours() === 5 ) && ( today.getMinutes() === 0 ) )  ) {
				totalDiscount += this.nightDiscount;
		}
		//check if it is weekend now
		if( ( today.getDay() === 6 ) || ( today.getDay() === 0 ) ) {
			totalDiscount += this.weekendDiscount;
		}
		return totalDiscount;
	}

}

class UserBonusDecorator extends User {
	constructor( name, lastName ) {
		super( name, lastName );
		this._calcBonusAndAddOrdersCount();
	}

	getBonus() {
		return this.bonus;
	}

	_calcBonusAndAddOrdersCount() {
		let hoursWithoutOrders = ( new Date().getTime() - this.lastVisitDate.getTime() ) / 3600000;
		//check if less than 240 hours after last order and add to bonus 10 points
		if( hoursWithoutOrders <= 240 ) {
			this.bonus += parseInt( 240 - hoursWithoutOrders );
		}

		++this.ordersCount;
	}
}


( function() {
	let user = new User( 'Lilya', 'Tserkovna' );
	console.log( user.showInfo() );

	let decoratedUser = new UserDiscountDecorator( 'Roksolana', 'Shandra' );
	console.log( decoratedUser.showInfo() );
	console.log( `Result of get discount: ${decoratedUser.getDiscount()}` );

	let decoratedUserSecond = new UserBonusDecorator( 'Olga', 'Koval' );	
	console.log( decoratedUserSecond.showInfo() );
	console.log( `Result of get bonus: ${decoratedUserSecond.getBonus()}` );
} )();



