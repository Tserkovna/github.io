let a = prompt("Write a:", 0),
	b = prompt("Write b:", 0),
	c = prompt("Write c:", 0);

let d = b*b - 4*a*c;
d = Math.sqrt(d);

let res1 = (-b + d)/2*a,
	res2 = (-b - d)/2*a;

console.log(`Рівняння ${a}x^2+ ${b}x + ${c} = 0 має 2 розв’язки: x1 = ${res1}, x2 = ${res2}`);

