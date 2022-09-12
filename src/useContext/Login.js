/** @format */

import React from "react";
import { useState, useContext } from "react";
import { LoginContext } from "../Contexts/LoginContext";

function Login() {
  const { setUserName , setShowProfile} = useContext(LoginContext);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form action='' onSubmit={handleSubmit}>
        <div className='label-container'>
          <label htmlFor='username'>UserName: </label>
          <input
            type='text'
            autoFocus
            required
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
        </div>

        <div className='label-container'>
          <label htmlFor='username'>Password: </label>
          <input type='password' />
        </div>
        <button onClick={() => {
            setShowProfile(true)
        }}>Login</button>
      </form>
    </div>
  );
}

export default Login;
