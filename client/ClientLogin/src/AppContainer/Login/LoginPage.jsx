import React from 'react';
import '../Login/login.css';
import { useForm } from '../../utilities/useForm';
import { Link } from 'react-router-dom';
import { api } from '../../api/api';

export const LoginPage = () => {

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
      localStorage.setItem('Token', data.accessToken);
      localStorage.setItem('id', data.id);

    } catch (error) {
      console.log(error);
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
