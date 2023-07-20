import { useDispatch, useSelector } from "react-redux"
import { onChecking, onLogin, onLogout } from "../reducers/authSlice";
import { api } from "../api/api";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useAuthStore = () => {

    //ojo cambiar el use
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [validForm, setValidForm] = useState(true);

    const startLogin = async( user ) => {
        dispatch( onChecking() );

        console.log(user);

        try {

        const { data } =  await api.post('/login', user);
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);

        console.log(data);
        console.log(user);

        dispatch( onLogin({ name: data.name, id: data.id, token: data.token }) );

        Swal.fire({
            title: 'Welcome!',
            text: data.name,
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

    const startRegister = async( user ) => {

        dispatch( onChecking() );

        let nombre = "";
            nombre = user.name;
            let contraseña = "";
            contraseña = user.password1;

        if ( nombre.length < 3 ) {

            Swal.fire({
                title: 'Error!',
                text: 'Insert a proper name',
                icon: 'error',
                confirmButtonText: 'Ok'
              })

              setValidForm(false);            
        }

        const myRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g; // Regex for email

        if ( !myRegex.test(user.email) ) {

            Swal.fire({
                title: 'Error!',
                text: 'Insert a propper email',
                icon: 'error',
                confirmButtonText: 'Ok'
              })

              setValidForm(false);            
        }

        if ( (contraseña.length < 6) || (user.password1 !== user.password2)) {

            Swal.fire({
                title: 'Error!',
                text: 'Passwords most have 6 characters and be the same',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              setValidForm(false);           
        }

            if (validForm) {

                try {
                    const { data } =  await api.post('/register', user);
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('id', data.id);


                    Swal.fire({
                        title: 'Welcome!',
                        text: user.name,
                        icon: 'success',
                        confirmButtonText: 'Ok',
                        timer: 2000
                      });

                      dispatch( onLogin({ name: user.name, uid: data.id, token: data.token }) )

                    navigate("/giff");       
                     

                }            
      
                catch (error) {
                    console.log(error);

                    dispatch(onLogout(error.response.data.error));

                    Swal.fire({
                        title: 'Error!',
                        text: error.response.data.error,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        timer: 2000
                      });
                }
                
            }        

    }



    return {
        //properties

        //methods
        startLogin,
        startLogout,
        startRegister
    }

}