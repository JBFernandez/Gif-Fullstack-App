import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegisterPage } from './AppContainer/Register/RegisterPage';
import { LoginPage } from './AppContainer/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './AppContainer/Pages/ErrorPage';
import { GiffPage } from './AppContainer/Pages/GiffPage';
import { Test } from './AppContainer/Pages/Test';


const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/giff",
    element: < GiffPage />
  },
  {
    path: "/test",
    element: < Test />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={ router } />
  </React.StrictMode>,
)
