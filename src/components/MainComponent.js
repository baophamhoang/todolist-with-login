import { Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './HomeComponent';
import Login from './LoginComponent';
import { useSelector } from 'react-redux';
import {allSelector} from '../redux/selectors'
import { useDispatch } from 'react-redux';
import { addData } from '../redux/actions'
import databaseUrl from '../redux/database';

function Main(){
    const [token, setToken] = useState();
    const data = useSelector(allSelector);
    const dispatch = useDispatch();
    const fetchData = () => {
        fetch(databaseUrl)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            dispatch(addData(response));
        })
    }
    useEffect(()=>{
        fetchData();
    },[]);

    if (!token){
        return (
            <Login data={data} setToken={setToken}></Login>
        )
    }
    return (
        <div className='App'>
            <Home data={token} setToken={setToken}/>
        </div>
    )
}
export default Main;