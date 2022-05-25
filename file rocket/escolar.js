/*transformar notas escolares

crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* entre 80 - 89 - B
* entre 70 - 79 - C
* entre 60 - 69 - D
* menor que 60 - F
*/
/*
let nota = 80 
    if( nota >= 90){
        console.log('A')
    } else if (nota <= 89 && nota >= 80){
        console.log('B')
    }else if (nota <= 79 && nota >=70){
        console.log('C')
    }
    else if (nota < 69 && nota > 60){
        console.log('D') 
    }
    else {
        console.log('F')
    }
*/function getScore(score){
    let scoreA = score >= 90 && score <= 100 
    let scoreB = score <= 89 && score >= 80
    let scoreC = score <= 79 && score >= 70
    let scoreD = score <= 69 && score >= 60
    let scoreF = score <= 60 && score >= 0
    
    let scorefinal;
        if(scoreA){
            scorefinal = 'A'
    
        } else if (scoreB){
            scorefinal = 'B'
           
        }else if (scoreC){
            scorefinal = 'C'
            
        }else if (scoreD){
            scorefinal = 'D'
            
        }
        else if (scoreF){
            scorefinal = 'F'
        }
        else{
            scorefinal = 'Nota inválida'
        }
        return scorefinal
    
}
console.log(getScore(101)); 
console.log(getScore(10)); 
console.log(getScore(-1)); 
console.log(getScore(50));
console.log(getScore(80)); 
console.log(getScore(75)); 



