import About from '../pages/About';
import Events from '../pages/Events';
import Login from '../pages/Login';
import Markets from '../pages/Markets';
import Sports from '../pages/Sports';

export const privateRoutes = [
  { path: '/about', element: <About /> },
  { path: '/sports', element: <Sports /> },
  { path: '/sports/:sport_id', element: <Events /> },
  { path: '/sports/:sport_id/events/:event_id', element: <Markets /> },
];

export const publicRoutes = [
  { path: '/login', element: <Login /> },
  { path: '/about', element: <About /> },
];
