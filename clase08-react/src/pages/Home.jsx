import Footer from "../components/Footer"
import { Header } from "../components/Header"
import MainHome from "../components/MainHome"
import Navbar from "../components/Navbar"


const Home = (props) => {
    console.log(props)

    console.log(props.bandera)

    props.saludar()

  return (
    <div>
        <Header />
        <Navbar/>
        <MainHome titulo={props.titulo} saludar={props.saludar} alumnos={props.alumnos} bandera={props.bandera}/>
        <Footer/>
    </div>
  )
}

export default Home