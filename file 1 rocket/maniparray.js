
//Strings em números
//Manipulando strings e números
// transformar string em número e número em string
/*let string = '123'
console.log(Number(string));
let number = 321
console.log(String(number));*/


//contar quantos caracteres tem uma palavra e quantos dígitos tem um número
/*let word = "Paralelepípedo"
console.log(word.length);
let number = 1234
console.log(String(number).length)*/
// é necessário transformar número em string para saber quantos caracteres eles tem


//Transformar um número quebrado com 2 casas decimais e trocar ponto por vírgula
let number = 345.6587423
console.log(typeof number.toFixed(2).replace(".", ","))
//.toFixed() numero de casas decimais exigida e .replace() mudar algo por outra coisa



//transformar letras minúsculas em maiúsculas e vice-versa.
let words = "programar é muito bacana!"
console.log(words.toLowerCase().toLocaleUpperCase())



// Verificar se o texto contém a palavra Amor
/*let phrase = "Eu quero viver o amor!"
console.log(phrase.includes("amor"))*/
// é sensivel a letras minusculas e maiusculas, ou seja se amor tivesse com letra maiuscula ía aparecer falso.


//separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _.
/*let phrase ="Eu quero viver o Amor!"
let myArray = phrase.split(" ")
//separa o texto por espaço
let phraseWithUnderscore = myArray.join("_")
//vai juntar com underscore o que está separado por espaço
console.log(phraseWithUnderscore);*/


// criar Array com construtor
let myArray = new Array("a", "b", "c")
console.log(myArray)

//contar elementos de um array
console.log(["a", "b", "c"].length)



// transformar uma cadeia de caracteres em elementos de um array
let word = "manipulação"
console.log(Array.from(word))


//manipulando array
 let techs = ["html", "css", "js"]
 
 //adicionar no fim
 techs.push("node.js")
 //adicionar no começo
 techs.unshift("sql")
 //remover do fim
 techs.pop()
 //remover do começo
 techs.shift
 //pegar somente alguns elementos do array
 /*console.log(techs.slice(1, 3))*/
 //remover 1 ou mais items em qualquer posição do array
 techs.splice(1,1)
 //encontrar a posição de um elemento no array
 let index = techs.indexOf('html')


 console.log(techs)