import React from 'react'
import Header from '../components/Header'
import MainHome from '../components/MainHome'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Home = () => {
  return (
    <div>
        <Header />
        <Nav/>
        <MainHome/>
        <Footer/>
    </div>
  )
}

export default Home