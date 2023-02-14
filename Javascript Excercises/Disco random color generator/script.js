"use strict";

const body = document.querySelector("body");
const button = document.querySelector(".button");
const headline = document.querySelector(".headline");
const colorName = document.querySelector(".color_name");

button.addEventListener("click", function () {
	for (let i = 0; i < 100; i++) {
		setTimeout(function () {
			let randomColor = Math.floor(Math.random() * 16777215).toString(16);
			body.style.backgroundColor = "#" + randomColor;
			colorName.style.color = "#" + randomColor;
			colorName.textContent = "#" + randomColor;
			button.style.backgroundColor = "#" + randomColor;
		}, 150 * i); 
	}
});
