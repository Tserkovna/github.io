function generateNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function inputNumber(min, max) {
	let gamerNumber;
	do {
		gamerNumber = parseInt(prompt(`Введіть будь-яке число від ${min} до ${max}:`, 0));
		if((gamerNumber >= min) && (gamerNumber <= max)) {
			return gamerNumber;
		}
		else {
			alert("Введено некоректне число!");
		}
	} while(true)
}

function winAmountOfMoney(attempts, firstAttempMoney, secondAttempMoney, thirdAttempMoney, gamerMoney) {
	switch(attempts) {
		case 3:
			gamerMoney += firstAttempMoney;
			return gamerMoney;
		case 2:
			gamerMoney += secondAttempMoney;
			return gamerMoney;
		case 1:
			gamerMoney += thirdAttempMoney;
			return gamerMoney;
	}
}

function guessNumberWithThreeAttemps(min, max, firstAttempMoney, secondAttempMoney, thirdAttempMoney, gamerMoney) {
	let randomNumber = generateNumber(min, max),
		attempts = 3,
		gamerNumber;
	console.log(`Секретне число = ${randomNumber}`);
	while(attempts > 0) {
		gamerNumber = inputNumber(min, max);
		if(randomNumber === gamerNumber) {
			gamerMoney = winAmountOfMoney(attempts, firstAttempMoney, secondAttempMoney, thirdAttempMoney, gamerMoney);
			alert(`Ви вгадали! Поточний виграш: ${gamerMoney}$`);
			break;
		}
		else {
			--attempts;
			alert(`Ви не вгадали! Залишилось спроб: ${attempts}!`);			
		}
	}
	if(attempts === 0) {
		gamerMoney = 0;
		alert(`Ваш виграш - ${gamerMoney}`);
	}
	return gamerMoney;
}

function guessingGame(max, min, firstAttempMoney, secondAttempMoney, thirdAttempMoney, coefficient) {
	let gamerMoney = 0,
		answer = confirm('Чи бажаєте почати гру?');
	while(answer === true) {
		gamerMoney = guessNumberWithThreeAttemps(min, max, firstAttempMoney, secondAttempMoney, thirdAttempMoney, gamerMoney);
		if(gamerMoney !== 0) {
			answer = confirm('Чи бажаєте продовжити гру?');
			while(answer === true) {
				max *= 2;
				firstAttempMoney *= coefficient;
				secondAttempMoney *= coefficient;
				thirdAttempMoney *= coefficient;
				gamerMoney = guessNumberWithThreeAttemps(min, max, firstAttempMoney, secondAttempMoney, thirdAttempMoney, gamerMoney);
				if(gamerMoney === 0) {
					break;
				}
				answer = confirm('Чи бажаєте продовжити гру?');
			}
		}
		if((gamerMoney === 0) || (answer === false)) {
			alert('Сьогодні ви не виграли мільйон, а могли!');
			answer = confirm('Чи бажаєте почати гру?');
		}
	}	
}



let max = 5,
	min = 0,
	firstAttempMoney = 10,
	secondAttempMoney = 5,
	thirdAttempMoney = 2,
	coefficient = 3;

guessingGame(max, min, firstAttempMoney, secondAttempMoney, thirdAttempMoney, coefficient);

	
			