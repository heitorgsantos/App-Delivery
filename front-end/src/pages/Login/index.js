import React, { useState } from 'react';
import * as validate from '../../utils/validate';
import Input from '../../components/Input';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <form>
      <h1>Login</h1>
      <Input
        dataTest="common_login__input-email"
        value={emailInput}
        id="email-input"
        placeholder="email"
        type="text"
      />

      <Input
        dataTest="common_login__input-password"
        value={passwordInput}
        id="password-input"
        placeholder="password"
        type="password"
      />
     
      <div>
        <button type="button" data-testid="common_login__button-login">Login</button>
        <button type="button" data-testid="common_login__button-register">Register</button>
      </div>
    </form>
  );
}

export default Login;
