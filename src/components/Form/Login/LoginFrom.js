import React, { useState } from 'react';
import './LoginFrom.css'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
const auth = getAuth(app);

const LoginFrom = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPass] = useState('')
    const [error, setError] = useState('')

    const getEmail = (e) => {
        setEmail(e.target.value);
    }

    const getPassword = (e) => {
        setPass(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (!/(?=.*[!#$%&? "])/.test(password)) {
            setError("at least 1 special character must")
            return
        }
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            })
    }
    return (
        <div className='login-body'>
            <div className="background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <form onSubmit={handleSubmit} >
                <h3>register hare</h3>

                <label for="email">Email</label>
                <input onBlur={getEmail} type="email" required placeholder="Email" id="username" />

                <label for="password">Password</label>
                <input onBlur={getPassword} type="password" placeholder="Password" id="password" required />
                <small className='pass-error'>{error}</small>
                <input className='button' type="submit" value="Login" />
                <div>
                    <span className='btn-text'>Don’t have a account?</span>
                    <button className='login-btn' onClick={() => navigate('/register')}> register</button>
                </div>

            </form>

        </div>
    );
};

export default LoginFrom;