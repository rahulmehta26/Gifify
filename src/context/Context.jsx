/* eslint-disable react/prop-types */
import { GiphyFetch } from "@giphy/js-fetch-api";
import { createContext, useContext, useEffect, useState } from "react";

const GifContext = createContext();

const GifProvider = ({ children }) => {

    const [gifs, setGifs] = useState([]);
    const [filter, setFilter] = useState('gifs');
    const [favourites, setFavourites] = useState([]);

    const addToFavourites = (id) => {

      if(favourites.includes(id)){
        const updatedFavourites = favourites.filter((itemId) => itemId !== id );
  
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        setFavourites(updatedFavourites)
      }else{
        const updatedFavourites = [...favourites]
        updatedFavourites.push(id)
        localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
        setFavourites(updatedFavourites)
      }
    };
  
    useEffect(() => {
  
      const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
      setFavourites(favourites);
    }, [])

  const gif = new GiphyFetch(import.meta.env.VITE_GIF_API_KEY);

  return <GifContext.Provider value={{ gif, gifs, setGifs, filter, setFilter, favourites, setFavourites, addToFavourites }}>{children}</GifContext.Provider>;
};

export const GifState = () => {
  return useContext(GifContext);
};

export default GifProvider;
