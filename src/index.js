import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import { BrowserRouter } from 'react-router-dom';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Weekview from './components/Weekview';
// import Dayview from './components/Dayview';
// import Home from './components/Home';

// const router = createBrowserRouter([
//   {
//     path: '/dayview',
//     element: <Dayview />
//   },
//   {
//     path: '/weekview',
//     element: <Weekview />,
//   },
//   {
//     path: '/',
//     element: <Home />,
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<RouterProvider router={router} />);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)