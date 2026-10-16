import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { useState } from 'react'
import './app.css'
import Productos from './pages/Productos'
import Ventas from './pages/Ventas'
import Empleados from './pages/Empleados'
import Clientes from './pages/Clientes'
import Aside from './components/Aside'
import Register from './pages/Register'
import Login from './pages/Login'


const App = () => {

  const [page, setPage] = useState('productos')

  const renderPage = () => {
    switch (page) {
      case 'productos':
        return <Productos />
      case 'ventas':
        return <Ventas />
      case 'empleados':
        return <Empleados />
      case 'clientes':
        return <Clientes />
      default:
        return <Productos />
    }
  }

  return (
    <div className="flex">
      <BrowserRouter>``
        <div className='izq'>
          <Aside />
        </div>
        <div className='der'>
          <Routes>
            
            <Route path="/productos" element={<Productos />} />
            <Route path="/ventas" element={<Ventas />} />
            <Route path="/empleados" element={<Empleados />} />
            <Route path="/clientes" element={<Clientes />} />
          </Routes>
        </div>
      </BrowserRouter >
    </div>
  )
}

export default App