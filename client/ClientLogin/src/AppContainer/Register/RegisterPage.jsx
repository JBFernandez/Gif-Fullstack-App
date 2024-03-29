import React, { useEffect } from 'react';
import '../Register/register.css';
import { useForm } from '../../utilities/useForm';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { api } from '../../api/api';
import { useState } from 'react';
import { useAuthStore } from '../../hooks/useAuthStore';


export const RegisterPage = () => {

    const navigate =  useNavigate();
    const { startRegister, startLogout } = useAuthStore();

    const initialForm = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );
    // const [login, setLogin] = useState(false);
    // const [validForm, setValidForm] = useState(true);    

    const submit = async(e) => {
        e.preventDefault();

        const user = {
            name: formValues.name,
            email: formValues.email,
            password1: formValues.password1,
            password2: formValues.password2
          }

        startRegister( user );

        //     let nombre = "";
        //     nombre = formValues.name;
        //     let contraseña = "";
        //     contraseña = formValues.password1;

        // if ( nombre.length < 3 ) {

        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Insert a proper name',
        //         icon: 'error',
        //         confirmButtonText: 'Ok'
        //       })

        //       setValidForm(false);            
        // }

        // const myRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}/g; // Regex for email

        // if ( !myRegex.test(formValues.email) ) {

        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Insert a propper email',
        //         icon: 'error',
        //         confirmButtonText: 'Ok'
        //       })

        //       setValidForm(false);            
        // }

        // if ( (contraseña.length < 6) || (formValues.password1 !== formValues.password2)) {

        //     Swal.fire({
        //         title: 'Error!',
        //         text: 'Passwords most have 6 characters and be the same',
        //         icon: 'error',
        //         confirmButtonText: 'Ok'
        //       })
        //       setValidForm(false);           
        // }

        //     if (validForm) {

        //         try {
        //             const { data } =  await api.post('/register', user);
        //             localStorage.setItem('token', data.token);
        //             localStorage.setItem('id', data.id);

        //             Swal.fire({
        //                 title: 'Welcome!',
        //                 text: 'Enjoy',
        //                 icon: 'success',
        //                 confirmButtonText: 'Ok',
        //                 timer: 2000
        //               });

        //             setLogin(true);
        //             navigate("/giff");       
                     

        //         }            
      
        //         catch (error) {
        //             console.log(error);

        //             Swal.fire({
        //                 title: 'Error!',
        //                 text: error.response.data.error,
        //                 icon: 'error',
        //                 confirmButtonText: 'Ok',
        //                 timer: 2000
        //               });
        //         }
                
        //     }        
    }

  return (
    <div>

        <div className='main-container'>

        
            <h1>Register User</h1>
            <form onChange={ handleInputChange } >
                <label >Name:</label>
                <input type="text" id="name" name="name"  />
                <br/>
                <label >Email:</label>
                <input type="email" id="email" name="email" />
                <br/>
                <label >Password:</label>
                <input type="password" id="password1" name="password1" />
                <br/>
                <label >Confirm Password:</label>
                <input type="password" id="password2" name="password2" />
                <br/>
                <button type="submit" value="Submit" onClick={ submit } > Submit </button>

        
            <p >Already have an account? <Link to={ '/login' }  >Log in here</Link >.</p>

            </form>


        </div>
    </div>
  )
}
