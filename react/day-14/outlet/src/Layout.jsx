import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
        <header>
            <nav>
                <Header/>
            </nav>
        </header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <Footer/>
        </footer>
    </>
  )
}
