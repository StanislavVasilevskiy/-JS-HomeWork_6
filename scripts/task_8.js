	// Задание № 8
console.log("");
console.log("Задание № 8");
console.log("");

function getPhone (phoneNumber) {
	phoneNumber = phoneNumber || prompt("Введите номер мобильного телефона", "");

	let test = /\d\s?[\s\(]?\s?(029|025|033)\s?[\)\s]?\s?\d{3}[\s\-]?\d{2}[\s\-]?\d{2}/g;

	if (test.test(phoneNumber) == true) {
		console.log("Телефонный номер введен верно");
	} else {
		console.log("Телефонный номер введен неверно");
	};
};

getPhone();

// 8(029)333-44-22
// 80293334422
// 8 029 333-44-22
// 8(029)333 44 22
// 8( 025 )333-44-22
// 8 (029) 333-44-22
// +8(029)333-44-22
// 8(033)333-44-22