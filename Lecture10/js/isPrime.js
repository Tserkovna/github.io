function isPrime(intNumber) {
	for (let i = 2; i < intNumber; ++i) {
        if (intNumber % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(`isPrime(5); // => ${isPrime(5)}`);

