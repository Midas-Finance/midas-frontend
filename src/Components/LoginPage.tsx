import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";

export const LoginPage = (props) => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const authToken = new URLSearchParams(props.location.search).get('jwt');

  useEffect(() => {
    console.log(authToken);

  })

  // TO DO: Replace with useHistory hook
  const login = () => {
    window.open('http://localhost:3000/auth/google');
  }

  const storeSession = () => {

  }

  return (
    <div>
      <div>Login Page</div>
      {authToken}
      <button onClick={ login }> Login </button>
    </div>
  )
}