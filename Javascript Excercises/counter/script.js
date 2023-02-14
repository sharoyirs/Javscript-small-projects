const lower = document.querySelector(".lower")
const add = document.querySelector(".add")
const number = document.querySelector(".number")

add.addEventListener("click", function() {
   number.innerHTML++
})

lower.addEventListener("click", function() {
   number.innerHTML--
})