import React from 'react';
import classes from "./Login.module.css";

function Login() {
  return (
    <section className={classes.auth}>
      <h1>Sign Up</h1>
      <form>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            required
          />
        </div>
          <div className={classes.control}>
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
            />
          </div>
        <div className={classes.actions}>
            <button>
             Create Account<br />
            </button>
          </div>
          <div className={classes.actions}>
          <button
            type="button"
            className={classes.toggle}
          >
            Already a User
          </button>
        </div>
      </form>
      <button className={classes.toggle}>Forgot password ?</button>
    </section>
  )
}

export default Login