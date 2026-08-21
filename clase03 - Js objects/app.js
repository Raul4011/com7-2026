// console.log('clase02 - Javascript');

// //string nombre = 'pepito';
// let nombre = 'pepito'
// //var edad = 50
// const pi = 3.141596

// nombre = 'sara'
// //console.log(nombre+edad);

// console.log(nombre);

// // pi = 4.20
// // console.log(pi);

// //let nombre2 = prompt('ingresa tu nombre')
// //let edad2 = prompt("ingresa tu edad")

// // if (edad2>= 18){
// //     //alert(nombre2+' '+'eres mayor de edad')
// // }else {
// //      //alert(`${nombre2} es menor de edad`)
// // }
// //if ternario
// //edad2>=18 ? "eres mayor" : "eres menor"

// // switch (edad) {
// //     case edad>18:
// //         alert("")
// //         break;
// //     case edad<18:

// //     default:
// //         break;
// // }

// //array en c#
// //string[] perritos = new string[5]

// let perritos = ['firu','morita','paco','lula','pancha']

// // == comparo x valor
// // === comparo x valor y tipo
// for(let i =0;i<perritos.length;i++){
//     //console.log(perritos[i]);
//     if(perritos[i]==="lula")
//         {
//             console.log(perritos[i]);
//         }else{
//             console.log('el perrito no esta');
//         }
// }

// //filter //find //some //includes

// console.log(perritos.includes("lula"))

// const numeros = [2,4,6,1,5,9,3,7]

// console.log(numeros.sort())

// console.log(Math.floor(Math.random() * (100 - 1) + 1));

// let datos = ['diego',36,true,2+8,null,undefined]

// datos.forEach(dato=>console.log(dato))

// //let pepito = prompt('ingresa tu nombre querido visitante')

// function Saludar (visitante) {
//     console.log('Hola '+ visitante);
// }

//Saludar(pepito)

// const Respirar = () =>{
//     //console.log('respirando...');
//     let date = new Date()
//     let fecha = date.getDay()
// let hora = date.getHours()
// let minutos =  date.getMinutes()
// let segundos = date.getSeconds()
// console.log(hora+':'+minutos+':'+segundos);

// }
//Respirar()

//setInterval(Respirar,2000)

//clase03

//objetos

console.log("clase03");

// class Person {
//     constructor(nombre,edad){
//         this.nombre=nombre
//     }
// get()
// set()
//    // dormir()

// }

const Alumno = {
  nomyape: "leonel coronel",
  edad: 20,
  casado: true,
  mascotas: [
    {
      nombreMascota: "mila",
      raza: "salchicha",
      vacunas: [
        {
          nombreVacuna: "rabia",
          dosis: "5ml",
        },
        {
          nombreVacuna: "moquillo",
          dosis: "10ml",
        },
        {}
      ],
    },
    {
      nombreMascota: "alma",
      raza: "labrador",
      vacunas: [
        { nombreVacuna: "rabia", dosis: "15ml" },
        {
          nombreVacuna: "sarna",
          dosis: "25ml",
        },
      ],
    },
  ],
  dormir:()=>console.log('zzzzzz'),
  comer:()=>console.log('ñam ñam')
};


let vacunas = ["rabia",'parasitos']

vacunas.forEach(vacuna=>console.log(vacuna))

vacunas.push('sarna')
console.log(vacunas);

vacunas.pop()
console.log(vacunas);



Alumno.comer()




console.log(Alumno.casado);

let mensaje = Alumno.casado == true ? "esta casado" : 'esat soltero'
console.log(mensaje);

//quiero buscar el nombre de la primer vacuna de alma
let nombreprimervacuna = Alumno.mascotas[1].vacunas[0].nombreVacuna
console.log(nombreprimervacuna);


const Estudiantes = [
    {
        legajo:52487,
        nombre:'leonel coronel',
        edad:20,
        estudiar:()=>console.log('estudiando js')
    },{ legajo:25846,
        nombre:'lucas sosa',
        edad:20,
        estudiar:()=>console.log('estudiando js')},{ legajo:null,
        nombre:'atalia gil',
        edad:19,
        estudiar:()=>console.log('estudiando js')},{ legajo:null,
        nombre:'vale paz',
        edad:19,
        estudiar:()=>console.log('estudiando js')}
]

for (const estudiante of Estudiantes) {
    console.log(estudiante.edad);
}









