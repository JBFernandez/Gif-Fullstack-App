import React, { useEffect, useState } from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';
import "../Pages/gifPage.css";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuthStore } from '../../hooks/useAuthStore';

export const GiffPage = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState( defaultCategories );
  const navigate = useNavigate();

  const { startLogout } = useAuthStore();


  console.log(categories);

  const savedGifs = (e) => {
    e.preventDefault();

    navigate("/savedgif");
      
  }
  


  return (
    <div>
      <div className='bar' >
       <h2> GifApp </h2>
       <button onClick={savedGifs} > Saved Gifs </button>
      </div>
            < AddCategory setCategories={ setCategories }/> {/* anything we send here is received as a props */}
            <hr/> {/*  REACT tag to place a black line */}        
            <ol>
                {
                    categories.map( category =>  (
                        <GifGrid 
                            key={ category }
                            category={ category }  
                        /> 
                        ))
                }
            </ol>

            <p style={{cursor: 'pointer'}}  onClick={ startLogout } > Logout. </p>
    </div>
  )
}
