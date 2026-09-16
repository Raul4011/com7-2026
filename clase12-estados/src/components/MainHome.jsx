import React from 'react'
import '../css/MainHome.css'
import { useState } from 'react'
import Saludo from './Saludo'
import { Yerbas } from '../services/Yerbas'
import YerbaCard from './YerbaCard'
import { Row } from 'react-bootstrap'


const MainHome = () => {


    //5 estados para el formulario
    const [nombre, setNombre] = useState('')
    const [marca,setMarca] = useState('')
    const [tamaño, setTamaño] = useState('')
    const [desc,setDesc] = useState('')
    const [imagen,setImagen] = useState('')

    //array propio de yerbas
    const [yerbasNuevas,setYerbasNuevas] = useState(Yerbas)



    let resultado = useState('perondi')

    console.log(resultado);

    let apellido = resultado[0]

    let funcion2 = resultado[1]

    //estado boleano 
    const [visible,setVisible] = useState(false)

    //const [nombre, setNombre] = useState('raquel')
    //let nombre = 'raquel'

    //estado para el contador

    const [contador, setContador] = useState(0)

    //nombre = 'francissco'

    let Alumno = {
        nombre: 'lucas',
        edad: 20
    }

    //destructuring 

    // const {nombre,edad} = Alumno


    // let perritos = ['firu','blacky']

    // let [a,b] = perritos


    //let contador = 0

    const increment = () => {

        //contador<10 ? setContador(contador+1) : setContador(0)
        setContador(contador + 1)
        console.log(contador);
    }

    const decrement = () => {
        setContador(contador - 1)
        console.log(contador);
    }

    const handleClick = () =>{
        setVisible(!visible)
    }

    const handleAgregar =() =>{
        let yerbaNueva = {
            nombre:nombre,
            marca:marca,
            descripcion:desc,
            tamaño:tamaño,
            imagen:imagen
        }
        setYerbasNuevas([...yerbasNuevas,yerbaNueva])





    }

    return (
        <div className='mainhome'>
            <br />

            <h2>Hook useState</h2>
            <br />

            <h4>contador {contador}</h4>
            <br />
            <button type='button' onClick={increment}>+</button>
            <button type='button' onClick={decrement}>-</button>
            <br />

            {/* <h4>nombre del estado: {nombre}</h4> */}
            <button type='button' onClick={() => setNombre('carlos')}>cambiar nombre</button>

        <br />
        <button type='button' onClick={handleClick}>{visible ? 'ocultar' : 'mostrar'}</button>
        
        {visible === true ? <Saludo/> : null }

            <br />


            <br />
        
        <form action="">
            <label htmlFor="">nombre</label>
            <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <label htmlFor="">marca</label>
            <input type="text" onChange={(e)=>setMarca(e.target.value)}/>
            <br />
            <label htmlFor="">descripcion</label>
            <input type="text" onChange={(e)=>setDesc(e.target.value)}/>
            <br />
            <label htmlFor="">tamaño</label>
            <input type="text" onChange={(e)=>setTamaño(e.target.value)}/>
            <br />
            <label htmlFor="">imagen</label>
            <input type="text" onChange={(e)=>setImagen(e.target.value)}/>
            <br />
            <button type='button' onClick={handleAgregar}>agregar</button>
        </form>

        <br />
        <h3>{nombre} - {marca} - {tamaño} - {desc}  - {imagen}</h3>

        <Row>
            {yerbasNuevas.map(yerba=><YerbaCard {...yerba}/>)}    
        </Row>

        </div>
    )
}

export default MainHome