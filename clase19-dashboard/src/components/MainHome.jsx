import React from 'react'
import {Link} from 'react-router-dom'
const MainHome = () => {
  return (
    <div>
        <br />
        <h2 className='text-blue-500 text-2xl font-bold'>Bienvenido al Dashboard</h2>
        <br/>
        <Link to="/login" className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600'>Login</Link>


        <br />
    </div>
  )
}

export default MainHome