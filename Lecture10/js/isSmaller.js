function isSmaller(firstArg, secondArg) {
	return !isBigger(firstArg, secondArg);
}

console.log(`isSmaller(5, -1); // => ${isSmaller(5, -1)}`);
