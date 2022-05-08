import { ADD_DATA, ADD_TASK, CHECK_TODO } from "./actionTypes";
import _ from 'lodash';

const reducer = (state = null, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }
        case CHECK_TODO: 
            const tasks = _.clone(state.data.tasks);
            const task = tasks.find(t=>t.id===action.payload)
            task.checked = !task.checked;
            return {
                ...state,
                data: {
                    ...state.data,
                    tasks: tasks
                }
            }
        case ADD_TASK:
            
            return {
                ...state, 
                data: {
                    ...state.data,
                    tasks: [
                        ...state.data.tasks,
                        action.payload
                    ]
                }
            }
        default:
            return state;
    }
}
export default reducer