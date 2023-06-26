import React, { useEffect, useState } from 'react'
import { AddCategory } from '../components/AddCategory';
import { GifGrid } from '../components/GifGrid';
import "../Pages/gifPage.css";
import { Link, useNavigate } from 'react-router-dom';
import { getSavedGifs } from '../../helpers/getSavedGifs';
import { GifGridItem } from '../components/GifGridItem';
import { api } from '../../api/api';

export const SavedGifs = () => {

  const navigate = useNavigate();

  const userId = localStorage.getItem("id");

  const [savedGifs, setSavedGifs] = useState({
    data: [],
    loading: true
  });

  const handleDelete = (e) => {
      e.preventDefault();

      let imgs = savedGifs.data;

      const result = imgs.filter( img => img.id != e.target.id );

      setSavedGifs({
        data: result,
        loading: false
      })

      api.delete(`/gifs/${e.target.id}`);


  }

  useEffect( () => {
    const gifs = getSavedGifs( userId ).then( (imgs) => {
                          setSavedGifs({
                              data: imgs,
                              loading: false
                          })
    });


  }, [userId]);


  const findGifs = (e) => {
    e.preventDefault();

    navigate("/giff");
    
      
  }

  const { data, loading } = savedGifs;

  console.log(data);

  return (
    <div>
      <div className='bar' >
       <h2> GifApp </h2>
       <button onClick={findGifs} > Find Gifs </button>
      </div>
            <hr/> {/*  REACT tag to place a black line */}  
            <h3 className='animate__animated animate__fadeIn'> </h3>
            {loading && <p className='animate__animated animate__flash'>Loading</p>}
    
    <div className='card-grid'>   
      <ol>
            {
                data.map( gif =>  (
                  <div key={gif.id} className="card animate__animated animate__fadeIn"> 
                    <img src={gif.url} alt={gif.title}/>
                    <p> { gif.title } </p>
                    <a onClick={ handleDelete } id={gif.id} content={ gif.url + ".-." + gif.title  } className="btn btn-primary">Delete Gif</a>
                  </div>
                    ))
            }
        </ol> 
    </div>

    <p> <Link to={ '/login' }  >Logout</Link >.</p>

    </div>
  )
}
