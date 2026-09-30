import { useState } from 'react'

const MainRegister = () => {

    const initialState = {
        nombre: '',
        apellido: '',
        direccion: '',
        email: '',
        fechaNac: '',
        telefono: ''
    }

    const [formulario, setFormulario] = useState(initialState)
    const handleSubmit = () => {

    }

    return (
        <div className='text-center bg-blue-300'>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='nombre' />
                <br />
                <input type="text" placeholder='apellido' />
                <br />
                <input type="text" placeholder='direccion' />
                <br />
                <input type="text" placeholder='email' />
                <br />
                <input type="date" placeholder='' />
                <br />
                <input type="email" placeholder='email' />
                <br />
                <button type='submit'>registrar</button>
            </form>
        </div>
    )
}

export default MainRegister