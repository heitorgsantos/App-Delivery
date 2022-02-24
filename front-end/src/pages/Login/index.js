import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as validate from '../../utils/validate';
import { postLoginData } from '../../utils/axios';
import * as md5 from '../../utils/md5';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Login() {
  const history = useHistory();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const [isVisibleErrorEmail, setIsVisibleErrorEmail] = useState(false);

  const handleChange = ({ target: { name, value } }) => {
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateHashMd5 = (data) => {
    const encryptedPassword = md5.encryptPassword(loginData.password);
    if (encryptedPassword === data.valid) {
      history.push('/customer/products');
    }
  };

  const handleClick = async () => {
    const response = await postLoginData(loginData);
    if (response.data) {
      validateHashMd5(response.data);
    } else {
      setIsVisibleErrorEmail(true);
    }
  };

  return (
    <form className="form-login">
      <h1>Login</h1>
      <Input
        handleChange={ handleChange }
        dataTest="common_login__input-email"
        value={ loginData.email }
        id="email-input"
        placeholder="email"
        name="email"
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
        handleChange={ handleChange }
        dataTest="common_login__input-password"
        value={ loginData.password }
        id="password-input"
        name="password"
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
              validate.validateEmail(loginData.email)
              && validate.validatePassword(loginData.password))
          }
        />
        <Button dataTest="common_login__button-register" text="Register" />
      </div>
    </form>
  );
}

export default Login;
