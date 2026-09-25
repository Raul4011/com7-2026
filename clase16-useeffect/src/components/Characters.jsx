import { useState, useEffect } from 'react'
import Character from './Character'
import { BASE_URL_CHARACTERS } from '../services/api'

const Characters = () => {


    const [personajes, setPersonajes] = useState([])
    const [busqueda,setBusqueda] = useState('')

    const getCharacters = async () => {
        try {
            let response = await fetch(BASE_URL_CHARACTERS)
        let data = await response.json()
        console.log(data.items);
        setPersonajes(data.items)
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        getCharacters()
    }, [])


    const handleSubmit = async(e) => {
        e.preventDefault()
        let response = await fetch(`${BASE_URL_CHARACTERS}?name=${busqueda}`)
        let data = await response.json()
        console.log(data);
        setPersonajes(data)
        
    }




    return (
        <div>
            <br />
            <h2>Listado de Personajes</h2>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">search</label>
                <input type="search" placeholder='busca tu personaje' onChange={(e)=>setBusqueda(e.target.value)} />
                <button type='submit'>buscar</button>
            </form>
            
            <br />

            <div className='grid grid-col-3 gap-4'>

                {personajes.map(personaje => <Character key={personaje.id} {...personaje} />)}
            </div>

            <br />
        </div>
    )
}

export default Characters