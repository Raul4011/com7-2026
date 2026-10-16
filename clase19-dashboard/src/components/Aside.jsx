import React from 'react'
import {NavLink} from 'react-router-dom'

const Aside = () => {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/productos">productos</NavLink>
            </li>
            <li>
                <NavLink to="/ventas">ventas</NavLink>
            </li>
            <li>
                <NavLink to="/empleados">empleados</NavLink>
            </li>
            <li>
                <NavLink to="/clientes">clientes</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Aside