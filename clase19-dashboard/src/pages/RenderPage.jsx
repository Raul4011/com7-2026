import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState} from 'react'
import './app.css'
import Productos from './pages/Productos'
import Ventas from './pages/Ventas'
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'



const RenderPage = () => {

  const [page, setPage] = useState('productos')

  const renderPage = () => {
    switch (page) {
      case 'productos':
        return <Productos/>
      case 'ventas':
        return <Ventas/>
      case 'empleados':
        return <Empleados/>
      case 'clientes':
        return <Clientes/>
      default:
        return <Productos/>
    }
  }

  return (
    <div className='flex'>
      <div className='izq'>
        <ul>
          <li>
            <button className="bg-green-200 text-black" type="button" onClick={() => setPage('productos')}>productos</button>
          </li>
          <li>
            <button className="bg-green-200 text-black" type="button" onClick={() => setPage('ventas')}>ventas</button>
          </li>
          <li>
            <button className="bg-green-200 text-black" type="button" onClick={() => setPage('empleados')}>empleados</button>
          </li>
          <li>
            <button className="bg-green-200 text-black" type="button" onClick={() => setPage('clientes')}>clientes</button>
          </li>
        </ul>
      </div>
      <div className='der'>
        
        {renderPage()}
      </div>
     
    </div>
  )
}

export default RenderPage