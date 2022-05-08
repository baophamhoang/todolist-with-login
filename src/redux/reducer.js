import { ADD_DATA } from "./actionTypes";
const reducer = (state = null, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state;
    }
}
export default reducer