// console.log('Promesas');


// //consultas de tipo HTTP (GET, POST , PUT , DELETE , PATCH , OPTIONS , QUERY)

// // GET -> consultar o traer algo de mi db
// // POST -> agregar algo a mi db
// // PUT -> editar algo de mi db
// // DELETE -> eliminar algo de mi db

// //puedo utilizar fetch(nativo de JS) 
// // lib privadas como Axios o Swr

// //principales diferencia entre fetch y axios
// //fetch debo parsera a json mi respuesta axios no hace falta
// //y axios me devuelve todo el resultado dentro de una carpeta DATA

// //SQL structured query lenguage
// //NOSQl no relaciones mongo db cansadra redis 
// //SQL relacionales mysql sqlserver postgressql mariadb 

// const Alumno = {
//     nombre:'ramiro',
//     edad:30,
//     materiasCursadas:['prog1','']
// }

// //

// //APi - aplication program interface

// //endpoints

// //api de rick y morty
const URL_CHARACTERS = "https://rickandmortyapi.com/api/character"
// //api de cocteles
// const Random_cocktail = "https://www.thecocktaildb.com/api/json/v1/1/random.php"


// //ednpoindt productos
// //http://localhost:/productos

// function getCharacters () {
//     // fetch(URL_CHARACTERS)
//     //     .then(resp => resp.json())
//     //     .then(response=>{
//     //         console.log(response.results)

//     //         response.results.map(character=>document.getElementById('root').innerHTML += `
//     //         <div class="col-md-4 mt-2 mb-2">
//     //         <div class="card" style="width: 18rem;">
//     //             <img src="${character.image}" class="card-img-top" alt="...">
//     //             <div class="card-body">
//     //             <h5 class="card-title">Nombre:${character.id} - ${character.name}</h5>
//     //             <p class="card-text">specie: ${character.species}</p>
//     //             <a href="#" class="btn btn-primary">Go somewhere</a>
//     //             </div>
//     //         </div>
//     //         </div>
//     //         `)
//     //     })
//     //     .catch(e=>console.error(e))

//     axios.get(URL_CHARACTERS)
//         .then(response=>{
//             console.log(response.data.results)
//             response.data.results.map(character=>document.getElementById('root').innerHTML += `
//             <div class="col-md-4 mt-2 mb-2">
//             <div class="card" style="width: 18rem;">
//                 <img src="${character.image}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                 <h5 class="card-title">Nombre:${character.id} - ${character.name}</h5>
//                 <p class="card-text">specie: ${character.species}</p>
//                 <a href="#" class="btn btn-primary">Go somewhere</a>
//                 </div>
//             </div>
//             </div>
//             `)
//         })
//         .catch(e=>console.error(e))
// }

// getCharacters()

// const getRandomCocktail = () =>{
//     fetch(Random_cocktail).then(resp=>resp.json()).then(response=>{
//         console.log(response);
//         document.getElementById('row').innerHTML = `
//         <div class="card" style="width: 18rem;">
//         <img src=${response.drinks[0].strDrinkThumb} class="card-img-top" alt="...">
//             <div class="card-body">
//             <h5 class="card-title">${response.drinks[0].strDrink}</h5>
//             <p class="card-text">category: ${response.drinks[0].strCategory}</p>
//             <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//         `
//     })
// }
// getRandomCocktail()



const getCharacters2 = async () =>{
    const response = await axios.get(URL_CHARACTERS)
    if (!response) {
        alert('Hubo un error en la DB')
    }
    response.data.results.map(character=>document.getElementById('root').innerHTML += `
            <div class="col-md-4 mt-2 mb-2">
            <div class="card" style="width: 18rem;">
                <img src="${character.image}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">Nombre:${character.id} - ${character.name}</h5>
                <p class="card-text">specie: ${character.species}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>
            `)
}
getCharacters2()