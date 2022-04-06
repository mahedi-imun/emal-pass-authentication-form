import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import app from '../../../firebase.init';
import './SignUpForm.css'
const auth = getAuth(app);
const SignUpForm = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error, setError] = useState('')
  const getName = (e) => {
    setName(e.target.value);
  }
  const getUserName = (e) => {
    // setUserName(e.target.value)
  }
  const getEmail = (e) => {
    setEmail(e.target.value)
    //  console.log(e.target.value)
  }
  const getPhone = (e) => {
    setPhone(e.target.value)
  }
  const getPassword = (e) => {
    setPassword(e.target.value)
    // console.log(e.target.value)
  }
  const getConfirmPass = (e) => {
    setConfirmPass(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!/(?=.*[!#$%&? "])/.test(password)) {
      setError("at least 1 special character must")
      return
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError('')
        console.log(result.user);
      })
      .catch(error => {
        console.log(error);
      })
  }


  return (

    <div className='signup-container-body'>
      <div className="container">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input onBlur={getName} type="text" placeholder="Enter your name" required />
              </div>
              <div className="input-box">
                <span className="details">Username</span>
                <input onBlur={getUserName} type="text" placeholder="Enter your username" required />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input onBlur={getEmail} type="email" placeholder="Enter your email" required />
              </div>
              <div className="input-box">
                <span className="details">Phone Number</span>
                <input onBlur={getPhone} type="number" placeholder="Enter your number" required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>

                <input onBlur={getPassword} type="password" placeholder="Enter your password" required />
              </div>
              <div className="input-box">
                <span className="details">Confirm Password</span>
                <input onBlur={getConfirmPass} type="password" placeholder="Confirm your password" required />
              </div>
              <span>{error}</span>
            </div>
            <div className="gender-details">
              <input type="radio" name="gender" id="dot-1" />
              <input type="radio" name="gender" id="dot-2" />
              <input type="radio" name="gender" id="dot-3" />
              <span className="gender-title">Gender</span>
              <div className="category">
                <label for="dot-1">
                  <span className="dot one"></span>
                  <span className="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span className="dot two"></span>
                  <span className="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span className="dot three"></span>
                  <span className="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div className="button">
              <input type="submit" value="Register" />
            </div>
            <div>
              <span>Already have a account? </span>
              <button className='signup-btn' onClick={() => navigate('/login')}> Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default SignUpForm;