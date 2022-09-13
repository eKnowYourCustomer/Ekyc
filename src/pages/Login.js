
import { useState } from "react";
import React, { Component }  from 'react';
import Base from "../components/Base";
import {login} from "../features/userSlice"; 
import "../components/Login.css";
import {useDispatch} from "react-redux";

const Login=()=>{
    const [name, setName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    
    return(
        <div>
        <div className="login">
            <form className="login_form">
                <h1>Login Here</h1>
                 <input type="name" 
                    placeholder="Enter name"
                    value={name}
                    onChange={(e)=> setName(e.target.value)}/>
                 <input type="email" 
                 placeholder="Enter email" 
                 value={email}
                 onChange={(e)=> setEmail(e.target.value)}/>
                 <input type="password" 
                 placeholder="password"
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}/> 
                  <button type="submit" className="submit_btn">Submit</button>
            </form>
        </div>
       
        </div>
    );
};
export default Login