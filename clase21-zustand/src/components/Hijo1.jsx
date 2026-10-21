import React from 'react'
import { useStore } from '../store/useStore'

const Hijo1 = () => {

const {nombre,mail} = useStore()

  return (
    <div>
        <h2>soy le hijo 1</h2>
        <h3>{nombre}</h3>
        <h3>{mail}</h3>
    </div>
  )
}

export default Hijo1