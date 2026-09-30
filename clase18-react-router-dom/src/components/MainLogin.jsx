
import { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'


const MainLogin = () => {

    const navigate = useNavigate()

    const [user,setUser] = useState('')
    const [pass,setPass] = useState('')


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('aqui manejo el formulario');
        if(!user && !pass){
            alert('debes ingresar los datos del login')
        }
        //peticion POST con esos datos
        //e ir y buscar si existen en mi DB

        if (user==="admin" && pass==="12345") {
            alert('welcome to my page')
            //window.location.href = "/contact"
            navigate("/contact")
        }else {
            alert('datos incorrectos')
        }



    }

  return (
    <div className="w-full max-w-xs" style={{margin:"auto"}}>
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="username">
        usuario
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username" onChange={(e)=>setUser(e.target.value)}/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" onChange={(e)=>setPass(e.target.value)}/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
      <br />
      <br />
     
    
    </div>
     <Link  className="inline-block align-baseline font-bold text-sm text-green-800 hover:text-blue-800" to="/register">
        Register
      </Link>
  </form>

</div>
  )
}

export default MainLogin