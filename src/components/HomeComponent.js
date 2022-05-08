import React from "react";
import { useDispatch } from 'react-redux';
import { checkTodo } from "../redux/actions";

function Home({data, setToken}){
    const handleLogOut = () => {
        setToken(null)
    }
    const dispatch = useDispatch();
    const handleCheckBoxChange = (e) => {
        dispatch(checkTodo({
            user: data.id,
            taskId: parseInt(e.target.id)
        }))
    }
    // console.log(data);
    return (
        <div className="container">
            <div className="todo-container">
                <h1 className="text-center">TodoList</h1>
                <div className="row">
                    <div className="col-12">
                        <span>Xin chào, {data.username} </span>
                        <button className="btn-dark" onClick={handleLogOut}>Log out</button>
                    </div>
                </div>
                <div className="row mt-1">
                    {data.tasks.map((task, id) =>(
                        <div className="col-12 form-check" key={id}>
                            <input className="form-check-input" 
                                type="checkbox" 
                                onChange={handleCheckBoxChange} 
                                checked={task.checked} 
                                id={task.id}
                                />
                            <label className={`form-check-label ${task.checked?`task-done`:``}`} htmlFor={task.id}>
                                {task.name}
                            </label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Home;