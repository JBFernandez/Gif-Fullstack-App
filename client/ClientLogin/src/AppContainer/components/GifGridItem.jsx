import React from "react"
import { api } from "../../api/api";
import Swal from "sweetalert2";

export const GifGridItem = ({ id, title, url }) => {

    const handleClick = async(e) => {
        e.preventDefault();

        const x = e.target.attributes.content.value.split(".-.");
        const url = x[0];
        const title = x[1];
        const userId = localStorage.getItem("id");

        console.log(url);
        console.log( title );
        console.log( userId );

        const gif = {
            title: title,
            url: url,
            userId: userId
        }


        try {

            const {data} = await api.post("/gifs", gif );
            
            Swal.fire({
                title: 'Gif Saved Successfully',
                text: 'Enjoy',
                icon: 'success',
                confirmButtonText: 'Ok',
                timer: 2000
              });
            
        } catch (error) {

            console.log(error);

                    Swal.fire({
                        title: 'Error!',
                        text: error.response.data.error,
                        icon: 'error',
                        confirmButtonText: 'Ok',
                        timer: 2000
                      });            
        }



    }


    return (
        <div className="card animate__animated animate__fadeIn"> 
            <img src={url} alt={title}/>
            <p> { title } </p>
            <a onClick={ handleClick } content={ url + ".-." + title } className="btn btn-primary">Save Gif</a>
        </div>
    )
    
}