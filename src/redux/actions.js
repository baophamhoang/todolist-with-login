import { 
    ADD_DATA,
    ADD_TASK,
    CHECK_TODO
 } from "./actionTypes"

export const addData = (payload) => {
    return ({
        type: ADD_DATA,
        payload
    })
}
export const addTask = (payload) => {
    return ({
        type: ADD_TASK,
        payload
    })
}
export const checkTodo = (payload) => {
    return ({
        type: CHECK_TODO,
        payload
    })
}

// export const fetchData = () => (dispatch) => {
//     return fetch('./data.json')
//     .then (response => {
//         console.log(response);
//         if (response.ok) {
//             return response;
//           } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error;
//           }
//         },
//         error => {
//             var errmess = new Error(error.message);
//             throw errmess;
//         }
//     )
//     .then(response => response.json())
//     .then(response => dispatch(addData(response)))
// }