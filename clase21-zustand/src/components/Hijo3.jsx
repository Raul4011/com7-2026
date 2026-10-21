import { useState } from "react"
import { useStore } from "../store/useStore"

const Hijo3 = () => {

    const {cambiarNombre,cambiarMail} = useStore()

    // const [nombre,setNombre]=useState("")
    // const [mail,setMail]=useState("")

    const handleSubmit = (e) =>{
        // e.preventDefault()
        // const dato={
        //     nombre,mail
        // }
        // getForm(dato)   
    }

  return (
    <div>
        <h3>soy el hijo3</h3>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">nombre</label>
            <input type="text" onChange={(e)=>cambiarNombre(e.target.value)}/>
            <br />
            <label htmlFor="">email</label>
            <input type="text" onChange={(e)=>cambiarMail(e.target.value)}/>
            <br />
            <button>enviar</button>
        </form>
        
    </div>
  )
}

export default Hijo3