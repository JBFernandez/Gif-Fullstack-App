import React from 'react';
import '../Login/login.css';
import { useForm } from '../../utilities/useForm';
import { Link, useNavigate } from 'react-router-dom';
import { api } from '../../api/api';
import Swal from 'sweetalert2';

export const LoginPage = () => {

  const navigate = useNavigate();

    const initialForm = {
      name: '',
      email: '',
      password: '',
  }

  const [ formValues, handleInputChange, reset ] = useForm( initialForm );

  const handleClick = async(e) => {
    e.preventDefault();

    const user = {
      email: formValues.email,
      password: formValues.password
    }

    try {

      const { data } =  await api.post('/login', user);
      localStorage.setItem('token', data.token);
      localStorage.setItem('id', data.id);

      console.log(data);

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

      Swal.fire({
        title: 'Error!',
        text: error.response.data.error,
        icon: "error",
        confirmButtonText: 'Ok',
        timer: 2000
      });

    }


    
  }

  return (
    <div>
        <div className='login-container' >
          <h1>Login</h1>
          <form onChange={ handleInputChange } >
            <label >Email:</label>
            <input type="email" id="email" name="email" />

            <label >Password:</label>
            <input type="password" id="password" name="password" />

            <input onClick={ handleClick } type="submit" value="Log in" />
          </form>
          <div className="already-registered">
            <p>You don't have and account? <Link to={ '/' } >Create Account</Link></p>
          </div>
        </div >
    </div>
  )
}
