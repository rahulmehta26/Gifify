/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { GifState } from "../context/Context";
import GifCard from "../components/GifCard";

const MyList = () => {
  const { gif, favourites } = GifState();

  const [favouritesGifs, setFavouritesGifs] = useState([]);

  const fetchFavouritesGifs = async () => {
    const { data } = await gif.gifs(favourites);
    setFavouritesGifs(data);
  };

  useEffect(() => {
    fetchFavouritesGifs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favourites]);

  return (
    <div className="mt-2">
      <span className="faded-text">My Favourites</span>

      <div className="columns-2 md:col-span-3 lg:columns-4 xl:columns-5 my-2 gap-4 ">
        {favouritesGifs?.map((gif) => (
          <GifCard key={gif.id} gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default MyList;
