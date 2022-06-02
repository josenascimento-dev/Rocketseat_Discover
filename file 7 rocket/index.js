//definir
class Parafuso { //superoclasse-Abstrata
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada')
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }

}

class Fenda extends Parafuso{
    constructor(){super()}
    get tipo() {
        return 'fenda'
    }
}
class Philips extends Parafuso {
    constructor() {super()}
    get tipo() {
        return 'philips'
    }
}
class Allenn extends Parafuso {}
    //criar e usar
   // new Parafuso () // 'classe abstrata não pode ser instânciada'
    let fenda = new Fenda()
    let philips = new Philips()
    let allen = new Allenn()

    console.log(fenda.tipo, philips.tipo);
    console.log(allen.tipo);