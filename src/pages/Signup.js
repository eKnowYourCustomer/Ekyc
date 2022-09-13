import React, { Component }  from 'react';
import Base from "../components/Base";

import "../pages/Signup.css"



const Signup=()=>{
    const handleFormSubmit=(event)=>{
        event.priventDefault();
    };

    return(
        <div>
        <div className="container">
            <div className="app-wrapper">
                <div>
                    <h2 className="title">Create a new Customer</h2>
                </div>
                <form className="form-wrapper">
                    <div className="name">
                        <label className="label">fullName</label>
                        <input className="input" type="text"/>

                    </div>
                    <div className="email">
                        <label className="label">Enter email</label>
                        <input className="input" type="text"/>

                    </div>
                    <div className="password">
                        <label className="label">Enter Password</label>
                        <input className="input" type="password"/>

                    </div>
                    <div>
                        <button className="submit" onClick={handleFormSubmit}>Register</button>
                    </div>
                </form>
        </div>
        </div>
     </div>
    );
};
export default Signup 