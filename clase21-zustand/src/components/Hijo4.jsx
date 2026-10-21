import {useState} from 'react'
import { useStore } from '../store/useStore'

const Hijo4 = ({getCount}) => {

    const {incrementar,decrementar} = useStore()

    const [count,setCount]=useState(0)

const Incrementar = () =>{
setCount(count+1)
}

const Decrementar = () =>{
setCount(count-1)
}
getCount(count)

  return (
    <div>
        <button onClick={incrementar}>+</button>
        <button onClick={decrementar}>-</button>
        <br />
        
    </div>
  )
}

export default Hijo4