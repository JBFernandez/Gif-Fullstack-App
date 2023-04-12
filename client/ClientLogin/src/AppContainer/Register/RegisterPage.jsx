import React from 'react';
import '../Register/register.css';
import { useForm } from '../../utilities/useForm';

export const RegisterPage = () => {

    const initialForm = {
        name: '',
        email: '',
        password1: '',
        password2: ''
    }
    
    const [ formValues, handleInputChange, reset ] = useForm( initialForm );

    const submit = (e) => {
        e.preventDefault();
        console.log(formValues.name);
    }

  return (
    <div>
        <div className='container'>

        
            <h1>Register User</h1>
            <form onChange={ handleInputChange } >
                <label >Name:</label>
                <input type="text" id="name" name="name" />
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

        

            </form>

            <p>Already have an account? <a href="#">Log in here</a>.</p>

        </div>
    </div>
  )
}
