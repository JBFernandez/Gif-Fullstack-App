
import { createBrowserRouter } from 'react-router-dom';
import { RegisterPage } from '../AppContainer/Register/RegisterPage';


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RegisterPage />
    }
]);