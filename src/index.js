import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Weekview from './Components/Weekview';
import Home from './Components/Home';

const router = createBrowserRouter([
  {
    path: '/weekview',
    element: <Weekview />,
  },
  {
    path: '/',
    element: <Home />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);