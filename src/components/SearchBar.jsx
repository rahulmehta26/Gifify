/* eslint-disable no-unused-vars */
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {

    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const SearchGifs = async() => {

        if(query.trim() === '' ){
            return;
        }

        navigate(`/search/${query}`) 
    };

  return (
    <div
    className='flex relative'
    >
        <input 
        type='text'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder='Search all the GIFs and Stickers'
        className=' w-full pl-4 pr-14 py-5 text-xl text-[#000] rounded-l border border-gray-300 outline-none '
        />

        {
            query && (
                <button
                onClick={() => setQuery('')}
                className=' absolute w-10 h-10 bg-gray-300/50 rounded-full right-20 top-4 flex flex-col justify-center items-center '
                >
                    <XMarkIcon className=' size-8 text-gray-500 ' />
                </button>
            )
        }

        <button
        onClick={SearchGifs}
        className=' bg-gradient-to-tr from-purple-600 via-purple-500 to-purple-400 text-white px-4 py-2 rounded-r '
        >
            <MagnifyingGlassIcon className=' size-10  ' />
        </button>

    </div>
  )
}

export default SearchBar