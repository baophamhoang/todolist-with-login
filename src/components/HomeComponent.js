import React from "react";
import { useDispatch } from 'react-redux';
import { addTask, checkTodo } from "../redux/actions";
import { useSelector } from "react-redux";
import {taskSelector} from '../redux/selectors'

function Home({user, setToken}){
    const handleLogOut = () => {
        setToken(null)
    }
    const dispatch = useDispatch();
    const tasks = useSelector(taskSelector);
    const handleCheckBoxChange = (e) => {
        dispatch(checkTodo(parseInt(e.target.id)))
    }
    const handleAddTaskBtn = () => {
        // dispatch(addTask())
    }
    return (
        <div className="container">
            <div className="todo-container">
                <h1 className="text-center">TodoList</h1>
                <div className="row">
                    <div className="col-12">
                        <span>Xin chào, {user.username} </span>
                        <button className="btn btn-secondary" onClick={handleLogOut}>Log out</button>
                    </div>
                </div>
                <div className="row mt-1">
                    {tasks.filter(task=>task.userId===user.id).map((task, id) =>(
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
                <div className="row">
                    <div className="col-12">
                        <button className="btn btn-danger" onSubmit={handleAddTaskBtn}>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;