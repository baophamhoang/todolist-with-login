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
        const addTaskBtn =  document.querySelector('.add-task-input');
        if (addTaskBtn.childNodes[0].value.length>0){
            dispatch(addTask({
                id: tasks.length,
                name: addTaskBtn.childNodes[0].value,
                userId: user.id,
                description: '',
                checked: false
            }))
            addTaskBtn.childNodes[0].value='';
            addTaskBtn.childNodes[0].focus();
        }
        else {
            if (addTaskBtn.classList.contains('show')){
                addTaskBtn.classList.remove('active');
                addTaskBtn.classList.add('fading');
                setTimeout(() => {
                    addTaskBtn.classList.remove('show');
                }, 700);
            }
            else{
                if (addTaskBtn.classList.contains('fading')){
                    addTaskBtn.classList.remove('fading')
                }
                addTaskBtn.classList.add('show');
                setTimeout(() => {
                    addTaskBtn.classList.add('active');
                }, 0);
                addTaskBtn.childNodes[0].focus();
            }
        }
        
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
                <div className="row mt-1">
                    <div className="col-7 add-task-input">
                        <input className="form-control" type="text" id='add-task' placeholder="Type new task.."/>
                        {/* <label className="form-control" htmlFor="add-task">Type new task</label> */}
                    </div>
                    <div className="col-5">    
                        <button className="btn btn-danger" onClick={handleAddTaskBtn}>Add Task</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;