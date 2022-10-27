import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context';
import { isLoggedOutAction } from '../../../store/sportsReducer';
import MyButton from '../Button/MyButton';

const Navbar = () => {
  const dispatch = useDispatch();
  const router = useNavigate();

  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem('auth', 'true');
    dispatch(isLoggedOutAction(true))
    router('/login')
  };

  return (
    <div className="navbar">
      {isAuth
        ? (
          <div className="navbar">
            <MyButton onClick={logout} data-testid="logout">Logout</MyButton>
            <div className="navbar__links">
              <Link to="/sports">Sports</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
          )
        : (
          <div className="navbar__links">
            <Link to="/login" data-testid="login">Login page</Link>
            <Link to="/about" data-testid="about">About</Link>
          </div>
        )
      }
    </div>
  );
};

export default Navbar;
