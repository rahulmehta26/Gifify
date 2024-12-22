/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { GifState } from '../context/Context';
import GifCard from '../components/GifCard';
import FilterGif from '../components/FilterGif';
import Skeleton from '../components/Skeleton';

const Home = () => {

  const { gif, gifs, setGifs, filter } = GifState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchTrendingGifs = async () => {
    setIsLoading(true); 
    try {
      const { data } = await gif.trending({
        limit: 50, 
        type: filter,
        rating: 'g',
      });
      setGifs(data);
    } catch (error) {
      console.error('Error fetching trending GIFs:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, [filter]);


  return (

    <div>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <img
            src="banner.gif"
            alt="gif banner"
            className="mt-2 rounded w-full"
          />
          <FilterGif showTrending />

          <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4">
            {gifs?.map((gif) => (
              <GifCard key={gif?.title} gif={gif} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Home