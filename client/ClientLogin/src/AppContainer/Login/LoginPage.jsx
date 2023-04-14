import React from 'react';
import '../Login/login.css';
import { useForm } from '../../utilities/useForm';
import { Link } from 'react-router-dom';

export const LoginPage = () => {

    const initialForm = {
      name: '',
      email: '',
      password: '',
  }

  const [ formValues, handleInputChange, reset ] = useForm( initialForm );

  const handleClick = (e) => {
    e.preventDefault();

    console.log(formValues);

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
            <p>Already registered? <Link to={ '/' } >Log in here</Link></p>
          </div>
        </div >
    </div>
  )
}
