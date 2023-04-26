import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    console.log(state);

    useEffect( () => {
      const gifs = getGifs( category ).then( (imgs) => {
                            setState({
                                data: imgs,
                                loading: false
                            })
      });

    }, [category])
    

  return state;
}
