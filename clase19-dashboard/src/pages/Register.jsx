import React from 'react'

const Register = () => {
  return (
    <div>
      <form className=''>
        <label htmlFor="">nombre</label>
        <input type="text" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">apellido</label>
        <input type="text" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">email</label>
        <input type="text" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">contraseña</label>
        <input type="password" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">fecha Nacimiento</label>
        <input type="date" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">teléfono</label>
        <input type="text" id="" name="" required onChange={handleChange} />
        <br />
        <label htmlFor="">dirección</label>
        <input type="text" id="" name="" required onChange={handleChange} />
        <br />
        <select>
          <options>ELEGI</options>
          <options>masculino</options>
          <options>femenino</options>
          <options>otro</options>
        </select>


      </form>





    </div>
  )
}

export default Register