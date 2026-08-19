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



const Respirar = () =>{
    //console.log('respirando...');
    let date = new Date()
    let fecha = date.getDay()
let hora = date.getHours()
let minutos =  date.getMinutes()
let segundos = date.getSeconds()
console.log(hora+':'+minutos+':'+segundos);

}
//Respirar()

//setInterval(Respirar,2000)




