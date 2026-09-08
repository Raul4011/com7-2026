import Home from './pages/Home'



function App () {


  const alumnos = ['Raul', 'Juan', 'Pedro', 'Maria', 'Lucia']
  let titulo = 'Com 5 y 7'
  let bandera = false

  function Saludar (){
    console.log('Hola welcome to React js');
  }



  return <div>

   <Home alumnos={alumnos} titulo={titulo} bandera={bandera} saludar={Saludar}/>

  </div>

}

export default App






