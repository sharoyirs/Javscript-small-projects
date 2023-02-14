const plusBtn = document.querySelector(".digit-plus");
const resultText = document.querySelector(".result-text");
const digits = document.querySelectorAll(".digit");
let calculation = [];

const validDigits = [
	1,
	2,
	3,
	4,
	5,
	6,
	7,
	8,
	9,
	10,
	"+",
	"-",
	"*",
	"/",
	"c",
	".",
	"=",
	"Enter",
	"Backspace",
   "(",
   ")"
].toString();

for (let i = 0; i < digits.length; i++) {
	digits[i].addEventListener("click", function () {
		const value = digits[i].textContent;
		if (value === "C") {
			calculation = [];
			resultText.textContent = ".";
		} else if (value === "=") {
			console.log(finalResult);
			resultText.textContent = eval(finalResult);
			calculation = [];
		} else {
			calculation.push(value);
			finalResult = calculation.join("");
			resultText.textContent = finalResult;
		}
	});
}

for (let i = 0; i < digits.length; i++) {
	digits[i].addEventListener("keyup", function (event) {
		let value = event.key;
		if (validDigits.includes(value)) {
			if (value === "c") {
				calculation = [];
				resultText.textContent = ".";
			} else if (value === "Enter") {
				console.log(finalResult);
				resultText.textContent = eval(finalResult);
				calculation = [];
			} else if (value === "Backspace") {
				calculation.pop();
				console.log(calculation);
				finalResult = calculation.join("");
				resultText.textContent = finalResult;
			} else {
				calculation.push(value);
				finalResult = calculation.join("");
				resultText.textContent = finalResult;
			}
		}
	});
}
