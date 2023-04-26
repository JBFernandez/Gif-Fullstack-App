import React from "react"

export const GifGridItem = ({ id, title, url }) => {

    const handleClick = (e) => {
        e.preventDefault();

        const x = e.target.attributes.content.value.split(".-.");
        const url = x[0];
        const title = x[1];
        const userId = localStorage.getItem("id");


        console.log( url );
        console.log( title );
        console.log( userId );
    }


    return (
        <div className="card animate__animated animate__fadeIn"> 
            <img src={url} alt={title}/>
            <p> { title } </p>
            <a onClick={ handleClick } content={ url + ".-." + title } className="btn btn-primary">Go somewhere</a>
        </div>
    )
    
}