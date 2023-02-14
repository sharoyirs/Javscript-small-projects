"use strict";

const menuOne = document.querySelector('.menu')
const menuTwo = document.querySelector(".menu2");
const btn = document.querySelector(".btn")

btn.addEventListener('click', function() {
   menuOne.classList.toggle('hidden')
})


