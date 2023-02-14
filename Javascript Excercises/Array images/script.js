const myImage = document.getElementById("mainImage");
const imageArray = [
	"2 russians slav squat.jpg",
	"2pac suit in car.jpg",
	"anthony joshua.jpg",
	"ferrari villa house.jpg",
];

let imageIndex = 0;

const next = document.querySelector(".next");
const back = document.querySelector(".back");

next.addEventListener("click", function () {
	if (imageIndex < imageArray.length-1) {
		imageIndex++;
		myImage.setAttribute("src", imageArray[imageIndex]);
		document.querySelector(".warning_back").classList.add("hidden")
		console.log(imageIndex);
	} else {
		document.querySelector(".warning_front").classList.remove("hidden")
	}
});

back.addEventListener("click", function () {
	if (imageIndex > 0) {
		imageIndex--;
		myImage.setAttribute("src", imageArray[imageIndex]);
		document.querySelector(".warning_front").classList.add("hidden");
		console.log(imageIndex);
	} else {
		document.querySelector(".warning_back").classList.remove("hidden");
	}
});


