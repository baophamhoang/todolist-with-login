import { ADD_DATA, CHECK_TODO } from "./actionTypes";
import _ from 'lodash';

const reducer = (state = null, action) => {
    switch(action.type){
        case ADD_DATA:
            return {
                ...state,
                data: action.payload
            }
        case CHECK_TODO: 
            const newUsers = _.clone(state.data.users);
            const user = newUsers.find(u=>u.id ===action.payload.user);
            const newTask = user.tasks.find(t=>t.id===action.payload.taskId);
            newTask.checked = !newTask.checked;
            return {
                ...state,
                data: {
                    ...state.data,
                    users: newUsers
                }
            }
        default:
            return state;
    }
}
export default reducer