import React from 'react';
import ReactDOM from 'react-dom/client';
import { RegisterPage } from './AppContainer/Register/RegisterPage';
import { LoginPage } from './AppContainer/Login/LoginPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './AppContainer/Pages/ErrorPage';
import { GiffPage } from './AppContainer/Pages/GiffPage';
import { Test } from './AppContainer/Pages/Test';
import { SavedGifs } from './AppContainer/Pages/SavedGifs';
import { Provider } from 'react-redux';
import { store } from './store/store';
import "../src/AppContainer/Register/register.css"


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
    path: "/savedgif",
    element: <SavedGifs/>
  },
  
  {
    path: "/test",
    element: < Test />
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={ store } >
      <RouterProvider router={ router } />

    </Provider>
  </React.StrictMode>,
)
