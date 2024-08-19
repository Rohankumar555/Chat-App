import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import $ from 'jquery'; 
import Popper from 'popper.js'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import styles from './login.module.css'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import {login} from '../store/user';
import {
    createBrowserRouter,
    Link,
    BrowserRouter as Router,
    Routes,
    Route,
    RouterProvider,
    useNavigate, 
    Navigate
  } from "react-router-dom";
  const URL='http://localhost:5000'
function Login() {
    const [RightPanelActive, setIsRightPanelActive] = useState(false);
    const [formData, setFormData] = useState({
        Name: '',
        email: '',
        password: '',
        formType:''
    });
    const [loginData, setLoginData] = useState({
      email: '',
      password: '',
      formType:''
  });
    const [response, setResponse] = useState(null);
    const [errors, setErrors] = useState({});
    const [error, setError] = useState('');
    const handleSignUpClick = () => {
      setIsRightPanelActive(true);
    };
    const navigate = useNavigate();
    //const dispatch = useDispatch();
    const handleSignInClick = () =>{
      setIsRightPanelActive(false);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleChange2 = (e) => {
      const { name, value } = e.target;
      setLoginData({
          ...loginData,
          [name]: value,
      });
  };
    const validation=(data)=>{
        const errors = {};
 
        if (!data.Name.trim()) {
            errors.Name = 'Username is required';
        }
 
        if (!data.email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            errors.email = 'Email is invalid';
        }
 
        if (!data.password) {
            errors.password = 'Password is required';
        }else if (data.password.length < 8) {
            errors.password = `Password must be at 
            least 8 characters long`;
        }
        return errors;
    }

    const loginvalidation=(data)=>{
        const error = {};
        
        if (!data.email.trim()) {
            error.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(data.email)) {
            error.email = 'Email is invalid';
        }
        if (!data.password) {
          error.password = 'Password is required';
        }else if (data.password.length < 8) {
            error.password = `Password must be at 
            least 8 characters long`;
        }
        return error;
     }
    const handleSubmit = async (e) => {
          e.preventDefault();
          let newErrors=validation(formData);
          formData.formType='signup'
          setErrors(newErrors);
          
          if (Object.keys(newErrors).length === 0){
              // Form submission logic here
                
                await axios.post(URL + '/login',formData).then((response)=>{

                  
                  alert('registration successful')
                  navigate('/View')
                }).catch((err)=>{
                  if(err.response && err.response.data) {
                      alert(err.response.data.error)
                      // setError( err.response.data.error );
                  } else {
                      console.error(err);
                      alert('Some different problem occured')
                      // setError('Some different problem occured');
                  }
                });
            
          }else{
              console.log(`Form submission failed
                due to validation errors.`);
          }
        } 

        const handleLoginSubmit=async(e)=>{
            e.preventDefault();
            const newErrors=loginvalidation(loginData);
            loginData.formType='signin';
            setError(newErrors);
            if (Object.keys(newErrors).length === 0){
              // Form submission logic here
                
                await axios.post(URL + '/login',loginData, { withCredentials: true }).then((response)=>{
                  console.log(response);
                  // dispatch(login(response.data));
                  console.log('Login response:', response.data);
                  localStorage.setItem('user', JSON.stringify(response.data));
                  alert(response)
                  navigate('/View')
                }).catch((err)=>{
                  if(err.response && err.response.data) {
                      alert(err.response.data.error)
                      // setError( err.response.data.error );
                  } else {
                      console.error(err);
                      alert('Some different problem occured during login')
                      // setError('Some different problem occured');
                  }
                });
            
          }else{
              console.log(`Login failed
                due to validation errors.`);
          }
        }
    
  return (
     
     
     <div className={`${styles.container} ${RightPanelActive ? styles['right-panel-active'] : ''}`} id={styles.container}>
        <div className={`${styles['form-container']} ${styles['sign-up-container']}`}>
          <form onSubmit={handleSubmit} action="#">
            <h1>Create Account</h1>
            <div className={styles['social-container']}>
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                <span>or use your email for registration</span>
                <input className={styles.input} type="text" placeholder="Name" name="name" value={formData.Name} onChange={handleChange}/>
                {errors.name && <span className="error-message"> {errors.name} </span> }
                <input className={styles.input} type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange}/>
                {errors.email && <span className="error-message"> {errors.email} </span> }
                <input className={styles.input} type="password" placeholder="Password" name="password" value={formData.password} onChange={handleChange}/>
                {errors.password && <span className="error-message"> {errors.password} </span> }
                <input type="hidden" name="formType" value="signup"></input>
                
                <button className={styles.button}>Sign Up</button>

                
            </form>
        </div>
        <div className={`${styles['form-container']} ${styles['sign-in-container']}`}>
          <form action="#" onSubmit={handleLoginSubmit}>
            <h1>Sign in</h1>
            <div className={styles['social-container']}>
              <a href="#" className={styles.social}><i className="fab fa-facebook-f"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-google-plus-g"></i></a>
              <a href="#" className={styles.social}><i className="fab fa-linkedin-in"></i></a>
            </div>
            <span>or use your account</span>
            {/* <input type="hidden" name="name" value={formData.name=''}></input> */}
            
            <input type="email" placeholder="Email" name="email" className={styles.input} value={loginData.email} onChange={handleChange2}/>
            {error.email && <span className="error-message"> {error.email} </span> }
            <input type="password" placeholder="Password" name="password" className={styles.input} value={loginData.password} onChange={handleChange2}/>
            {error.password && <span className="error-message"> {error.password} </span> }
            <a href="#" className={styles.a}>Forgot your password?</a>
            <button className={styles.button}>Sign In</button>
          </form>
        </div>
        <div className={styles['overlay-container']}>
          <div className={styles.overlay}>
            <div className={`${styles['overlay-panel']} ${styles['overlay-left']}`}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className={`${styles.button} ${styles.ghost}`} id="signIn" onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className={`${styles['overlay-panel']} ${styles['overlay-right']}`}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button className={`${styles.button} ${styles.ghost}`} id="signUp" onClick={handleSignUpClick}>Sign Up</button>
            </div>
          </div>
        </div>
    {/* {response && <div>Response: {JSON.stringify(response)}</div>}
    {error && <div className="error-message"> {error} </div>} */}
     
    </div>
    
    
  )
}

export default Login;