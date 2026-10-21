import {create} from 'zustand'


export const useStore = create((set)=>({
    //atributos
    nombre:'',
    mail:'',
    contador:0,
    color:false,
    user:localStorage.getItem("user") || null,

    //metodos
    cambiarNombre:(nuevoName)=>set({nombre:nuevoName}),
    cambiarMail:(nuevoMail)=>set({mail:nuevoMail}),
    incrementar:()=>set((state)=>({...state,contador:state.contador+1})),
    decrementar:()=>set((state)=>({contador:state.contador-1})),
    changeColor:()=>set((state)=>({color:!state.color}))


}))