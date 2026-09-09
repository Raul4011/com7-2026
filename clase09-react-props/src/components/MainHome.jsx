import Camiseta from "./Camiseta"
import '../css/MainHome.css'
import Navigation from "./Navigation"

const MainHome = () => {


    let camisetas = [{
        id: 1,
        numero: 10,
        color: "naranja",
        titular: false,
        talle: 'xl',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0hR_8h4VGh6SzyYLcgrd2LP7NJGHRSHsSeUtXQHV6ILxwXAAr2vLj2X9&s=10'
    }, {
        id: 2,
        numero: 7,
        color: "blanca",
        titular: true,
        talle: 'l',
        imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM0hR_8h4VGh6SzyYLcgrd2LP7NJGHRSHsSeUtXQHV6ILxwXAAr2vLj2X9&s=10'
    }, {
        id: 3,
        numero: 5,
        color: "negra",
        titular: false,
        talle: 'xl',
        imagen: 'https://complex.com.ar/product/camiseta-204/'
    }]


    let gatitos = ['blanquita', 'negrita', 'miau']


     let saludo = "Hola com 7"

    return (
        <div className="mainhome">
         <br />
           <Camiseta camisetas={camisetas} saludo={saludo}/>
              <br />
              <br />
        </div>
    )
}

export default MainHome