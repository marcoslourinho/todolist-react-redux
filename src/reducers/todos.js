export default function todos(state = [], action){ //o nome do reducer é o nome da variavel que vai ficar guardada no estado e sempre deve ser inicializada
    // {type: 'ADD_TODO', text: 'Fazer café'} é a action que é recebida
    switch (action.type){
        case 'ADD_TODO': //adciona novo todo
            return [...state, {
                id: Math.random(), 
                text: action.text
            }]

        default:
            return state;
    }
}
