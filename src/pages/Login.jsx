import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../components/UI/Button/MyButton';
import MyInput from '../components/UI/Input/MyInput';
import { AuthContext } from '../context';

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const router = useNavigate();
  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    router('/sports');
  };

  return (
    <div className='container'>
      <h1 style={{textAlign: 'center'}}>Login page</h1>
      <form className='login-form' data-testid="login-form" onSubmit={login}>
        <MyInput type="text" placeholder="Input login" />
        <MyInput type="password" placeholder="Input password" />
        <MyButton data-testid="login-button">Login</MyButton>
        <span style={{marginLeft: 15}}><strong>NOTE:</strong> It's just a fake login form. Just click on the "Login" button to be "Loggedin"</span>
      </form>
    </div>
  );
};

export default Login;
