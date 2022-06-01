//estrutura de repetição
//for
for(let i = 0; i <= 10; i++){
    console.log(i)
}

for (let i = 100; i > 0; i--){
    if(i === 50){
        break;
    }
    console.log(i);
}

for (let i = 10; i > 0; i--){
    if(i === 5){
        continue;
    }
    console.log(i);
}


//while
let i=0
while(i < 10){
    console.log(i)

    i++
    //quando não se sabe quando é o momento da parada se usa o while
}


//for... of
let named = 'Vitor'
let names = ['João', 'Paulo', 'Pedro']

/*for(let char of named) {
    console.log(char)
}*/
for(let name of names){
    console.log(name)
}


//for...in

let person = {
    name:'jhon',
    age: 30,
    weight: 88.6
}

for(let property in person){
    console.log(property)
    console.log(person[property])
}