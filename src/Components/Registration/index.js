import React, { useState } from "react";
import TextField from '@mui/material/TextField';

import { Link } from "react-router-dom";

const Registration = () => {

    const BASE_URL = "http://127.0.0.1:8000/";
    const END_POINT= `register/`;
    let total_url = BASE_URL+END_POINT
    const [formData, setFormData] = useState({
        "email": "",
        "first_name":"",
        "last_name" : "",
        "password":""
    });

    const handleFormSubmit = () => {
        fetch(total_url,{
            method: "POST",
            headers: {
                "Content-Type":"application/json",
            },
            body:JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => {
            console.log(error)
        })

        // console.log(formData)
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
            <div className="mt-3">
            <TextField id="first_name" label="First Name" variant="outlined" onChange={e=>setFormData({...formData,first_name:e.target.value})} />
            </div>
            <div className="mt-3">
            <TextField id="last_name" label="Last Name" variant="outlined" onChange={e=>setFormData({...formData,last_name:e.target.value})} />
            </div>
            
            <div>
                <button onClick={handleFormSubmit} className="mt-3 btn btn-primary">Register</button>
            </div>
            <Link to="/login" >Login</Link>
        </div>
        </>
    )   
}

export default Registration