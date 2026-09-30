import React from 'react'
import Header from '../components/Header'
import MainLogin from '../components/MainLogin'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

const Login = () => {
  return (
    <div>
        <Header />
        <Nav/>
        <MainLogin />
        <Footer/>
    </div>
  )
}

export default Login