	// Задание № 7
console.log("");
console.log("Задание № 7");
console.log("");

let stroka = "aa aba abba abbba abca abea";

console.log("Исходная строка:");
console.log(" " + stroka);
console.log("Поиск по строке:");
console.log(stroka.match(/a(b+)a/g));