// querySelector() - pega somente o primeiro
const element = document.querySelector(".one")
console.log(element)


// querySelectorAll()- dá pra usar o forEach
const elements = document.querySelectorAll("meta")
console.log(elements)

elements.forEach(el => console.log(el))