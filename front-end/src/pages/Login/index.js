import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as validate from '../../utils/validate';
import * as axios from '../../utils/axios';
import * as md5 from '../../utils/md5';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const history = useHistory();
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isVisibleErrorEmail, setIsVisibleErrorEmail] = useState(false);

  const handleChange = (setState, event) => {
    setState(event.target.value);
  };
  const validateLogin = (callback, data, setState) => {
    if (callback(data)) {
      setState(true);
    } else {
      setState(false);
    }
  };

  const validateHashMd5 = (data) => {
    const encryptedPassword = md5.encryptPassword(passwordInput);
    if (encryptedPassword === data.valid) {
      history.push('/customer/products');
    }
  };

  const handleClick = async () => {
    try {
      const { data } = await axios.postLoginData({
        email: emailInput, password: passwordInput });
      validateHashMd5(data);
    } catch (error) {
      if (error.message.includes('404')) {
        validateLogin(validate.validateEmail, emailInput, setIsVisibleErrorEmail);
      }
    }
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
        <p
          data-testid="common_login__element-invalid-email"
        >
          Erro: Email não cadastrado
        </p>
      )}
      <Input
        handleChange={ (event) => handleChange(setPasswordInput, event) }
        dataTest="common_login__input-password"
        value={ passwordInput }
        id="password-input"
        placeholder="password"
        type="password"
      />

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
