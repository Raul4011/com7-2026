import {useState} from 'react'

const Register = () => {

    const form = {
        nombre:'',
        apellido:'',
        email:'',
        contraseña:'',  
        fechaNacimiento:'', 
        sexo:'',
        telefono:'',
        direccion:''
    }

    const [formData, setFormData] = useState(form)


    const handleChange = (e) => {

        const {name, value} = e.target

        setFormData({
            ...formData,
            [name]:value
        })

    }

    const hanldeSubmit = (e) => {
        e.preventDefault()
        //

    }


  return (
    <div>
      <form className='' onSubmit={handleSubmit}>
        <label htmlFor="">nombre</label>
        <input type="text" id="" name="nombre" required onChange={handleChange} />
        <br />
        <label htmlFor="">apellido</label>
        <input type="text" id="" name="apellido" required onChange={handleChange} />
        <br />
        <label htmlFor="">email</label>
        <input type="text" id="" name="email" required onChange={handleChange} />
        <br />
        <label htmlFor="">contraseña</label>
        <input type="password" id="" name="contraseña" required onChange={handleChange} />
        <br />
        <label htmlFor="">fecha Nacimiento</label>
        <input type="date" id="" name="fechaNacimiento" required onChange={handleChange} />
        <br />
        <label htmlFor="">teléfono</label>
        <input type="number" id="" name="telefono" required onChange={handleChange} />
        <br />
        <label htmlFor="">dirección</label>
        <input type="text" id="" name="direccion" required onChange={handleChange} />
        <br />
        <select name="sexo" id="" required onChange={handleChange}>
          <option value="">Seleccione su sexo</option>
          <option value="masculino">masculino</option>
          <option value="femenino">femenino</option>
          <option value="otro">otro</option>
        </select>
        <br />
        <button type="submit">Registrarse</button>

      </form>

    </div>
  )
}

export default Register