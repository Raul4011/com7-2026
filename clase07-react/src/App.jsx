import Saludo from "./Saludo"

function App() {
  
  let nombre = "juan";

  return (
    <>
     
      <Saludo />
      <br />
      <h3>Hola {nombre}</h3>
    </>
  )
}

export default App
