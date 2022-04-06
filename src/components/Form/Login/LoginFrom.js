import React from 'react';
import './LoginFrom.css'
import { getAuth } from "firebase/auth";
import app from '../../../firebase.init';
const auth = getAuth(app);

const getEmail = (e)=>{
    console.log(e.target.value);

}
const getPassword = (e)=>{
    console.log(e.target.value);
}
const handleSubmit = (e)=>{
    console.log('submit');
    e.preventDefault()
}
const LoginFrom = () => {
    return (
        <div className='login-body'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit} >
                <h3>Login Here</h3>

                <label for="username">Username</label>
                <input onBlur={getEmail} type="text" placeholder="Email or Phone" id="username" />

                <label for="password">Password</label>
                <input onBlur={getPassword} type="password" placeholder="Password" id="password" />

                <input className='button' type="submit" value="submit" />
            </form>
        </div>
    );
};

export default LoginFrom;