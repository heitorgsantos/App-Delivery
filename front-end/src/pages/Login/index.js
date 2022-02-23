import React, { useState } from 'react';
import * as validate from '../../utils/validate';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isVisibleErrorEmail, setIsVisibleErrorEmail] = useState(false);
  const [isVisibleErrorPassword, setIsVisibleErrorPassword] = useState(false);

  const handleChange = (setState, event) => {
    setState(event.target.value);
  }

   return (
    <form>
      <h1>Login</h1>
      <Input
        handleChange={ (event) => handleChange(setEmailInput, event) }
        dataTest="common_login__input-email"
        value={emailInput}
        id="email-input"
        placeholder="email"
        type="text"
      />

      <Input
        handleChange={ (event) => handleChange(setPasswordInput, event) }
        dataTest="common_login__input-password"
        value={passwordInput}
        id="password-input"
        placeholder="password"
        type="password"
      />
     
      <div>
        <Button
          dataTest="common_login__button-login"
          text="Login"
        />
        <Button
          dataTest="common_login__button-register"
          text="Register"
        />
      </div>
    </form>
  );
}

export default Login;
