import { useState } from "react"
import useAuthStore from "../../store/useAuthStore"
import { useNavigate } from "react-router-dom"
import Header from "../../components/Header"

const Login = () => {

  const {user,login} = useAuthStore()

  const navigate = useNavigate()

  const [mail,setMail] = useState('')
  const [pass,setPass] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault()

    if(mail==='admin' && pass==='1234'){


      const user = {
        id:1,
        nombre:'raul',
        rol:"admin"
      }
      login(user)
      alert('bienvenido')
      navigate('/movies')
    }else {
      alert('credencilaes incorrectas')
    }

  }

  return (
    <div>
      <Header/>
      <br /><br /><br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">mail
        </label>
        <input type="text" onChange={(e)=>setMail(e.target.value)} />
        <br />
        <label htmlFor="">password
        </label>
        <input type="password" onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button type='submit'>login</button>
      </form>
    </div>
  )
}

export default Login