import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';

const Login = () => {
    const [formData,setFormData] = useState({
        "email":"",
        "password":""
    })
    let loginEndPoint = "login"
    const url = `http://127.0.0.1:8000/${loginEndPoint}/`
    const handleFormSubmit = () => {
        fetch(url,{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
<>
    <div className ="mt-5 text-center d-flex flex-column justify-content-start" >
            <div className="mt-3">
            <TextField id="email" label="Enter the email" variant="outlined" onChange={e=>setFormData({...formData,email:e.target.value})} />
            </div>
            <div className="mt-3">
            <TextField id="password" type="password" label="Enter your password" variant="outlined" onChange={e=>setFormData({...formData,password:e.target.value})} />
            </div>
            

            <div>
                <button onClick={handleFormSubmit} className="mt-3 btn btn-primary">Login</button>
            </div>
            <Link to="/registration">Go to register
            </Link>
        </div>
    </>
    )
}


export default Login