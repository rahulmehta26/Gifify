/* eslint-disable no-unused-vars */
import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'

const Layout = () => {
  return (
    <div
    className=' min-h-screen text-[#fff] bg-bg-gradient'
    > 

    <div
    className=' px-20 py-4 mx-auto '
    >

        <header>
            <Header />
        </header>

        <main>
            <Outlet />
        </main>

        <footer></footer>

    </div>

    </div>
  )
}

export default Layout