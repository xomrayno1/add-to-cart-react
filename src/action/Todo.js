import {ADD_ITEM} from '../common/Constant'

export const addToDo = (text) =>{
    return {
        type: ADD_ITEM,
        payload: text
    }
}
