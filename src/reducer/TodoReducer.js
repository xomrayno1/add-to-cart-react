import {ADD_ITEM} from '../common/Constant'

const initalState = {
    item : []
}


const todoReducer = (state = initalState, action) => {
    const {type, payload} = action;
    switch(type){
        case ADD_ITEM : 
            return {
                ...state,
                item : [...state.item, payload]
            }
        default:
            return state;
    }
}
export default todoReducer;