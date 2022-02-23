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
  };
  const validateLogin = (callback, data, setState) => {
    if (!callback(data)) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const handleClick = () => {
    validateLogin(validate.validateEmail, emailInput, setIsVisibleErrorEmail);
    validateLogin(
      validate.validatePassword,
      passwordInput,
      setIsVisibleErrorPassword,
    );
  };

  return (
    <form className="form-login">
      <h1>Login</h1>
      <Input
        handleChange={ (event) => handleChange(setEmailInput, event) }
        dataTest="common_login__input-email"
        value={ emailInput }
        id="email-input"
        placeholder="email"
        type="text"
      />
      {isVisibleErrorEmail && (
        <p data-testid="common_login__element-invalid-email">error</p>
      )}
      <Input
        handleChange={ (event) => handleChange(setPasswordInput, event) }
        dataTest="common_login__input-password"
        value={ passwordInput }
        id="password-input"
        placeholder="password"
        type="password"
      />
      {isVisibleErrorPassword && <p>error</p>}

      <div>
        <Button
          handleClick={ handleClick }
          dataTest="common_login__button-login"
          text="Login"
          disabled={
            !(
              validate.validateEmail(emailInput)
              && validate.validatePassword(passwordInput))
          }
        />
        <Button dataTest="common_login__button-register" text="Register" />
      </div>
    </form>
  );
}

export default Login;
