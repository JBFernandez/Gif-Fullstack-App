import React, { useState } from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';
import "../Pages/gifPage.css";

export const GiffPage = ({ defaultCategories = [] }) => {

  const [categories, setCategories] = useState( defaultCategories );

  console.log(categories);

  return (
    <div>
       <h2> GifApp </h2>
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
    </div>
  )
}
