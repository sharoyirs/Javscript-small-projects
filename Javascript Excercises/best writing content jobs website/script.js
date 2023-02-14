"use strics";

const btn = document.querySelector(".btn")
const img = document.querySelector(".img")
const pop = document.querySelector(".pop")

btn.addEventListener("click", function() {
   img.classList.toggle("hidden")
   pop.classList.toggle("hidden")
})