/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { GifState } from '../context/Context';
import GifCard from '../components/GifCard';
import FilterGif from '../components/FilterGif';

const Home = () => {

  const { gif, gifs, setGifs, filter } = GifState();

  const fetchTrendingGifs = async() => {

    const {data} = await gif.trending({
      limi:20,
      type:filter,
      rating: 'g'
    });

    setGifs(data);
  };

  useEffect(() => {
    fetchTrendingGifs();
  }, []);

  return (
    <div>
      <img 
      src='/banner.gif'
      alt='gif banner'
      className='mt-2 rounded w-full '
      />

      <FilterGif showTrending />

      <div
      className=' columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4 '
      >
        {
          gifs?.map((gif) => {
            return <GifCard key={gif?.title} gif={gif} />
          } )
        }

      </div>
    </div>
  )
}

export default Home