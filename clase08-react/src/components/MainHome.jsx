
import Article from './Article'
import Aside from './Aside'

const MainHome = (props) => {
  return (
    <div>
        <Article titulo={props.titulo} saludar={props.saludar} alumnos={props.alumnos} bandera={props.bandera}/>
        <Aside/>
    </div>
  )
}

export default MainHome