const initialState = () => {
    numOfCakes = 10,
    Btncondition = false
}
const CAKE_ORDERED = 'CAKE_ORDERED';
const CONDITION = 'CONDITION';

const orderCake = () => {
    return {
    type: CAKE_ORDERED,
    initialState,
    quantity: 1
    }
}

const btnCondition = () =>{
    return{
        type:CONDITION,
        initialState,
    }
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return{
                ...state,
                numOfCakes: state.numOfCakes - 1
        };
        break;
        case CONDITION:
            return{
                condition: !state.Btncondition
        }
        default:
            return state
    }
}   
// (previousState,action) => newState
