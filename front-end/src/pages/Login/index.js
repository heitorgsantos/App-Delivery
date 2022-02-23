import React from 'react';

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <input data-testid="common_login__input-email" type="text" placeholder="email" />
      </div>
      <div>
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <button type="button" data-testid="common_login__button-login">Login</button>
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
