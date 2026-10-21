import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Padre1 from './components/Padre1'
import Padre2 from './components/Padre2'
import Home from './pages/Home'
import PrivateRoute from './routes/PrivateRoute'
import Productos from './components/Productos'

const App = () => {

  const [form, setForm] = useState({})
  const [count, setCount] = useState(0)

  const getForm = (dato) => {
    setForm(dato)
  }
  const getCount = (contador) => {
    setCount(contador)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        
        <Route element={<PrivateRoute />}>
          <Route path='/productos' element={<Productos />} />
        </Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App