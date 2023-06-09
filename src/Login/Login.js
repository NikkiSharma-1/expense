import React from 'react';
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

function Login() {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const confirmPasswordInputRef = useRef();
  
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
  
    const switchAuthModeHandler = () => {
      setIsLogin((prevState) => !prevState);
    };
    const passwordHandler=(props)=>{
      navigate('./passwdreset' ,{replace:true})
  
    }
  
    const SubmitHandler = (event) => {
      event.preventDefault();
  
      const enteredEmail = emailInputRef.current.value;
      const eneteredPassword = passwordInputRef.current.value;
  
      setIsLoading(true);
      let url;
  
      if (isLogin) {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDuvNa4o1FU9bVdjK2VHC-w9hXSFUJbsFo";
      } else {
        url =
          "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDuvNa4o1FU9bVdjK2VHC-w9hXSFUJbsFo";
      }
  
      fetch(url, {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: eneteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          setIsLoading(false);
          if (res.ok) {
            return res.json();
          } else {
            return res.json().then((data) => {
              let errorMessage = "Authentication Failed";
              if (data && data.error && data.error.message) {
                errorMessage = data.error.message;
              }
  
              throw new Error(errorMessage);
            });
          }
        })
    };
  
    return (
      <section className={classes.auth}>
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={SubmitHandler}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          {!isLogin && (
            <div className={classes.control}>
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                // required
                ref={confirmPasswordInputRef}
              />
            </div>
          )}
          <div className={classes.actions}>
            {!isLoading && (
              <button>
                {isLogin ? "Login" : "Create Account"} <br />
              </button>
            )}
            
            {/* {isLogin && <button>Forgot Password</button>} */}
            </div>
            <div className={classes.actions}>
  
            <button
              type="button"
              className={classes.toggle}
              onClick={switchAuthModeHandler}
            >
              {isLogin
                ? "Don't have an account? Sign up!"
                : "Have an account? Login"}
              <br />
            </button>
          </div>
        </form>
        {isLogin && <button className={classes.toggle} onClick={passwordHandler}>Forgot password ?</button>}
  
      </section>
    );
  };
  
  export default Login;