import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout } from "../reducers/authSlice";
import { api } from "../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export const useAuthStore = () => {

    //ojo cambiar el use
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const startLogin = async( user ) => {
        dispatch( onChecking() );

        console.log(user);

        try {

        const { data } =  await api.post('/login', user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);

        console.log(data);

        dispatch( onLogin({ id: data.id, token: data.token }) );

        Swal.fire({
            title: 'Welcome!',
            text: 'Enjoy',
            icon: 'success',
            confirmButtonText: 'Ok',
            timer: 2000
        });

        navigate("/giff", {
            replace: true
        })

        } catch (error) {
        console.log(error);

        dispatch(onLogout(error.response.data.error));

        Swal.fire({
            title: 'Error!',
            text: error.response.data.error,
            icon: "error",
            confirmButtonText: 'Ok',
            timer: 2000
        });

        }

    }

    const startLogout = async() => {

        localStorage.clear();
        dispatch(onLogout());

        navigate("/login", {
            replace: true
        })

    }



    return {
        //properties

        //methods
        startLogin,
        startLogout,
    }

}