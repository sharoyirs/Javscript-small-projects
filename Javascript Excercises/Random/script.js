"use strict";

const students = [
	{
		studentname: "Rakhman Ismailov",
		grade: 1,
		study: "international managment",
	},
	{
		studentname: "random",
		grade: 1,
		study: "randomss",
	},
];

for (const values of students.values()) {
   console.log(values);
}

console.log(Object.entries(students));


// for (let i = 0; i <= 10; i++) 
// console.log(`hello${i}`);








