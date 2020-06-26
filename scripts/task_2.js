	// Задание № 2
console.log("");
console.log("Задание № 2");
console.log("");

// let date = "2025-12-31";

// console.log("Исходная дата: " + date);
// console.log("Измененная дата: " + date.replace(/-/g, "/"));

let date = new Date(),
	opt = {
		year: "numeric",
		month: "numeric",
		day: "numeric"
	},
	newDate;

date.setFullYear(2025);
date.setMonth(11);
date.setDate(31);

newDate = date.toLocaleString("hu", opt);

console.log("Исходная дата: " + newDate.replace(/. /g, "-"));
console.log("Измененная дата: " + date.toLocaleString("ca", opt));