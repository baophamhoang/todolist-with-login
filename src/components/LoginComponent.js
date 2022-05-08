import React, { useState } from "react";
const initalForm = {
    username: '',
    password: ''
}
const database = {
    users: [
        {
            username:'Pham Bao',
            password:'Thaobede'
        },
        {
            username:'Dam Thao',
            password:'baodeptry'
        }
    ]
}
function Login({setToken, data}){
    const [formValue, setFormValue] = useState(initalForm)
    console.log(data);
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValue({
            ...formValue, 
             [name]: value
        })
    }
    const isValid = (e) => {
        return data.data.users.find(u => (
            u.username === e.username && u.password === e.password
            ));       
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isValid(formValue)){
            alert('Invalid username or password')
        }
        else {
            setToken(isValid(formValue))
        }
    }
    return (
        <React.Fragment>
            <h1>Login Dashboard</h1>
            <form key='feedback-form' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-12">
                        <div className="form-floating mb-3">
                            <input type="text" className={`form-control`} onInput={handleInputChange}
                            name="username" id="username" placeholder='Your username' required/>
                            <label htmlFor="username">Username</label>
                        </div>
                    </div>
                    <div className="col-12 ">
                        <div className="form-floating mb-3">
                        <input type="password" className="form-control" onInput={handleInputChange}
                         name="password" id="password" placeholder='Your password' required/>
                        <label htmlFor="password">Password</label>
                    </div>
                    </div>
                    <div className="row">
                        <div className="col-6 offset-3 text-center">
                            <button type="submit" className="feedback-btn btn-secondary" style={{
                                width: '100%'
                            }}>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Login;