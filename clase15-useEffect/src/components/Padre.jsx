







import { useState, useEffect } from "react";
import Hijo from "./Hijo";


const Padre = () => {

    

    const [count, setCount] = useState(0)
    const [nombre,setNombre] = useState('')
    const [mostrar,setMostrar] = useState(false)

    useEffect(() => {
        console.log('padre montado');
    }, [])


    const handleName = (e) => {
        setNombre(e.target.value)
    }

    return (
        <div>

            <br />
            <button type="button" onClick={() => setCount(count + 1)}>+</button>
            <button type="button" onClick={() => setCount(count - 1)}>-</button>
            <h3>contador: {count}</h3>
            <br />

            <form action="">

                <input type="text" placeholder="ingresa tu nombre" onChange={handleName} />
            </form>
        <h3>nombre: {nombre}</h3>
        <br />
        <h4>componente hijo aqui debajo</h4>
        <br />
        <button type="button" onClick={()=>setMostrar(!mostrar)}>cambiar</button>
        {mostrar && <Hijo/> }
        <br /><br />
        </div>
    )
}

export default Padre