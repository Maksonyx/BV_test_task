import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContext } from '../context';
import Error from '../pages/Error';
import Login from '../pages/Login';
import { privateRoutes, publicRoutes } from '../router';
import Loader from './UI/Loader/Loader';

const AppRouter = () => {
  const { isAuth, setIsAuth, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Error replace to="/error" />} key="/error" />
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
      <Route path="*" element={<Login replace to="/login" key="/login" />} />
    </Routes>
  );
};

export default AppRouter;
