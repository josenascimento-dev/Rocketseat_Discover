//1. Declare uma variável de nome weight
//let weight;
//2. Que tipo de dado é a variável acima?
//console.log(typeof weight)
/*  
3. Declare uma variável e atribua para cada um dos dados:
 
   nome: string
   age: number (integer)
   stars: number (float)
   isSubscribes: Boolean
let client= {
  name: 'Mateus',
  age: 10,
  stars: 4.5,
  isSubscribed: true
}

*/


/*
  4. Variável student abaixo é de que tipo de dado?
  4.1 Atribua a ela as mesmas propriedades e valores do exercício 3.
  4.2 Mostre no console a seguinte mensagem:
     <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

*/
let student = {
  name: "Mateus",
  age: 10,
  weight: 64.5,
  isSubscribed: true
}
//console.log(student.name + " de idade " + student.age + " pesa " + student.weight + " kg.");
 /*
 5. Declare uma variável do tipo Array, de nome students e atribua a  ela nenhum valor, ou seja, somente o Array vazio */
 let students = []
 /*
 6. Reatribua valor para a variável acima, colocando dentro dela o objeto student da questão 4. (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no Array)
  */
 students = [
   student
 ]
 //console.log(students);
/*
7. coloque no console o valor da posição zero do array acima */ 
console.log(students[0]);
/*
8. Crie um novo student e coloque na posição 1 do Array students
 */
const jhon = {
  name: 'jhon',
  age: '23',
  weight: '74.8',
  isSubscribe: true,
}
students[1]= jhon
console.log(students)
/*
9. Sem rodar o código responda qual é a resposta do código abaixoe porque? após sua resposta, rode o código abaixo e veja se você acertou*/

console.log(a)
var a = 1