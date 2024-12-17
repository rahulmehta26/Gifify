/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { GifState } from '../context/Context';
import FilterGif from '../components/FilterGif';
import GifCard from '../components/GifCard';

const SearchPage = () => {

  const [searchData, setSearchData] = useState([]);

  const {query} = useParams();

  const {gif, filter} = GifState();

  const fetchSearchData = async() => {

    const {data} = await gif.search(query, {
      sort:'relevant',
      lang:'en',
      type:filter,
      limit:20,
    });

    setSearchData(data);
  }

  useEffect(() => {
    fetchSearchData();
  },[filter, query])

  return (
    <div
    className='my-4'
    >

      <h1 className='text-5xl pb-3 font-extrabold ' >{query}</h1>

      <FilterGif 
      alignLeft = {true}
      />

      {
        searchData.length > 0 ? (
          <div
          className=' columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-4 mt-4 '
          >
            {
              searchData?.map((gif) => <GifCard key={gif.id} gif={gif} /> )
            }
          </div>
        ) : (
          <span> No GIFs for {query}. Try searching for stickers instead </span>
        )
      }
    </div>
  )
}

export default SearchPage