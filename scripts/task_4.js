	// Задание № 4
console.log("");
console.log("Задание № 4");
console.log("");

let arr = [4, 2, 5, 19, 13, 0, 10],
	arrNew = [],
	sum = 0;

for (i = 0; i < arr.length; i++) {
	arrNew.push(Math.pow(arr[i], 3));
	sum += arrNew[i];
};

console.log("Исходный массив:");
console.log(arr);
console.log("Кубы элементов массива:");
console.log(arrNew);
console.log("Сумма кубов элементов массива:");
console.log(sum);
console.log("Квадратный корень из суммы кубов элементов массива:");
console.log(Math.sqrt(sum));