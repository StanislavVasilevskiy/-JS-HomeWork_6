	// Задание № 5
console.log("");
console.log("Задание № 5");
console.log("");

function prim (a, b) {
	a = a || +prompt("Введие число a", "");
	b = b || +prompt("Введие число b", "");

	let c = a - b;

	console.log("Число a: " + a);
	console.log("Число b: " + b);
	console.log("Число c = " + a + " - " + b + " = " + "|" + Math.abs(c) + "|");
};

prim();