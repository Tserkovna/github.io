let answer = confirm('Чи бажаєте почати гру?');
while(answer === true) {
	let gamerMoney = 0,
		max = 5,
		min = 0,
		randomNumber = 0,
		gamerNumber = 0,
		attemps = 3, 
		firstAttempMoney = 10,
		secondAttempMoney = 5,
		thirdAttempMoney = 2;
		randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
	console.log(`Секретне число = ${randomNumber}`);
	while(attemps > 0) {
		gamerNumber = parseInt(prompt(`Введіть будь-яке число від ${min} до ${max}:`, 0));
		if ((gamerNumber >= min) && (gamerNumber <= max)){
			if(randomNumber === gamerNumber) {
				switch(attemps) {
					case 3:
						gamerMoney = firstAttempMoney;
						break;
					case 2:
						gamerMoney = secondAttempMoney;
						break;
					case 1:
						gamerMoney = thirdAttempMoney;
						break;
				}
				alert(`Ви вгадали! Поточний виграш: ${gamerMoney}$`);
				answer = confirm('Чи бажаєте продовжити гру?');
				while (answer === true) {
					attemps = 3;
					max *= 2;
					firstAttempMoney *= 3;
					secondAttempMoney *= 3;
					thirdAttempMoney *= 3;
					randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
					console.log(`Секретне число = ${randomNumber}`);
					while(attemps > 0) {
						gamerNumber = parseInt(prompt(`Введіть будь-яке число від ${min} до ${max}:`, 0));
						if ((gamerNumber >= min) && (gamerNumber <= max)){
							if(randomNumber === gamerNumber) {
								switch(attemps) {
									case 3:
										gamerMoney += firstAttempMoney;
										break;
									case 2:
										gamerMoney += secondAttempMoney;
										break;
									case 1:
										gamerMoney += thirdAttempMoney;
										break;
								}
								alert(`Ви вгадали! Поточний виграш: ${gamerMoney}$`);
								answer = confirm('Чи бажаєте продовжити гру?');
								break;
							}
							else {
								--attemps;
								alert(`Ви не вгадали! Залишилось спроб: ${attemps}!`);
							}
						}
						else {
							alert("Введено некоректне число!");
						}
					}
					if(attemps === 0) {
						gamerMoney = 0;
						break;
					}
				}		
			}
			else {
				--attemps;
				alert(`Ви не вгадали! Залишилось спроб: ${attemps}!`)
			}
		}
		else {
			alert("Введено некоректне число!");
		}
		if(answer === false) {
			break;
		}
	}
	if(gamerMoney === 0) {
		alert(`Ваш виграш - ${gamerMoney}`);	
	}
	if((answer === false) || (gamerMoney === 0)) {
		alert('Сьогодні ви не виграли мільйон, а могли!');
		answer = confirm('Чи бажаєте почати гру?');
	}
} 
