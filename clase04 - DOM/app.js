console.log('DOM com 7');



document.getElementById('h1').style.color = "blue"

document.getElementById('ul').innerHTML = `
            <li>Js</li>
            <li>Go</li>
            <li>python</li>
            <li>c#</li>`

let Alumnos = ['ocaranza','paez','sosa','ritorto']


let listaOrdenada = document.getElementById('ol')

for (let i = 0; i < Alumnos.length; i++) {
   listaOrdenada.innerHTML += `<li>${Alumnos[i]}</li>`
    
}

function saludar (){
    console.log('hola estoy clickeando');
}


const showOrdenedList = () => {
    document.getElementById('ol').style.display = 'block'
}
const hideOrdenedList = () =>{
document.getElementById('ol').style.display = 'none'
}

document.getElementById('mostrar').addEventListener('click',showOrdenedList)

document.getElementById('ocultar').addEventListener('click',hideOrdenedList)



const changeBackgorundColor = () => {
    document.getElementById('h3').style.backgroundColor = 'yellow'
}
const changeBackgorundColor2 = () => {
    document.getElementById('h3').style.backgroundColor = 'tomato'
}


//document.getElementById('h3').innerHTML = 'hola com 5'

document.getElementById('h3').addEventListener('mouseenter',changeBackgorundColor)

document.getElementById('h3').addEventListener('mouseleave',changeBackgorundColor2)

let Alumnos2 = []



function handleSubmit(e) {
    e.preventDefault()

    let nuevoAlumno = {
        nombre:'',
        email:'',
        telefono:''
    }

    let nombre = document.getElementById('nombre').value
    let email = document.getElementById('email').value
    let telefono = document.getElementById('tel').value

    nuevoAlumno.nombre = nombre
    nuevoAlumno.email = email
    nuevoAlumno.telefono = telefono

    Alumnos2.push(nuevoAlumno)

    console.log(nombre+' '+email+' '+telefono);
    console.log(Alumnos2);
}

document.getElementById('btnSubmit').addEventListener('click',handleSubmit)

document.getElementById('root').innerHTML = `
<table>
    <thead>
        <th>id</th>
        <th>nombre</th>
        <th>email</th>
    </thead>
    <tbody>
        <td>1</td>
        <td>raul</td>
        <td>raul@gmail.com</td>
    </tbody>
</table>
`







