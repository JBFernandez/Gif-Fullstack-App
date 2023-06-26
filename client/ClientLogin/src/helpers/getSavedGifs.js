import { api } from "../api/api";

export const getSavedGifs = async( userId ) => {

    const { data } = await api.get(`/gifs/${userId}`);

    
    // const gifs = data.map( (img) => {
    //     return {
    //         id: img.id,
    //         title: img.title,
    //         url: img.images?.downsized_medium.url
    //     }
    // } );



    return data;

}