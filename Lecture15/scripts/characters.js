function addParentToChild( child, parent ) {
	child.prototype = Object.create( parent.prototype );
	child.prototype.constructor = child;
};


function Character( configObject ) {
	this.name = configObject.name;
	this.attack = ( ( !isNaN( configObject.attack ) ) && ( configObject.attack > 0 ) ) ? Math.floor( configObject.attack ) : 0;
	this.hitpoints = ( ( !isNaN( configObject.hitpoints ) ) && ( configObject.hitpoints > 0 ) ) ? Math.floor( configObject.hitpoints ) : 0;
	this.totalHitpoints = this.hitpoints;
};

Character.prototype.getTotalHitpoints = function() {
	return this.totalHitpoints;
};

/**
 * @param {value} - The value should be an integer number,
 					if value is not a number, totalhitpoints will have value 0
 					if value is not integer number, totalhitpoints will take only whole part of value
*/
Character.prototype.setTotalHitpoints = function( value ) {
	this.totalHitpoints = ( ( !isNaN( value ) ) && ( value > 0 ) ) ? Math.floor( value ) : 0;
};

Character.prototype.getHitpoints = function() {
	return this.hitpoints;
};

/**
 * @param {value} - The value should be an integer number,
 					if value is not a number, hitpoints will have value 0
 					if value is not integer number, hitpoints will take only whole part of value
 					if value is bigger than totalhitpoints, hitpoints will have value of totalhitpoints
*/
Character.prototype.setHitpoints = function( value ) {
	if ( ( !isNaN( value ) ) && ( value > 0 ) ) {
		if ( value > this.getTotalHitpoints() ) {
			this.hitpoints = this.getTotalHitpoints();
		} else {
			this.hitpoints = Math.floor( value );
		}
	} else {
		this.hitpoints = 0;
	}
};

Character.prototype.getAttack = function() {
	return this.attack;
};

/**
 * @param {value} - Same rules as in the setTotalHitPoint method 
*/
Character.prototype.setAttack = function( value ) {
	this.attack = ( ( !isNaN( value ) ) && ( value > 0 ) ) ? Math.floor( value ) : 0;
};

Character.prototype.isAlive = function() {
	return ( this.hitpoints > 0 ) ? true : false;
};

Character.prototype.fight = function( enemy ) {
	if ( enemy.isAlive() === false ) {
		console.log( 'Sorry this enemy has already died! Try to fight with anothers!' );
	} else {
		if ( ( enemy.hasOwnProperty( enemy.isDefenced ) ) && ( enemy.checkDefenced === true ) ) {
				console.log( 'This enemy is defenced, you can\'t have fight with him!' );
				enemy.removeDefence();
		} else {
			enemy.setHitpoints( enemy.getHitpoints() - this.attack );
		}

	}
};



function Champion( configObject ) {
	Character.call( this, configObject );
	this.isDefenced = false;
};

addParentToChild(  Champion, Character );

/**
 * Get method for property isDefenced 
*/
Champion.prototype.checkDefenced = function() {
	return this.isDefenced;
};

/**
 * Method that makes property isDefenced false value
*/
Champion.prototype.removeDefence = function() {
	this.isDefenced = false;
};

Champion.prototype.rest = function() {
	this.hitpoints += 5;
};

Champion.prototype.defence = function() {
	this.isDefenced = true;
};

Champion.prototype.fight = function( enemy ) {
	Character.prototype.fight.call( this, enemy );
	if ( enemy.isAlive() === false ) {
		this.attack += 1;
	}	
};


function Monster( configObject ) {
	Character.call( this, configObject );
	this.leftMovesInEnrage = 0;
};
addParentToChild(  Monster, Character );

Monster.prototype.enrage = function() {
	this.leftMovesInEnrage = 2;
};

Monster.prototype.fight = function( enemy ) {
	if ( this.leftMovesInEnrage > 0 ) {
		this.attack *= 2;
		Character.prototype.fight.call( this, enemy );
		this.attack /= 2;
		--this.leftMovesInEnrage;
	} else {
		Character.prototype.fight.call( this, enemy );
	}
	if ( enemy.isAlive() === false ) {
		enemy.setHitpoints( Math.floor( enemy.getTotalHitpoints() * 0.25 ) );
		this.totalhitpoints += Math.floor( enemy.getTotalHitpoints() * 0.1 );
	}
};

module.exports = {
  Champion: Champion,
  Monster: Monster
}






