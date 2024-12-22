/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import SocialFollowOn from './SocialFollowOn'

const Footer = () => {
  return (
    <footer>
        <div
        className='relative flex gap-4 justify-between items-center py-4'
        >

        <div
        className=' space-y-4 '
        >
        <Link to="/" className=" flex gap-x-3 ">
          <img src="/gifify.webp" className="size-12 rounded-full object-cover " alt="Gifify logo" />

          <h1 className="text-5xl font-bold tracking-tight cursor-pointer ">
            GIFIFY
          </h1>
        </Link>

        <div
        className=' faded-text '
        >
            Made by Rahul Mehta
        </div>
        </div>
        <div>
            <SocialFollowOn />
        </div>
        </div>
    </footer>
  )
}

export default Footer
