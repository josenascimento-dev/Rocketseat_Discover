/*function useState(){
    let state: number | string;

    function get(){
        return state;
    }

    function set(newValue: number | string){
        state = newValue
    }
    return {get, set};
}

let newState = useState();
newState.get();
newState.set(123);*/


//generic
/**
 * S => state
 * T => type
 * K => Key
 * v => value
 * E => element
 */
 /*function useState<T extends number | string>(){
    let state: T;

    function get(){
        return state;
    }

    function set(newValue: T){
        state = newValue
    }
    return {get, set};
}

let newState = useState<number>();// a partir do momento que eu declaro um tipo eu tenho que respeitar o tipo
newState.get();
newState.set(123);*/