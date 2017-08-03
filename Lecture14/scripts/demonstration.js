function demonstrate() {
	//casino with minus number of machines: money will be only saved, nothing for ouputing
	var casinoNumberOne = new Casino( 100, -1 );
	casinoNumberOne.showCasino();
	console.log('------------------------------------------');
	//then I will add one machine and it will be having money
	casinoNumberOne.addNewSlotMachine();
	casinoNumberOne.showCasino();
	console.log('------------------------------------------');
	//casino with minus number of money: machines will be created but without money
	var casinoNumberTwo = new Casino( -100, 1 );
	casinoNumberTwo.showCasino();
	console.log('------------------------------------------');
	//standart casino
	var casinoNumberThree = new Casino( 100, 3 );
	casinoNumberThree.showCasino();
	console.log('------------------------------------------');
	//add new machine
	casinoNumberThree.addNewSlotMachine();
	casinoNumberThree.showCasino();
	console.log('------------------------------------------');
	//console.log sum of money which gamer will win on first machine
	console.log( `Gamer money: ${casinoNumberThree.slotMachines[0].play( 2 )}` );
	casinoNumberThree.showCasino();
	console.log('------------------------------------------');
	//will take id of first machine and will delete it
	var k = casinoNumberThree.slotMachines[0].getSlotMachineId();
	casinoNumberThree.removeSlotMashineById( k );
	casinoNumberThree.showCasino();
	console.log('------------------------------------------');
	console.log( `All money in casino: ${casinoNumberThree.getMoneyOfCasino()}` );
	console.log('------------------------------------------');
	//add new machine
	casinoNumberThree.addNewSlotMachine();
	casinoNumberThree.showCasino();
	console.log('------------------------------------------');
}


module.exports = demonstrate;