console.log("Task 1:");
var votes = ["angular", "angular", "react", "react", "react", "angular", "ember", "react", "vanilla"];
var vote = function(arr) {
	let obj = {};
	arr.forEach(function(element){
		if(obj.hasOwnProperty(element)) {
			obj[element] +=1;
		}
		else {
			obj[element] = 1;
		}
	});
	return obj;
}
var result = vote(votes);
for(let key in result) {
	console.log(`${key} => ${result[key]}`);
}